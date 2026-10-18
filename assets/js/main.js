// Load custom data from localStorage if updated by Admin Dashboard
if (typeof localStorage !== 'undefined') {
  const savedData = localStorage.getItem('custom_portfolio_data');
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      Object.assign(portfolioData, parsed);
    } catch (e) {
      console.warn("Could not load custom portfolio data from localStorage", e);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initPersonalData();
  initStatsCounters();
  initServices();
  initTechStack();
  initProjects();
  initAdsDashboard();
  initRoiCalculator();
  initPackages();
  initTestimonials();
  initFaqs();
  initContactForm();
  initMobileNav();
  initCaseStudyModal();
  initActivityTicker();
  initCardSpotlight();
});

// 1. Populate Personal & Brand Details
function initPersonalData() {
  const p = portfolioData.personal;
  
  // Update texts across elements
  document.querySelectorAll("[data-bind='name']").forEach(el => el.textContent = p.name);
  document.querySelectorAll("[data-bind='title']").forEach(el => el.textContent = p.title);
  document.querySelectorAll("[data-bind='tagline']").forEach(el => el.textContent = p.tagline);
  document.querySelectorAll("[data-bind='email']").forEach(el => {
    el.textContent = p.email;
    if (el.tagName === 'A') el.href = `mailto:${p.email}`;
  });
  document.querySelectorAll("[data-bind='phone']").forEach(el => {
    el.textContent = p.phone;
    if (el.tagName === 'A') el.href = `tel:${p.phone.replace(/\s+/g, '')}`;
  });
  document.querySelectorAll("[data-bind='availability']").forEach(el => el.textContent = p.availability);

  // Update Avatar / Photo
  if (p.avatar) {
    document.querySelectorAll("[data-bind='avatar']").forEach(img => {
      img.src = p.avatar;
    });
  }

  // Setup WhatsApp Links
  const waUrl = `https://wa.me/${p.whatsappNumber}?text=${encodeURIComponent(p.whatsappPreFilledMsg)}`;
  document.querySelectorAll(".whatsapp-link").forEach(btn => {
    btn.href = waUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });
}

// 2. Animate Counter Statistics
function initStatsCounters() {
  const statsContainer = document.getElementById("stats-container");
  if (!statsContainer) return;

  statsContainer.innerHTML = portfolioData.stats.map(stat => `
    <div class="p-6 rounded-2xl glass-card flex flex-col items-center text-center">
      <div class="text-3xl md:text-4xl font-extrabold font-heading text-white mb-1">
        <span class="text-emerald-400">${stat.prefix || ''}</span><span class="counter" data-target="${stat.value}">${stat.value}</span><span class="text-emerald-400">${stat.suffix || ''}</span>
      </div>
      <p class="text-xs md:text-sm text-slate-400 font-medium">${stat.label}</p>
    </div>
  `).join('');
}

// 3. Render Services
function initServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  const iconMap = {
    "laptop": `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    "target": `<svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    "share-2": `<svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>`,
    "rocket": `<svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
  };

  container.innerHTML = portfolioData.services.map(s => `
    <div class="glass-card rounded-2xl p-7 relative overflow-hidden group">
      <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition"></div>
      <div class="flex items-center justify-between mb-5">
        <div class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 inline-flex items-center justify-center">
          ${iconMap[s.icon] || iconMap["laptop"]}
        </div>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">${s.badge}</span>
      </div>
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition">${s.title}</h3>
      <p class="text-slate-300 text-sm leading-relaxed mb-6">${s.description}</p>
      
      <div class="space-y-2.5 pt-4 border-t border-slate-800">
        ${s.highlights.map(h => `
          <div class="flex items-start text-xs text-slate-300">
            <svg class="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// 4. Render Skills & Tech Stack
function initTechStack() {
  const devContainer = document.getElementById("tech-dev-container");
  const mktContainer = document.getElementById("tech-marketing-container");

  if (devContainer) {
    devContainer.innerHTML = portfolioData.techStack.development.map(item => `
      <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-base">
            <i class="${item.icon}"></i>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-white">${item.name}</h4>
            <span class="text-[11px] text-slate-400">${item.level}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (mktContainer) {
    mktContainer.innerHTML = portfolioData.techStack.marketing.map(item => `
      <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-base">
            <i class="${item.icon}"></i>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-white">${item.name}</h4>
            <span class="text-[11px] text-slate-400">${item.level}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// 5. Render Projects & Filter Tabs
function initProjects() {
  const grid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function render(category = "all") {
    if (!grid) return;

    const filtered = category === "all" 
      ? portfolioData.projects 
      : portfolioData.projects.filter(p => p.category === category || p.category === "both");

    grid.innerHTML = filtered.map(p => `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col group border border-slate-800/80 hover:border-emerald-500/40 transition duration-300">
        <!-- Realistic Browser Window Top Bar -->
        <div class="browser-chrome">
          <div class="browser-dots">
            <span class="browser-dot red"></span>
            <span class="browser-dot amber"></span>
            <span class="browser-dot green"></span>
          </div>
          <div class="browser-url-pill">
            <i class="fas fa-lock text-[8px] text-emerald-400 mr-1"></i>${p.browserUrl || 'https://client-project.live'}
          </div>
          <div class="text-[10px] text-slate-500 font-mono">
            ${p.category === 'web' ? 'NEXT.JS' : p.category === 'marketing' ? 'META.ADS' : 'FULL.STACK'}
          </div>
        </div>

        <!-- Project Image Preview (Ultra HD) -->
        <div class="relative h-52 sm:h-56 overflow-hidden bg-slate-950">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          
          <!-- Category Badge -->
          <div class="absolute top-3 left-3">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-lg">
              ${p.category === 'web' ? '💻 Web Development' : p.category === 'marketing' ? '🚀 Meta Ads & Social' : '⚡ Web + Ads Growth'}
            </span>
          </div>

          <!-- Highlight Metric Overlay -->
          <div class="absolute bottom-3 right-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-xs font-extrabold px-3.5 py-1.5 rounded-lg shadow-xl flex items-center space-x-1.5">
            <i class="fas fa-chart-line text-[11px]"></i>
            <span>${p.metrics.highlight}</span>
          </div>
        </div>

        <!-- Project Content -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex flex-wrap gap-1.5 mb-3">
              ${p.tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">${t}</span>`).join('')}
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition">${p.title}</h3>
            <p class="text-slate-300 text-xs line-clamp-2 mb-4 leading-relaxed">${p.tagline}</p>
          </div>

          <!-- Key Metrics Grid -->
          <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80 grid grid-cols-2 gap-2 mb-4 text-center">
            <div>
              <div class="text-[11px] text-slate-400">Metric 1</div>
              <div class="text-xs font-bold text-emerald-400">${p.metrics.secondary}</div>
            </div>
            <div>
              <div class="text-[11px] text-slate-400">Impact</div>
              <div class="text-xs font-bold text-cyan-400">${p.metrics.extra}</div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center space-x-2 pt-2">
            <button onclick="openCaseStudy(${p.id})" class="flex-1 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition flex items-center justify-center space-x-1.5">
              <span>View Case Study</span>
              <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
            <a href="https://wa.me/${portfolioData.personal.whatsappNumber}?text=${encodeURIComponent('Hi, I saw your case study for ' + p.title + ' and I want similar results for my brand.')}" target="_blank" class="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 transition flex items-center justify-center" title="Discuss this project">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Filter button handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.category);
    });
  });

  // Initial render
  render("all");
}

// 6. Case Study Modal Deep Dive
function initCaseStudyModal() {
  const modal = document.getElementById("case-study-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  if (!modal) return;

  window.openCaseStudy = function(projectId) {
    const p = portfolioData.projects.find(item => item.id === projectId);
    if (!p) return;

    document.getElementById("modal-img").src = p.image;
    document.getElementById("modal-title").textContent = p.title;
    document.getElementById("modal-tagline").textContent = p.tagline;
    document.getElementById("modal-badge").textContent = p.category === 'web' ? '💻 Web Development' : p.category === 'marketing' ? '🚀 Meta Ads / Social' : '⚡ Web + Ads Hybrid';
    
    // Highlight metrics
    document.getElementById("modal-metric-1").textContent = p.metrics.highlight;
    document.getElementById("modal-metric-2").textContent = p.metrics.secondary;
    document.getElementById("modal-metric-3").textContent = p.metrics.extra;

    document.getElementById("modal-problem").textContent = p.problem;
    document.getElementById("modal-solution").textContent = p.solution;
    
    // Results List
    document.getElementById("modal-results").innerHTML = p.results.map(r => `
      <li class="flex items-start text-xs sm:text-sm text-slate-300">
        <svg class="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <span>${r}</span>
      </li>
    `).join('');

    // Setup action WhatsApp button
    const discussWa = `https://wa.me/${portfolioData.personal.whatsappNumber}?text=${encodeURIComponent('Hi! I read your case study for "' + p.title + '" and I would like to implement a similar strategy for my business.')}`;
    document.getElementById("modal-wa-btn").href = discussWa;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// 7. Live Meta Ads Proof Dashboard
function initAdsDashboard() {
  const table = document.getElementById("ads-campaign-table");
  const data = portfolioData.adCampaignProof;

  document.querySelectorAll("[data-bind='adSpend']").forEach(el => el.textContent = data.totalSpend);
  document.querySelectorAll("[data-bind='adRevenue']").forEach(el => el.textContent = data.totalRevenue);
  document.querySelectorAll("[data-bind='blendedRoas']").forEach(el => el.textContent = data.blendedRoas);
  document.querySelectorAll("[data-bind='totalPurchases']").forEach(el => el.textContent = data.totalPurchases);

  if (table) {
    table.innerHTML = data.campaigns.map(c => `
      <tr class="text-xs text-slate-300">
        <td class="py-3 px-4 flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-medium text-white">${c.name}</span>
        </td>
        <td class="py-3 px-4 font-semibold text-slate-200">${c.spend}</td>
        <td class="py-3 px-4 font-bold text-emerald-400">${c.revenue || c.leads}</td>
        <td class="py-3 px-4 font-extrabold text-white">
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">${c.roas || c.cpl}</span>
        </td>
        <td class="py-3 px-4 text-cyan-400 font-semibold">${c.ctr || c.statusBadge}</td>
      </tr>
    `).join('');
  }
}

// 8. Interactive ROI & Scaling Calculator
function initRoiCalculator() {
  const spendSlider = document.getElementById("calc-spend");
  const roasSlider = document.getElementById("calc-roas");
  const spendValDisplay = document.getElementById("calc-spend-val");
  const roasValDisplay = document.getElementById("calc-roas-val");

  const revDisplay = document.getElementById("calc-rev-val");
  const profitDisplay = document.getElementById("calc-profit-val");
  const ordersDisplay = document.getElementById("calc-orders-val");
  const calcWaBtn = document.getElementById("calc-wa-btn");

  if (!spendSlider || !roasSlider) return;

  function update() {
    const spend = parseInt(spendSlider.value, 10);
    const roas = parseFloat(roasSlider.value);

    // Format currency INR
    const formatInr = num => '₹' + num.toLocaleString('en-IN');

    const estRevenue = Math.round(spend * roas);
    const estProfit = Math.round(estRevenue - spend);
    const estOrders = Math.round(spend / 280); // Avg CPA estimate

    spendValDisplay.textContent = formatInr(spend);
    roasValDisplay.textContent = roas.toFixed(1) + 'x';

    revDisplay.textContent = formatInr(estRevenue);
    profitDisplay.textContent = formatInr(estProfit);
    ordersDisplay.textContent = estOrders.toLocaleString('en-IN') + '+';

    if (calcWaBtn) {
      const msg = `Hi! I used the ROI Calculator on your portfolio. If I invest ${formatInr(spend)}/month in Meta Ads and target a ${roas.toFixed(1)}x ROAS (Est. Revenue: ${formatInr(estRevenue)}), how can you help me build the website & run the campaigns?`;
      calcWaBtn.href = `https://wa.me/${portfolioData.personal.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    }
  }

  spendSlider.addEventListener("input", update);
  roasSlider.addEventListener("input", update);
  update();
}

// 9. Packages & Pricing
function initPackages() {
  const container = document.getElementById("packages-container");
  if (!container) return;

  container.innerHTML = portfolioData.packages.map(p => `
    <div class="glass-card rounded-2xl p-7 flex flex-col justify-between relative ${p.featured ? 'border-emerald-500/60 shadow-xl shadow-emerald-500/10' : 'border-slate-800'}">
      ${p.featured ? `<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg">${p.badge}</div>` : ''}
      
      <div>
        <div class="mb-4">
          <h3 class="text-xl font-bold text-white mb-1">${p.name}</h3>
          <p class="text-xs text-slate-400">${p.subtitle}</p>
        </div>

        <div class="flex items-baseline space-x-2 mb-6 pb-6 border-b border-slate-800">
          <span class="text-3xl font-extrabold text-white">${p.price}</span>
          <span class="text-xs text-slate-400">/ ${p.period}</span>
        </div>

        <div class="space-y-3 mb-8">
          ${p.deliverables.map(d => `
            <div class="flex items-start text-xs sm:text-sm text-slate-300">
              <svg class="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>${d}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <a href="https://wa.me/${portfolioData.personal.whatsappNumber}?text=${encodeURIComponent('Hi! I want to book the "' + p.name + '" package (' + p.price + '). Let us discuss details.')}" target="_blank" class="w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold transition flex items-center justify-center space-x-2 ${p.featured ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/25' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}">
        <span>${p.ctaText}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </a>
    </div>
  `).join('');
}

// 10. Testimonials
function initTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = portfolioData.testimonials.map(t => `
    <div class="glass-card rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center space-x-1 mb-4 text-amber-400 text-sm">
          ${'★'.repeat(t.rating)}
        </div>
        <p class="text-slate-300 text-sm italic mb-6 leading-relaxed">"${t.review}"</p>
      </div>

      <div class="flex items-center space-x-3 pt-4 border-t border-slate-800">
        <img src="${t.image}" alt="${t.name}" class="w-11 h-11 rounded-full object-cover border border-emerald-500/40" />
        <div>
          <h4 class="text-sm font-bold text-white">${t.name}</h4>
          <p class="text-xs text-slate-400">${t.company}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 11. FAQs Accordion
function initFaqs() {
  const container = document.getElementById("faqs-container");
  if (!container) return;

  container.innerHTML = portfolioData.faqs.map((f, i) => `
    <div class="glass-card rounded-xl overflow-hidden border border-slate-800/80 transition">
      <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-white hover:text-emerald-400 transition" onclick="toggleFaq(${i})">
        <span>${f.question}</span>
        <svg id="faq-icon-${i}" class="w-5 h-5 text-emerald-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="faq-answer-${i}" class="hidden px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
        ${f.answer}
      </div>
    </div>
  `).join('');

  window.toggleFaq = function(index) {
    const ans = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if (ans) {
      ans.classList.toggle("hidden");
      if (icon) icon.classList.toggle("rotate-180");
    }
  };
}

// 12. Contact Form with Instant WhatsApp Bridge
function initContactForm() {
  const form = document.getElementById("lead-form");
  const formSuccess = document.getElementById("form-success-msg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value;
    const phone = document.getElementById("form-phone").value;
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value;

    const fullMsg = `*New Portfolio Lead Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service Interested:* ${service}\n*Project Details:* ${message}`;
    const waUrl = `https://wa.me/${portfolioData.personal.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;

    if (formSuccess) {
      formSuccess.classList.remove("hidden");
    }

    // Open WhatsApp in new tab with the lead details pre-filled
    window.open(waUrl, '_blank');
    form.reset();
  });
}

// 13. Mobile Navigation Drawer
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const navDrawer = document.getElementById("mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !navDrawer) return;

  toggleBtn.addEventListener("click", () => {
    navDrawer.classList.toggle("hidden");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navDrawer.classList.add("hidden");
    });
  });
}

// 14. Live Client Activity Notification Ticker
function initActivityTicker() {
  const activities = [
    { text: "Just now: New Meta Ads scaling campaign launched (5.2x ROAS target)", icon: "fab fa-meta text-cyan-400" },
    { text: "12m ago: E-Commerce Store delivered with 99 PageSpeed", icon: "fas fa-bolt text-emerald-400" },
    { text: "1h ago: 450+ Qualified leads generated at ₹42 CPL", icon: "fas fa-bullseye text-amber-400" },
    { text: "3h ago: Viral Reel surpassed 1.2M views on Instagram", icon: "fab fa-instagram text-purple-400" }
  ];

  let currentIndex = 0;
  const toast = document.createElement("div");
  toast.className = "activity-toast hidden md:flex cursor-pointer";
  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
    <div class="flex items-center space-x-2 text-xs text-slate-200">
      <i id="ticker-icon" class="${activities[0].icon}"></i>
      <span id="ticker-text" class="font-medium">${activities[0].text}</span>
    </div>
  `;
  document.body.appendChild(toast);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % activities.length;
    const textEl = document.getElementById("ticker-text");
    const iconEl = document.getElementById("ticker-icon");
    if (textEl && iconEl) {
      toast.style.opacity = "0";
      setTimeout(() => {
        textEl.textContent = activities[currentIndex].text;
        iconEl.className = activities[currentIndex].icon;
        toast.style.opacity = "1";
      }, 300);
    }
  }, 6000);
}

// 15. Modern Card Spotlight Hover Effect
function initCardSpotlight() {
  const cards = document.querySelectorAll(".glass-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.08), rgba(16, 23, 38, 0.75) 60%)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.background = "";
    });
  });
}

