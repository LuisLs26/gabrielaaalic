import { APP_CONFIG, CATEGORIES, VISUAL_CARDS, HOTSPOTS_DATA, PHONES_COMPARE_DATA } from './data.js';

// SVG Icons
const SVG_ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
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
  renderCategoryFilter();
  renderVisualEditorialCards();
  setupInteractivePhoneHotspots();
  renderVisualComparison();
  setupCuotasCalculator();
  setupHeroSearch();
  setupNavLinks();
  setupModalDismiss();
});

// ---------------------------------------------------------------------------
// 1. FILTRO DE CATEGORÍAS (PILLS)
// ---------------------------------------------------------------------------
function renderCategoryFilter() {
  const container = document.getElementById("categoriesPillsContainer");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button class="category-chip-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll(".category-chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".category-chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.activeCategory = btn.getAttribute("data-category");
      renderVisualEditorialCards();
    });
  });
}

// ---------------------------------------------------------------------------
// 2. FICHAS VISUALES EDITORIALES (VER PRIMERO, LEER MENOS)
// ---------------------------------------------------------------------------
function renderVisualEditorialCards() {
  const container = document.getElementById("visualCardsGrid");
  if (!container) return;

  const search = AppState.searchFilter.toLowerCase().trim();
  const category = AppState.activeCategory;

  const filtered = VISUAL_CARDS.filter(card => {
    const matchCat = category === "all" || card.category === category;
    const matchSearch = search === "" ||
      card.title.toLowerCase().includes(search) ||
      card.oneLiner.toLowerCase().includes(search) ||
      card.clientPitch.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted); font-size:14px;">
        No se encontraron conceptos para "${AppState.searchFilter}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(card => `
    <article class="visual-card ${card.layout === 'featured-wide' ? 'featured-wide' : ''}">
      <!-- Componente Gráfico Interactivo / Visual Stage -->
      <div class="card-visual-stage">
        ${getVisualComponentHtml(card.visualComponent)}
      </div>

      <!-- Contenido Sintético -->
      <div class="card-content-pane">
        <span class="card-badge-tag">${card.badge}</span>
        <h3 class="card-title-text">${card.title}</h3>
        <span class="card-keyfact-chip">${card.keyFact}</span>
        <p class="card-oneliner-text">${card.oneLiner}</p>

        <!-- Bloque: Cómo decírselo al cliente -->
        <div class="card-pitch-highlight">
          <div class="pitch-label">Cómo decírselo al cliente</div>
          <div class="pitch-body">"${card.clientPitch}"</div>
        </div>

        <button class="btn-open-detail" data-card-id="${card.id}">
          <span>Ver ejemplo de diálogo</span>
          ${SVG_ICONS.chevronRight}
        </button>
      </div>
    </article>
  `).join('');

  // Attach modal trigger
  container.querySelectorAll(".btn-open-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const cardId = btn.getAttribute("data-card-id");
      openCardDetailModal(cardId);
    });
  });
}

// Generador de Componentes Gráficos Visuales
function getVisualComponentHtml(type) {
  switch (type) {
    case "ram-multitask":
      return `
        <div class="ram-visual-box">
          <div class="ram-apps-row">
            <span class="ram-app-pill">WhatsApp</span>
            <span class="ram-app-pill">Facebook</span>
            <span class="ram-app-pill">Mapas GPS</span>
            <span class="ram-app-pill">Cámara</span>
          </div>
          <div class="ram-bars-compare">
            <div class="ram-bar-row">
              <span>4 GB</span>
              <div class="ram-bar-fill-track"><div class="ram-bar-fill" style="width: 33%;"></div></div>
            </div>
            <div class="ram-bar-row">
              <span>8 GB</span>
              <div class="ram-bar-fill-track"><div class="ram-bar-fill" style="width: 66%;"></div></div>
            </div>
            <div class="ram-bar-row">
              <span>12 GB</span>
              <div class="ram-bar-fill-track"><div class="ram-bar-fill" style="width: 100%;"></div></div>
            </div>
          </div>
        </div>
      `;

    case "storage-meter":
      return `
        <div class="storage-meter-box">
          <div class="storage-segmented-bar">
            <div class="seg-photos" title="Fotos y Videos"></div>
            <div class="seg-video" title="Descargas"></div>
            <div class="seg-apps" title="Aplicaciones"></div>
            <div class="seg-system" title="Sistema"></div>
          </div>
          <div class="storage-legend-grid">
            <span>Fotos: 45%</span>
            <span>Apps: 25%</span>
            <span>Sistema: 12%</span>
          </div>
        </div>
      `;

    case "hz-interactive-demo":
      return `
        <div class="hz-demo-stage">
          <div class="hz-screen-box hz-60">
            <span style="font-size:11px; font-weight:700; color:var(--text-muted);">60 Hz</span>
            <div class="hz-ball-track"><div class="hz-ball"></div></div>
          </div>
          <div class="hz-screen-box hz-120">
            <span style="font-size:11px; font-weight:700; color:var(--accent);">120 Hz Ultra Suave</span>
            <div class="hz-ball-track"><div class="hz-ball"></div></div>
          </div>
        </div>
      `;

    case "battery-gauge":
      return `
        <div class="battery-gauge-stage">
          <div class="battery-icon-huge">
            <div class="battery-fill-level"></div>
          </div>
          <span style="font-size:13px; font-weight:800; color:var(--text-main);">5000 mAh • 100% Energía</span>
        </div>
      `;

    case "fastcharge-anim":
      return `
        <div class="fastcharge-stage">
          <div class="charge-bolt-icon">${SVG_ICONS.bolt}</div>
          <div style="font-size:12px; font-weight:700; color:var(--text-main); margin-top:6px;">
            0% → 60% en 20 minutos
          </div>
        </div>
      `;

    case "camera-lens-diagram":
      return `
        <div class="camera-diagram-stage">
          <div class="camera-module-render">
            <div class="lens-circle"></div>
            <div class="lens-circle" style="width:26px; height:26px;"></div>
          </div>
          <div class="ois-badge-render">
            Estabilizador Óptico (OIS)<br>
            <span style="font-size:10px; color:var(--text-muted);">Compensación de pulso</span>
          </div>
        </div>
      `;

    case "network-5g-visual":
      return `
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <div style="font-size:32px; font-weight:800; color:var(--accent); letter-spacing:-1px;">5G ULTRA</div>
          <span style="font-size:12px; font-weight:700; color:var(--text-muted);">Descargas y streaming inmediato</span>
        </div>
      `;

    case "ip-shield-visual":
      return `
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:48px; height:48px; border-radius:12px; background:rgba(0,102,204,0.1); display:flex; align-items:center; justify-content:center; color:var(--accent); font-weight:800; font-size:14px;">
            IP68
          </div>
          <div style="font-size:12px; font-weight:600; color:var(--text-main); line-height:1.4;">
            Sellado hermético<br>
            <span style="color:var(--text-muted);">Lluvia, salpicaduras y polvo</span>
          </div>
        </div>
      `;

    case "sim-imei-diagram":
      return `
        <div style="display:flex; gap:12px; align-items:center;">
          <div style="background:#FFFFFF; border:1px solid var(--border-light); padding:8px 12px; border-radius:var(--radius-sm); font-size:11px; font-weight:700;">
            SIM 1 + eSIM
          </div>
          <div style="background:#FFFFFF; border:1px solid var(--border-light); padding:8px 12px; border-radius:var(--radius-sm); font-size:11px; font-weight:700;">
            IMEI: 15 Dígitos
          </div>
        </div>
      `;

    default:
      return ``;
  }
}

// ---------------------------------------------------------------------------
// 3. TELÉFONO INTERACTIVO (SMARTPHONE REAL CON HOTSPOTS)
// ---------------------------------------------------------------------------
function setupInteractivePhoneHotspots() {
  const pins = document.querySelectorAll(".phone-hotspot-pin");
  const titleEl = document.getElementById("hotspotTitle");
  const factEl = document.getElementById("hotspotKeyFact");
  const onelinerEl = document.getElementById("hotspotOneLiner");
  const pitchEl = document.getElementById("hotspotPitch");

  function loadSpot(key) {
    const data = HOTSPOTS_DATA[key];
    if (!data) return;

    pins.forEach(p => {
      if (p.getAttribute("data-pin") === key) p.classList.add("active");
      else p.classList.remove("active");
    });

    if (titleEl) titleEl.textContent = data.title;
    if (factEl) factEl.textContent = data.keyFact;
    if (onelinerEl) onelinerEl.textContent = data.oneLiner;
    if (pitchEl) pitchEl.textContent = `"${data.clientPitch}"`;
  }

  pins.forEach(pin => {
    pin.addEventListener("click", () => {
      const key = pin.getAttribute("data-pin");
      loadSpot(key);
    });
  });

  loadSpot("processor");
}

// ---------------------------------------------------------------------------
// 4. COMPARADOR VISUAL DE EQUIPOS (BARRAS Y MÉTRICAS)
// ---------------------------------------------------------------------------
function renderVisualComparison() {
  const container = document.getElementById("comparisonCardsGrid");
  if (!container) return;

  container.innerHTML = PHONES_COMPARE_DATA.map(phone => `
    <div class="compare-phone-card ${phone.id === 'nova-x1' ? 'active-choice' : ''}">
      <div class="compare-phone-img-wrap">
        <img src="${phone.image}" alt="${phone.name}" loading="lazy">
      </div>

      <h3 class="compare-model-name">${phone.name}</h3>
      <div class="compare-price-tag">
        $${phone.priceMXN.toLocaleString('es-MX')} <span>MXN</span>
      </div>

      <div class="compare-metric-group">
        <!-- RAM Bar -->
        <div class="compare-metric-item">
          <div class="metric-label-row">
            <span>RAM</span>
            <span>${phone.metrics.ramLabel}</span>
          </div>
          <div class="metric-bar-track">
            <div class="metric-bar-progress" style="width: ${(phone.metrics.ramVal / phone.metrics.ramMax) * 100}%;"></div>
          </div>
        </div>

        <!-- Almacenamiento Bar -->
        <div class="compare-metric-item">
          <div class="metric-label-row">
            <span>Espacio</span>
            <span>${phone.metrics.storageLabel}</span>
          </div>
          <div class="metric-bar-track">
            <div class="metric-bar-progress" style="width: ${(phone.metrics.storageVal / phone.metrics.storageMax) * 100}%;"></div>
          </div>
        </div>

        <!-- Batería Bar -->
        <div class="compare-metric-item">
          <div class="metric-label-row">
            <span>Batería</span>
            <span>${phone.metrics.batteryLabel}</span>
          </div>
          <div class="metric-bar-track">
            <div class="metric-bar-progress" style="width: ${(phone.metrics.batteryVal / phone.metrics.batteryMax) * 100}%;"></div>
          </div>
        </div>

        <div style="font-size:11.5px; color:var(--text-main); font-weight:600; margin-top:4px;">
          • Pantalla: ${phone.metrics.screenHz}<br>
          • Cámara: ${phone.metrics.cameraMain}
        </div>
      </div>

      <div class="compare-ideal-for">
        <strong>Ideal para:</strong> ${phone.idealFor}
      </div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------------------
// 5. SIMULADOR DE CUOTAS EN PESOS MEXICANOS (MXN)
// ---------------------------------------------------------------------------
function setupCuotasCalculator() {
  const priceSlider = document.getElementById("calcPriceSlider");
  const downSlider = document.getElementById("calcDownSlider");
  const priceVal = document.getElementById("calcPriceVal");
  const downVal = document.getElementById("calcDownVal");
  const cuotaBig = document.getElementById("calcCuotaBig");
  const termButtons = document.querySelectorAll(".term-btn");
  const totalDisplay = document.getElementById("calcTotalDisplay");
  const downDisplay = document.getElementById("calcDownDisplay");
  const balanceDisplay = document.getElementById("calcBalanceDisplay");

  function recalculate() {
    let price = parseInt(priceSlider?.value || 5899);
    let down = parseInt(downSlider?.value || 1000);

    // Impedir que enganche supere al precio
    if (down > price) {
      down = price;
      if (downSlider) downSlider.value = price;
    }

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
      if (downSlider) downSlider.max = e.target.value;
      recalculate();
    });
  }

  if (downSlider) {
    downSlider.addEventListener("input", (e) => {
      AppState.calculator.downPaymentMXN = parseInt(e.target.value);
      recalculate();
    });
  }

  termButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      termButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.calculator.weeks = parseInt(btn.getAttribute("data-weeks") || 12);
      recalculate();
    });
  });

  recalculate();
}

// ---------------------------------------------------------------------------
// 6. MODAL DE DETALLE / EJEMPLO DE DIÁLOGO
// ---------------------------------------------------------------------------
function openCardDetailModal(cardId) {
  const card = VISUAL_CARDS.find(c => c.id === cardId);
  if (!card) return;

  const modal = document.getElementById("detailModal");
  const modalBody = document.getElementById("modalBodyContent");

  if (modalBody) {
    modalBody.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px;">
        <div>
          <span style="font-size:11px; font-weight:700; color:var(--accent); text-transform:uppercase;">${card.badge}</span>
          <h2 style="font-size:20px; font-weight:800; color:var(--text-main); margin-top:2px;">${card.title}</h2>
        </div>
        <button id="btnCloseModal" style="background:none; border:none; cursor:pointer; padding:6px; color:var(--text-muted);">
          ${SVG_ICONS.close}
        </button>
      </div>

      <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-sm); margin-bottom:16px;">
        <div style="font-size:10.5px; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:4px;">Definición Técnica Precisa</div>
        <div style="font-size:13px; color:var(--text-main); line-height:1.45;">${card.detailModal.technicalNote}</div>
      </div>

      <div style="border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:16px; margin-bottom:18px;">
        <div style="font-size:11px; font-weight:700; color:var(--accent); text-transform:uppercase; margin-bottom:8px;">Ejemplo de Diálogo en Piso de Venta</div>
        <div style="font-size:13px; color:var(--text-muted); line-height:1.45; margin-bottom:8px;">
          <strong>Cliente:</strong> "${card.detailModal.exampleDialog.client}"
        </div>
        <div style="font-size:13px; color:var(--text-main); line-height:1.45;">
          <strong>Asesor:</strong> "${card.detailModal.exampleDialog.seller}"
        </div>
      </div>

      <button id="btnDismissModalAction" class="btn-open-detail" style="padding:10px; background:var(--bg-dark); color:#fff; border:none;">
        Entendido
      </button>
    `;

    modalBody.querySelector("#btnCloseModal")?.addEventListener("click", closeModal);
    modalBody.querySelector("#btnDismissModalAction")?.addEventListener("click", closeModal);
  }

  modal?.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("detailModal");
  modal?.classList.remove("active");
}

function setupModalDismiss() {
  const modal = document.getElementById("detailModal");
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// ---------------------------------------------------------------------------
// 7. BÚSQUEDA INSTANTÁNEA Y NAVEGACIÓN
// ---------------------------------------------------------------------------
function setupHeroSearch() {
  const searchInput = document.getElementById("heroSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchFilter = e.target.value;
      renderVisualEditorialCards();
    });
  }
}

function setupNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");
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
