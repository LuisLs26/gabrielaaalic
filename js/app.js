import { APP_CONFIG, CATEGORIES, VISUAL_CARDS, PHONES_COMPARISON, HOTSPOTS_MAP } from './data.js';

// Minimal SF Line SVGs
const SVG_ICONS = {
  antenna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M7 7a7 7 0 0 1 10 0M12 2v20"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
  display: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 10v4M6 10h4"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  sim: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 11v6M15 11v6M9 14h6"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
};

const AppState = {
  activeCategory: "all",
  searchFilter: "",
  activeHotspot: "processor",
  calculator: {
    priceMXN: 5899,
    downPaymentMXN: 1000,
    weeks: 12
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderVisualCards();
  setupPhoneHotspots();
  renderComparisonCards();
  setupCuotasCalculator();
  setupSearch();
  setupNavScroll();
});

// ---------------------------------------------------------------------------
// 1. ÍNDICE VISUAL DE CATEGORÍAS
// ---------------------------------------------------------------------------
function renderCategories() {
  const container = document.getElementById("categoriesContainer");
  if (!container) return;

  const allButtonHtml = `
    <button class="category-tile-btn active" data-cat="all">
      <div class="cat-icon-svg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      </div>
      <span class="cat-name-txt">Todos</span>
    </button>
  `;

  const catButtonsHtml = CATEGORIES.map(cat => `
    <button class="category-tile-btn" data-cat="${cat.id}">
      <div class="cat-icon-svg">
        ${SVG_ICONS[cat.icon] || SVG_ICONS.cpu}
      </div>
      <span class="cat-name-txt">${cat.name}</span>
    </button>
  `).join('');

  container.innerHTML = allButtonHtml + catButtonsHtml;

  container.querySelectorAll(".category-tile-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".category-tile-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.activeCategory = btn.getAttribute("data-cat");
      renderVisualCards();
    });
  });
}

// ---------------------------------------------------------------------------
// 2. FICHAS VISUALES POR TEMA (MICROCONTENIDO)
// ---------------------------------------------------------------------------
function renderVisualCards() {
  const container = document.getElementById("visualCardsGrid");
  if (!container) return;

  const search = AppState.searchFilter.toLowerCase().trim();
  const category = AppState.activeCategory;

  const filtered = VISUAL_CARDS.filter(card => {
    const matchCat = category === "all" || card.category === category;
    const matchSearch = search === "" || 
      card.title.toLowerCase().includes(search) || 
      card.techSummary.toLowerCase().includes(search) || 
      card.clientPitch.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted); font-size:14px;">
        No se encontraron conceptos para la búsqueda "${AppState.searchFilter}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(card => `
    <article class="visual-topic-card">
      <div class="card-graphic-header">
        <div class="graphic-highlight-badge">
          ${SVG_ICONS[getCategoryIcon(card.category)] || SVG_ICONS.cpu}
          <span>${card.visualHighlight}</span>
        </div>
      </div>

      <div class="card-body-content">
        <span class="card-category-tag">${card.badge}</span>
        <h3 class="card-topic-title">${card.title}</h3>
        <p class="card-one-liner-tech">${card.techSummary}</p>

        <div class="card-client-pitch-box">
          <div class="pitch-micro-label">Cómo explicárselo al cliente</div>
          <div class="pitch-micro-text">"${card.clientPitch}"</div>
        </div>

        <div class="card-dialog-snippet">
          <strong>Pregunta en tienda:</strong> "${card.salesSnippet.question}"<br>
          <strong>Respuesta breve:</strong> ${card.salesSnippet.answer}
        </div>
      </div>
    </article>
  `).join('');
}

function getCategoryIcon(catId) {
  const map = {
    conectividad: "antenna",
    rendimiento: "cpu",
    pantalla: "display",
    batería: "battery",
    cámara: "camera",
    seguridad: "shield",
    "sim-imei": "sim",
    cuotas: "calculator"
  };
  return map[catId] || "cpu";
}

// ---------------------------------------------------------------------------
// 3. TELÉFONO INTERACTIVO (HOTSPOTS)
// ---------------------------------------------------------------------------
function setupPhoneHotspots() {
  const buttons = document.querySelectorAll(".hotspot-interactive-btn");
  const titleEl = document.getElementById("hotspotTitle");
  const techEl = document.getElementById("hotspotTech");
  const pitchEl = document.getElementById("hotspotPitch");
  const tipEl = document.getElementById("hotspotTip");

  function loadHotspot(key) {
    const data = HOTSPOTS_MAP[key];
    if (!data) return;

    buttons.forEach(b => {
      if (b.getAttribute("data-spot") === key) b.classList.add("active");
      else b.classList.remove("active");
    });

    if (titleEl) titleEl.textContent = data.title;
    if (techEl) techEl.textContent = data.tech;
    if (pitchEl) pitchEl.textContent = `"${data.clientPitch}"`;
    if (tipEl) tipEl.textContent = data.keyTip;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const spot = btn.getAttribute("data-spot");
      loadHotspot(spot);
    });
  });

  loadHotspot("processor");
}

// ---------------------------------------------------------------------------
// 4. COMPARADOR VISUAL DE MODELOS
// ---------------------------------------------------------------------------
function renderComparisonCards() {
  const container = document.getElementById("comparisonCardsContainer");
  if (!container) return;

  container.innerHTML = PHONES_COMPARISON.map(phone => `
    <div class="phone-spec-card ${phone.id === 'nova-x1' ? 'highlighted' : ''}">
      <span class="phone-card-badge">${phone.tag}</span>
      <h3 class="phone-model-title">${phone.name}</h3>
      <div class="phone-price-row">
        $${phone.priceMXN.toLocaleString('es-MX')} <span class="phone-price-currency">MXN</span>
      </div>

      <ul class="phone-specs-mini-list">
        <li><strong>Pantalla:</strong> ${phone.specs.screen}</li>
        <li><strong>Memoria:</strong> ${phone.specs.ramStorage}</li>
        <li><strong>Cámara:</strong> ${phone.specs.camera}</li>
        <li><strong>Batería:</strong> ${phone.specs.battery}</li>
        <li><strong>Red:</strong> ${phone.specs.network}</li>
      </ul>

      <div style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">
        Enganche desde: <strong>$${phone.downPaymentMXN.toLocaleString('es-MX')} MXN</strong><br>
        Cuota estimada: <strong>$${phone.weeklyMXN.toLocaleString('es-MX')} / sem</strong>
      </div>

      <div class="phone-ideal-box">
        <strong>Recomendado para:</strong> ${phone.idealFor}
      </div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------------------
// 5. SIMULADOR DE CUOTAS (PESOS MEXICANOS)
// ---------------------------------------------------------------------------
function setupCuotasCalculator() {
  const priceSlider = document.getElementById("calcPriceSlider");
  const downSlider = document.getElementById("calcDownSlider");
  const priceVal = document.getElementById("calcPriceVal");
  const downVal = document.getElementById("calcDownVal");
  const cuotaBig = document.getElementById("calcCuotaBig");
  const termButtons = document.querySelectorAll(".term-pill-btn");
  const totalDisplay = document.getElementById("calcTotalDisplay");
  const downDisplay = document.getElementById("calcDownDisplay");
  const balanceDisplay = document.getElementById("calcBalanceDisplay");

  function calculate() {
    const price = parseInt(priceSlider?.value || 5899);
    const down = parseInt(downSlider?.value || 1000);
    const weeks = AppState.calculator.weeks;
    const balance = Math.max(0, price - down);
    const weeklyPayment = Math.round(balance / weeks);

    if (priceVal) priceVal.textContent = `$${price.toLocaleString('es-MX')} MXN`;
    if (downVal) downVal.textContent = `$${down.toLocaleString('es-MX')} MXN`;
    if (cuotaBig) cuotaBig.textContent = `$${weeklyPayment.toLocaleString('es-MX')} MXN / sem`;
    if (totalDisplay) totalDisplay.textContent = `$${price.toLocaleString('es-MX')} MXN`;
    if (downDisplay) downDisplay.textContent = `$${down.toLocaleString('es-MX')} MXN`;
    if (balanceDisplay) balanceDisplay.textContent = `$${balance.toLocaleString('es-MX')} MXN`;
  }

  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      AppState.calculator.priceMXN = parseInt(e.target.value);
      calculate();
    });
  }

  if (downSlider) {
    downSlider.addEventListener("input", (e) => {
      AppState.calculator.downPaymentMXN = parseInt(e.target.value);
      calculate();
    });
  }

  termButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      termButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.calculator.weeks = parseInt(btn.getAttribute("data-weeks") || 12);
      calculate();
    });
  });

  calculate();
}

// ---------------------------------------------------------------------------
// 6. BÚSQUEDA INSTANTÁNEA
// ---------------------------------------------------------------------------
function setupSearch() {
  const searchInput = document.getElementById("heroSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchFilter = e.target.value;
      renderVisualCards();
    });
  }
}

// ---------------------------------------------------------------------------
// 7. NAVEGACIÓN SUAVE DE SECCIONES
// ---------------------------------------------------------------------------
function setupNavScroll() {
  const navLinks = document.querySelectorAll(".nav-anchor-btn");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}
