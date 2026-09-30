/**
 * Khariz Portfolio Bento Grid & Lightbox Controller
 */
(function() {
  'use strict';

  const KHARIZ_PROJECTS = [
    {
      id: 1,
      title: "FixTrack",
      category: "Property Maintenance Operations",
      filter: "fullstack",
      tech: ["React", "Next.js", "Tailwind CSS", "PHP & MySQLi"],
      desc: "Property maintenance dashboard for tracking tenant requests, contractor workload, and response metrics.",
      image: "./assets/images/khariz/IMG_2476.JPG.jpeg",
      span: "col-span-2 row-span-2"
    },
    {
      id: 2,
      title: "MoundIQ",
      category: "Sports Analytics & Pitch Intel",
      filter: "dashboard",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      desc: "Real-time pitching intelligence platform helping coaching staff make data-driven decisions.",
      image: "./assets/images/khariz/IMG_2484.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 3,
      title: "MODIQO",
      category: "Agentic AI Developer Platform",
      filter: "dashboard",
      tech: ["Next.js", "Tailwind CSS", "Node.js"],
      desc: "Enterprise CLI and platform that turns agent workflows into deterministic, production-ready code.",
      image: "./assets/images/khariz/IMG_2485.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 4,
      title: "Miracle+",
      category: "Auth & Workspace Portal",
      filter: "ui",
      tech: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
      desc: "Clean authentication portal for accessing workspaces, agent teams, and project pipelines.",
      image: "./assets/images/khariz/IMG_2498.JPG.jpeg",
      span: "col-span-1 row-span-2"
    },
    {
      id: 5,
      title: "Nexus AI",
      category: "Conversational AI Platform",
      filter: "ui",
      tech: ["React", "Next.js", "Tailwind CSS"],
      desc: "Interactive enterprise landing page with real-time conversational AI testing before booking.",
      image: "./assets/images/khariz/IMG_2500.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 6,
      title: "Keldron",
      category: "Cloud & Telemetry Observability",
      filter: "dashboard",
      tech: ["React", "Next.js", "Tailwind CSS"],
      desc: "Infrastructure console for monitoring system integrations, telemetry loops, and cluster health.",
      image: "./assets/images/khariz/IMG_2501.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 7,
      title: "Vestra Wealth",
      category: "FinTech & Wealth Management",
      filter: "fullstack",
      tech: ["React", "Next.js", "PHP & MySQLi", "Tailwind"],
      desc: "Multi-asset portfolio tracker displaying real-time holdings, asset allocation, and dividend yields.",
      image: "./assets/images/khariz/IMG_2502.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 8,
      title: "Finku",
      category: "Cross-Border FinTech",
      filter: "fullstack",
      tech: ["React", "Tailwind CSS", "PHP & MySQLi"],
      desc: "Cross-border financial app for automated multi-currency transfers, expense tracking, and debit cards.",
      image: "./assets/images/khariz/IMG_2519.JPG.jpeg",
      span: "col-span-2 row-span-1"
    },
    {
      id: 9,
      title: "Synais",
      category: "AI Financial Management",
      filter: "dashboard",
      tech: ["Next.js", "Tailwind CSS", "MySQLi"],
      desc: "AI-powered financial automation platform helping teams eliminate manual reporting and track metrics.",
      image: "./assets/images/khariz/IMG_2520.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 10,
      title: "NorthStrm",
      category: "CRM & Sales Intelligence",
      filter: "fullstack",
      tech: ["React", "Next.js", "Tailwind CSS"],
      desc: "Unified workspace uniting sales pipelines, customer interactions, and revenue insights.",
      image: "./assets/images/khariz/IMG_2551.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 11,
      title: "ROOTED.",
      category: "Conservation & Environmental Impact",
      filter: "ui",
      tech: ["HTML5", "JavaScript", "Tailwind CSS"],
      desc: "Global conservation movement platform dedicated to reforestation and biodiversity protection.",
      image: "./assets/images/khariz/IMG_2552.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 12,
      title: "Qbick",
      category: "CleanTech & Energy Intelligence",
      filter: "fullstack",
      tech: ["React", "Next.js", "Tailwind CSS", "PHP"],
      desc: "Enterprise clean-tech platform providing real-time energy monitoring and consumption insights.",
      image: "./assets/images/khariz/IMG_2553.JPG.jpeg",
      span: "col-span-1 row-span-2"
    },
    {
      id: 13,
      title: "Jurniti",
      category: "Autonomous Cloud Sandbox",
      filter: "dashboard",
      tech: ["Next.js", "React", "Tailwind CSS"],
      desc: "Cloud deployment sandbox allowing coding and autonomous agents to execute 24/7 in microVMs.",
      image: "./assets/images/khariz/IMG_2557.JPG.jpeg",
      span: "col-span-2 row-span-1"
    },
    {
      id: 14,
      title: "Slice",
      category: "B2B Revenue & Lead Workflows",
      filter: "fullstack",
      tech: ["React", "Next.js", "Tailwind CSS"],
      desc: "Prospecting and workflow automation console for enriching leads and orchestrating revenue sprints.",
      image: "./assets/images/khariz/IMG_2560.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 15,
      title: "North Line",
      category: "Productivity & Goal Planning",
      filter: "ui",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      desc: "Team execution platform for turning high-level roadmaps into clear weekly sprints.",
      image: "./assets/images/khariz/IMG_2561.JPG.jpeg",
      span: "col-span-1 row-span-1"
    },
    {
      id: 16,
      title: "Summit",
      category: "Strategic Leadership Workspace",
      filter: "dashboard",
      tech: ["Next.js", "React", "Tailwind CSS"],
      desc: "Executive workspace for goal alignment, milestone tracking, and cross-functional leadership.",
      image: "./assets/images/khariz/IMG_2562.JPG.jpeg",
      span: "col-span-2 row-span-2"
    }
  ];

  let currentActiveIndex = 0;
  let visibleProjectIndices = KHARIZ_PROJECTS.map((_, i) => i);

  function renderBentoCards(container) {
    if (!container) return;
    container.innerHTML = '';
    
    KHARIZ_PROJECTS.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = `khariz-bento-card ${p.span}`;
      card.dataset.id = idx;
      card.dataset.category = p.filter;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${p.title} preview`);

      const techBadges = p.tech.map(t => `<span class="khariz-tech-badge">${t}</span>`).join('');

      card.innerHTML = `
        <div class="khariz-card-media">
          <img src="${p.image}" alt="${p.title}" loading="lazy" class="khariz-card-img" />
          <div class="khariz-card-overlay">
            <div class="khariz-view-badge" aria-label="View Project" title="View Project"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <div class="khariz-overlay-content">
              <span class="khariz-category-chip">${p.category}</span>
              <h3 class="khariz-card-title">${p.title}</h3>
              <p class="khariz-card-desc">${p.desc}</p>
              <div class="khariz-card-tech">${techBadges}</div>
            </div>
          </div>
        </div>
      `;

      
      card.addEventListener('click', (e) => {
        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouch && !card.classList.contains('active-touch')) {
          e.preventDefault();
          document.querySelectorAll('.khariz-bento-card').forEach(c => c.classList.remove('active-touch'));
          card.classList.add('active-touch');
          return;
        }
        openLightbox(idx);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(idx);
        }
      });

      container.appendChild(card);
    });
  }

  function setupFilters() {
    const filterBtns = document.querySelectorAll('.khariz-filter-btn');
    const cards = document.querySelectorAll('.khariz-bento-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.dataset.filter;
        visibleProjectIndices = [];

        cards.forEach((card, idx) => {
          const cat = card.dataset.category;
          if (filter === 'all' || cat === filter) {
            card.classList.remove('hidden');
            visibleProjectIndices.push(idx);
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  function openLightbox(index) {
    currentActiveIndex = index;
    updateLightboxContent();

    const lightbox = document.getElementById('khariz-lightbox');
    if (lightbox) {
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    const lightbox = document.getElementById('khariz-lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  function updateLightboxContent() {
    const p = KHARIZ_PROJECTS[currentActiveIndex];
    if (!p) return;

    const img = document.getElementById('khariz-lightbox-img');
    const title = document.getElementById('khariz-lightbox-title');
    const category = document.getElementById('khariz-lightbox-category');
    const desc = document.getElementById('khariz-lightbox-desc');
    const tech = document.getElementById('khariz-lightbox-tech');
    const counter = document.getElementById('khariz-lightbox-counter');

    if (img) {
      img.src = p.image;
      img.alt = p.title;
    }
    if (title) title.textContent = p.title;
    if (category) category.textContent = p.category;
    if (desc) desc.textContent = p.desc;
    if (counter) counter.textContent = `${currentActiveIndex + 1} / ${KHARIZ_PROJECTS.length}`;

    if (tech) {
      tech.innerHTML = p.tech.map(t => `<span class="khariz-tech-badge">${t}</span>`).join('');
    }
  }

  function nextProject() {
    if (visibleProjectIndices.length === 0) return;
    const currentPos = visibleProjectIndices.indexOf(currentActiveIndex);
    const nextPos = (currentPos + 1) % visibleProjectIndices.length;
    currentActiveIndex = visibleProjectIndices[nextPos];
    updateLightboxContent();
  }

  function prevProject() {
    if (visibleProjectIndices.length === 0) return;
    const currentPos = visibleProjectIndices.indexOf(currentActiveIndex);
    const prevPos = (currentPos - 1 + visibleProjectIndices.length) % visibleProjectIndices.length;
    currentActiveIndex = visibleProjectIndices[prevPos];
    updateLightboxContent();
  }

  function setupLightboxEvents() {
    const closeBtn = document.getElementById('khariz-lightbox-close');
    const backdrop = document.getElementById('khariz-lightbox-backdrop');
    const prevBtn = document.getElementById('khariz-lightbox-prev');
    const nextBtn = document.getElementById('khariz-lightbox-next');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevProject(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextProject(); });

    document.addEventListener('keydown', (e) => {
      const lightbox = document.getElementById('khariz-lightbox');
      if (!lightbox || !lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      }
    });
  }

  function initBento() {
    let gridContainer = document.getElementById('khariz-bento-grid');
    const workSection = document.getElementById('work');

    if (workSection && !gridContainer) {
      workSection.innerHTML = `
        <div class="khariz-bento-container">
          <div class="khariz-bento-header">
            <h2 class="khariz-bento-title">Selected Work & Systems</h2>
            <p class="khariz-bento-subtitle">A curated collection of full-stack web applications, interactive dashboards, and high-converting landing pages built with modern web technologies.</p>
            
            <div class="khariz-bento-filters" role="tablist">
              <button class="khariz-filter-btn active" data-filter="all" role="tab" aria-selected="true">All Projects (16)</button>
              <button class="khariz-filter-btn" data-filter="fullstack" role="tab" aria-selected="false">Full-Stack & SaaS</button>
              <button class="khariz-filter-btn" data-filter="dashboard" role="tab" aria-selected="false">Web Apps & Dashboards</button>
              <button class="khariz-filter-btn" data-filter="ui" role="tab" aria-selected="false">High-Converting UI</button>
            </div>
          </div>

          <div class="khariz-bento-grid" id="khariz-bento-grid"></div>
        </div>

        <div class="khariz-lightbox" id="khariz-lightbox" aria-hidden="true" role="dialog" aria-modal="true">
          <div class="khariz-lightbox-backdrop" id="khariz-lightbox-backdrop"></div>
          <div class="khariz-lightbox-container">
            <button class="khariz-lightbox-close" id="khariz-lightbox-close" aria-label="Close preview">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <button class="khariz-lightbox-nav khariz-lightbox-prev" id="khariz-lightbox-prev" aria-label="Previous project">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            
            <button class="khariz-lightbox-nav khariz-lightbox-next" id="khariz-lightbox-next" aria-label="Next project">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <div class="khariz-lightbox-body">
              <div class="khariz-lightbox-img-wrapper">
                <img id="khariz-lightbox-img" src="" alt="Project Showcase" />
              </div>
              <div class="khariz-lightbox-details">
                <div class="khariz-lightbox-meta">
                  <span class="khariz-category-chip" id="khariz-lightbox-category"></span>
                  <span class="khariz-lightbox-counter" id="khariz-lightbox-counter">1 / 16</span>
                </div>
                <h3 class="khariz-lightbox-title" id="khariz-lightbox-title"></h3>
                <p class="khariz-lightbox-desc" id="khariz-lightbox-desc"></p>
                <div class="khariz-lightbox-tech" id="khariz-lightbox-tech"></div>
              </div>
            </div>
          </div>
        </div>
      `;
      gridContainer = document.getElementById('khariz-bento-grid');
    }

    if (gridContainer && gridContainer.children.length === 0) {
      renderBentoCards(gridContainer);
      setupFilters();
      setupLightboxEvents();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBento);
  } else {
    initBento();
  }

  const observer = new MutationObserver(() => {
    const work = document.getElementById('work');
    const grid = document.getElementById('khariz-bento-grid');
    if (work && (!grid || grid.children.length === 0)) {
      initBento();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

})();
