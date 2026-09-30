/**
 * Formspree AJAX Integration for Khariz Portfolio
 * Endpoint: https://formspree.io/f/xaenvapw
 */
(function() {
  'use strict';

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaenvapw';

  // Inject CSS Styles for Toast Notifications
  function injectStyles() {
    if (document.getElementById('formspree-custom-styles')) return;
    const style = document.createElement('style');
    style.id = 'formspree-custom-styles';
    style.textContent = `
      /* Notification Toast */
      .formspree-toast {
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #191918;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        padding: 16px 20px;
        font-size: 14px;
        font-family: 'Space Grotesk', 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
        z-index: 100000;
        display: flex;
        align-items: center;
        gap: 12px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
      }
      .formspree-toast.active {
        opacity: 1;
        transform: translateY(0);
      }
      .formspree-toast.success {
        border-left: 4px solid #22c55e;
      }
      .formspree-toast.error {
        border-left: 4px solid #ef4444;
      }
    `;
    document.head.appendChild(style);
  }

  // Toast Notification Helper
  function showToast(message, type = 'success') {
    let toast = document.getElementById('formspree-toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'formspree-toast-msg';
      toast.className = 'formspree-toast';
      document.body.appendChild(toast);
    }

    toast.className = `formspree-toast ${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : '✕'}</span>
      <div>${message}</div>
    `;

    requestAnimationFrame(() => {
      toast.classList.add('active');
    });

    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  // Close Framer Overlay if open
  function dismissOverlay() {
    // Try clicking close button or dispatching escape key
    const closeBtn = document.querySelector('[data-framer-name="Close"], [aria-label="Close"], .framer-overlay-dismiss, #overlay');
    if (closeBtn) {
      closeBtn.click();
    }
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27, bubbles: true }));
  }

  // AJAX Form Submission Handler
  async function handleFormSubmission(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    let originalText = '';

    if (submitBtn) {
      originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';
    }

    try {
      const formData = new FormData(form);
      const endpoint = form.action && form.action.includes('formspree.io') ? form.action : FORMSPREE_ENDPOINT;

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showToast('Thank you! Your submission has been received successfully.', 'success');
        form.reset();

        // If inside a modal/overlay, close it after 1.5 seconds
        setTimeout(dismissOverlay, 1500);
      } else {
        const data = await response.json().catch(() => ({}));
        let errorMsg = 'Oops! There was a problem submitting your form. Please try again.';
        if (data && data.errors && data.errors.length) {
          errorMsg = data.errors.map(err => err.message).join(', ');
        }
        showToast(errorMsg, 'error');
      }
    } catch (err) {
      console.error('Formspree submit error:', err);
      showToast('Network error. Please check your connection and try again.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  }

  // Intercept all form submit events in capture phase
  function setupFormInterceptor() {
    document.addEventListener('submit', function(e) {
      const form = e.target;
      if (!form || !(form instanceof HTMLFormElement)) return;

      e.preventDefault();
      e.stopPropagation();

      handleFormSubmission(form);
    }, true);
  }

  // Initialize
  function init() {
    injectStyles();
    setupFormInterceptor();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
