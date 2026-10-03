// MANUAL VISUAL DE TELEFONÍA — GABRIELA LICONA
// Vanilla JavaScript con datos integrados para máxima compatibilidad (Local file://, GitHub Pages y Cloudflare Pages)

const APP_CONFIG = {
  trainerName: "Gabriela Licona",
  title: "Manual Visual de Telefonía",
  subtitle: "Guía visual de consulta rápida para vendedores de piso",
  currency: "MXN",
  currencySymbol: "$"
};

const CATEGORIES = [
  { id: "all", name: "Todos", count: 8 },
  { id: "rendimiento", name: "Rendimiento", count: 2 },
  { id: "pantalla", name: "Pantalla", count: 1 },
  { id: "bateria", name: "Batería y Carga", count: 2 },
  { id: "camara", name: "Cámaras", count: 1 },
  { id: "conectividad", name: "Conectividad", count: 1 },
  { id: "seguridad", name: "Seguridad e IP", count: 1 },
  { id: "sim-imei", name: "SIM e IMEI", count: 1 }
];

const VISUAL_CARDS = [
  {
    id: "card-ram",
    category: "rendimiento",
    layout: "featured-wide",
    title: "Memoria RAM",
    badge: "Multitarea y Fluidez",
    keyFact: "4 GB • 8 GB • 12 GB",
    oneLiner: "Permite mantener varias aplicaciones abiertas al mismo tiempo sin que se traben ni se reinicien.",
    clientPitch: "Es como el tamaño de la mesa de trabajo: más RAM permite abrir WhatsApp, mapas y redes sin pausas.",
    visualComponent: "ram-multitask",
    detailModal: {
      technicalNote: "La memoria de acceso aleatorio (RAM) aloja temporalmente los procesos activos del sistema.",
      exampleDialog: {
        client: "¿Por qué me conviene tener 8 GB de RAM en lugar de 4 GB?",
        seller: "Con 8 GB puede cambiar entre varias aplicaciones al instante sin que se cierren o tenga que esperar a que vuelvan a cargar."
      }
    }
  },
  {
    id: "card-storage",
    category: "rendimiento",
    layout: "standard",
    title: "Almacenamiento Interno",
    badge: "Capacidad de Archivos",
    keyFact: "128 GB vs 256 GB",
    oneLiner: "Espacio disponible para guardar fotos, videos, documentos, audios y aplicaciones.",
    clientPitch: "256 GB le da tranquilidad durante años sin tener que borrar fotos ni mensajes por falta de espacio.",
    visualComponent: "storage-meter",
    detailModal: {
      technicalNote: "Memoria flash interna UFS no volátil para almacenamiento permanente de datos y apps.",
      exampleDialog: {
        client: "¿Vale la pena pagar la diferencia por 256 GB?",
        seller: "Sí, si toma fotos familiares o recibe muchos audios y videos de trabajo, 256 GB evitan el molesto aviso de memoria llena."
      }
    }
  },
  {
    id: "card-120hz",
    category: "pantalla",
    layout: "featured-wide",
    title: "Tasa de Refresco: 120 Hz vs 60 Hz",
    badge: "Fluidez de Pantalla",
    keyFact: "Hasta 120 actualizaciones por segundo",
    oneLiner: "La pantalla se actualiza el doble de veces por segundo, logrando una sensación visual ultra suave.",
    clientPitch: "Al deslizar menús, páginas o redes sociales todo se mueve sin tirones y descansa más la vista.",
    visualComponent: "hz-interactive-demo",
    detailModal: {
      technicalNote: "Indica la frecuencia con que el panel renueva los cuadros visibles por segundo (Hertz).",
      exampleDialog: {
        client: "¿Qué diferencia práctica hay entre 60 Hz y 120 Hz?",
        seller: "Al deslizar el dedo en pantalla el texto no se borra ni brinca; todo responde con inmediata suavidad."
      }
    }
  },
  {
    id: "card-battery",
    category: "bateria",
    layout: "standard",
    title: "Batería de 5000 mAh",
    badge: "Autonomía de Energía",
    keyFact: "Jornada completa de uso",
    oneLiner: "Capacidad de energía diseñada para cubrir todo el día sin recargas intermedias bajo uso habitual.",
    clientPitch: "Es como tener un tanque de energía grande: sale de casa y regresa con batería de sobra.",
    visualComponent: "battery-gauge",
    detailModal: {
      technicalNote: "Miliamperios-hora: medida de la carga eléctrica acumulable en la celda de litio.",
      exampleDialog: {
        client: "¿Me durará todo el día sin conectarlo?",
        seller: "Con 5000 mAh está diseñado para darle más de 24 horas de uso continuo en llamadas, mensajería y redes."
      }
    }
  },
  {
    id: "card-fastcharge",
    category: "bateria",
    layout: "standard",
    title: "Carga Rápida: 33W a 67W",
    badge: "Tiempo de Recarga",
    keyFact: "Horas de energía en 20 minutos",
    oneLiner: "Potencia eléctrica que permite recuperar un porcentaje significativo de batería en lapsos breves.",
    clientPitch: "Con solo conectarlo mientras desayuna o se baña, obtiene carga suficiente para varias horas.",
    visualComponent: "fastcharge-anim",
    detailModal: {
      technicalNote: "Gestión inteligente de voltaje y amperaje con protocolos de disipación térmica segura.",
      exampleDialog: {
        client: "Siempre olvido cargar el celular en la noche, ¿qué hago?",
        seller: "Con la carga rápida incluida, en lo que se prepara antes de salir ya recuperó más del 60% de energía."
      }
    }
  },
  {
    id: "card-camera",
    category: "camara",
    layout: "featured-wide",
    title: "Cámaras y Estabilización Óptica (OIS)",
    badge: "Fotografía y Video",
    keyFact: "Sensor Principal + OIS Antivibración",
    oneLiner: "El sensor capta gran nivel de detalle y el estabilizador físico compensa el movimiento involuntario de la mano.",
    clientPitch: "Tome fotos y videos nítidos que no salen borrosos aunque camine o le tiemble el pulso.",
    visualComponent: "camera-lens-diagram",
    detailModal: {
      technicalNote: "OIS mueve micrométricamente el lente para contrarrestar la vibración en tomas con poca luz.",
      exampleDialog: {
        client: "¿Por qué salían borrosas las fotos en mi teléfono anterior?",
        seller: "Porque no tenía estabilización óptica; este equipo compensa el pulso de su mano para tomas nítidas a la primera."
      }
    }
  },
  {
    id: "card-5g",
    category: "conectividad",
    layout: "standard",
    title: "Conectividad 5G",
    badge: "Red Móvil de Alta Velocidad",
    keyFact: "Transmisión y Descarga Veloz",
    oneLiner: "Nueva generación de red móvil con mayor velocidad de descarga y menor tiempo de respuesta.",
    clientPitch: "Descargue archivos al instante y disfrute videos en máxima calidad sin esperar a que carguen.",
    visualComponent: "network-5g-visual",
    detailModal: {
      technicalNote: "Quinta generación de estándares de red móvil con mayor ancho de banda y menor latencia en zonas con cobertura.",
      exampleDialog: {
        client: "¿Realmente necesito 5G hoy?",
        seller: "Sí, navega con gran fluidez y asegura que su equipo no quede obsoleto ante la expansión de las redes."
      }
    }
  },
  {
    id: "card-ip68",
    category: "seguridad",
    layout: "standard",
    title: "Protección IP (IP54 vs IP68)",
    badge: "Resistencia Ambiental",
    keyFact: "Protección contra lluvia y salpicaduras",
    oneLiner: "Sellado del chasis que protege los componentes internos contra el polvo y accidentes con líquidos.",
    clientPitch: "Le da tranquilidad ante lluvia imprevista o si se derrama un vaso de agua sobre el equipo.",
    visualComponent: "ip-shield-visual",
    detailModal: {
      technicalNote: "Ingress Protection: norma internacional de hermeticidad contra sólidos y líquidos.",
      exampleDialog: {
        client: "¿Puedo responder llamadas si está lloviendo?",
        seller: "Sí, cuenta con certificación contra salpicaduras para atender mensajes en exteriores sin riesgo."
      }
    }
  },
  {
    id: "card-sim",
    category: "sim-imei",
    layout: "standard",
    title: "SIM Física, eSIM y Código IMEI",
    badge: "Líneas y Seguridad",
    keyFact: "2 Líneas en 1 Celular • IMEI Único",
    oneLiner: "Permite usar dos números telefónicos a la vez y cuenta con un código único de identificación para garantía.",
    clientPitch: "Maneje su número de trabajo y el personal en el mismo equipo sin cargar dos teléfonos.",
    visualComponent: "sim-imei-diagram",
    detailModal: {
      technicalNote: "Dual SIM activa concurrentemente dos números. El IMEI es la clave de registro mundial de 15 dígitos.",
      exampleDialog: {
        client: "¿Puedo separar mi WhatsApp de clientes del personal?",
        seller: "Totalmente, gracias a Dual SIM / eSIM administra ambas líneas en este mismo dispositivo con total comodidad."
      }
    }
  }
];

const HOTSPOTS_DATA = {
  camera: {
    title: "Módulo de Cámaras con OIS",
    keyFact: "64 MP + Sensor Gran Angular",
    oneLiner: "Sensor de alta resolución con estabilizador óptico que evita fotos movidas o borrosas.",
    clientPitch: "Fotos claras y enfocadas a la primera, incluso de noche o con niños en movimiento."
  },
  screen: {
    title: "Pantalla AMOLED 120 Hz",
    keyFact: '6.67" FHD+ Cristalina',
    oneLiner: "Panel que se actualiza hasta 120 veces por segundo para movimientos ultra suaves.",
    clientPitch: "Al deslizar en redes o documentos todo se siente rápido, fluido y descansa la vista."
  },
  processor: {
    title: "Procesador Octa-Core 5G",
    keyFact: "Arquitectura 6 nm Eficiente",
    oneLiner: "El motor central que abre aplicaciones al instante y procesa imágenes con agilidad.",
    clientPitch: "Abre todas sus aplicaciones de inmediato sin que el teléfono se caliente ni se trabe."
  },
  battery: {
    title: "Batería 5000 mAh + Carga Rápida",
    keyFact: "33W Turbo Power",
    oneLiner: "Celda de gran reserva energética que recupera horas de uso en solo 20 minutos de carga.",
    clientPitch: "Batería para todo el día y carga ultra rápida antes de salir de casa."
  },
  sim: {
    title: "Dual SIM y eSIM",
    keyFact: "2 Líneas Activas",
    oneLiner: "Doble ranura y soporte para chip digital integrado en el mismo terminal.",
    clientPitch: "Lleve su número de trabajo y su número personal en el mismo celular."
  },
  network: {
    title: "Módem 5G y Antenas",
    keyFact: "Descargas Ultrarrápidas",
    oneLiner: "Antenas de alta recepción para navegación a máxima velocidad y llamadas estables.",
    clientPitch: "Descargas inmediatas de videos y videollamadas sin pausas ni cortes."
  }
};

const PHONES_COMPARE_DATA = [
  {
    id: "nova-lite",
    name: "Nova Lite",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80",
    priceMXN: 3499,
    downPaymentMXN: 600,
    weeklyMXN: 241,
    tag: "Económico y Básico",
    metrics: {
      ramVal: 4,
      ramMax: 12,
      ramLabel: "4 GB RAM",
      storageVal: 128,
      storageMax: 512,
      storageLabel: "128 GB",
      batteryVal: 5000,
      batteryMax: 6000,
      batteryLabel: "5000 mAh",
      screenHz: "90 Hz",
      cameraMain: "50 MP Principal",
      network: "4G LTE / Dual SIM"
    },
    idealFor: "Llamadas, WhatsApp, navegación y uso diario sin gastar de más."
  },
  {
    id: "nova-x1",
    name: "Nova X1",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    priceMXN: 5899,
    downPaymentMXN: 1000,
    weeklyMXN: 408,
    tag: "El Más Vendido",
    metrics: {
      ramVal: 8,
      ramMax: 12,
      ramLabel: "8 GB RAM",
      storageVal: 256,
      storageMax: 512,
      storageLabel: "256 GB",
      batteryVal: 5000,
      batteryMax: 6000,
      batteryLabel: "5000 mAh",
      screenHz: "120 Hz AMOLED",
      cameraMain: "64 MP con OIS (Estabilizador)",
      network: "5G Red Rápida / eSIM"
    },
    idealFor: "Multitarea fluida, redes sociales intensivas, trabajo y fotos nítidas."
  },
  {
    id: "nova-x1-pro",
    name: "Nova X1 Pro",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=400&q=80",
    priceMXN: 8999,
    downPaymentMXN: 1800,
    weeklyMXN: 600,
    tag: "Máxima Potencia",
    metrics: {
      ramVal: 12,
      ramMax: 12,
      ramLabel: "12 GB RAM LPDDR5",
      storageVal: 512,
      storageMax: 512,
      storageLabel: "512 GB",
      batteryVal: 5200,
      batteryMax: 6000,
      batteryLabel: "5200 mAh (67W Carga)",
      screenHz: "120 Hz 1.5K AMOLED",
      cameraMain: "108 MP + Video 4K Frontal",
      network: "5G Ultra / Wi-Fi 6 / IP68"
    },
    idealFor: "Creadores de video, fotografía profesional y máxima velocidad."
  }
];

// SVG Icons
const SVG_ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
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

// 1. FILTRO DE CATEGORÍAS (PILLS)
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

// 2. FICHAS VISUALES EDITORIALES
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
      <div class="card-visual-stage">
        ${getVisualComponentHtml(card.visualComponent)}
      </div>

      <div class="card-content-pane">
        <span class="card-badge-tag">${card.badge}</span>
        <h3 class="card-title-text">${card.title}</h3>
        <span class="card-keyfact-chip">${card.keyFact}</span>
        <p class="card-oneliner-text">${card.oneLiner}</p>

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

  container.querySelectorAll(".btn-open-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const cardId = btn.getAttribute("data-card-id");
      openCardDetailModal(cardId);
    });
  });
}

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

// 3. TELÉFONO INTERACTIVO
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

// 4. COMPARADOR VISUAL
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
        <div class="compare-metric-item">
          <div class="metric-label-row">
            <span>RAM</span>
            <span>${phone.metrics.ramLabel}</span>
          </div>
          <div class="metric-bar-track">
            <div class="metric-bar-progress" style="width: ${(phone.metrics.ramVal / phone.metrics.ramMax) * 100}%;"></div>
          </div>
        </div>

        <div class="compare-metric-item">
          <div class="metric-label-row">
            <span>Espacio</span>
            <span>${phone.metrics.storageLabel}</span>
          </div>
          <div class="metric-bar-track">
            <div class="metric-bar-progress" style="width: ${(phone.metrics.storageVal / phone.metrics.storageMax) * 100}%;"></div>
          </div>
        </div>

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

// 5. SIMULADOR DE CUOTAS
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

// 6. MODAL
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

// 7. BÚSQUEDA Y NAVEGACIÓN
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
