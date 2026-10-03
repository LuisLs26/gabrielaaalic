import { APP_CONFIG, PHONES_DATA, GLOSSARY_MODULES, SALES_SIMULATION, COMPARATOR_CHALLENGES, TRAINER_DASHBOARD_DATA } from './data.js';
import { ProgressManager } from './progress.js';

// Application State
const AppState = {
  currentView: "home",
  selectedPhone: PHONES_DATA[1], // Default: Nova X1
  activeHotspot: "processor",
  simulationStep: 0,
  simulationScore: 0,
  calculator: {
    price: 5899,
    downPayment: 1000,
    termWeeks: 12
  }
};

// SVG Icon Provider (Apple / SF Symbols Minimalist Line SVGs)
export const SVG_ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  device: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  practice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  compare: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg>`,
  glossary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  progress: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  trainer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  antenna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M7 7a7 7 0 0 1 10 0M12 2v20"/></svg>`,
  "sim-card": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 11v6M15 11v6M9 14h6"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
  display: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 10v4M6 10h4"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderBrandInfo();
  setupNavigation();
  setupHomeView();
  setupPhoneExplorer();
  setupComparator();
  setupSalesSimulator();
  setupCreditCalculator();
  setupGlossary();
  setupTrainerView();
  setupProgressView();
  setupModals();
  checkOnboarding();
  updateLiveProgressIndicators();

  window.addEventListener("progressUpdated", () => {
    updateLiveProgressIndicators();
  });
}

function renderBrandInfo() {
  const brandTitle = document.getElementById("brandTrainerName");
  if (brandTitle) brandTitle.textContent = APP_CONFIG.trainerName;
  const brandSub = document.getElementById("brandTrainerSub");
  if (brandSub) brandSub.textContent = APP_CONFIG.trainerTitle;
}

function setupNavigation() {
  const navButtons = document.querySelectorAll("[data-nav-target]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-nav-target");
      navigateTo(target);
    });
  });
}

export function navigateTo(viewId) {
  AppState.currentView = viewId;
  
  document.querySelectorAll(".section-view").forEach(view => {
    view.classList.remove("active-view");
  });
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll(".bottom-nav-bar .nav-item").forEach(item => {
    if (item.getAttribute("data-nav-target") === viewId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// ---------------------------------------------------------------------------
// 1. HOME VIEW SETUP
// ---------------------------------------------------------------------------
function setupHomeView() {
  const hour = new Date().getHours();
  let greeting = "Bienvenido";
  if (hour < 12) greeting = "Buenos días";
  else if (hour < 19) greeting = "Buenas tardes";
  else greeting = "Buenas noches";

  const greetingEl = document.getElementById("homeGreeting");
  if (greetingEl) greetingEl.textContent = greeting;

  // Daily Challenge Logic
  const optButtons = document.querySelectorAll(".challenge-select-btn");
  const feedbackBox = document.getElementById("dailyFeedback");

  optButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.getAttribute("data-correct") === "true";
      optButtons.forEach(b => {
        b.style.pointerEvents = "none";
        if (b.getAttribute("data-correct") === "true") {
          b.classList.add("correct");
        } else {
          b.style.opacity = "0.5";
        }
      });

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        if (isCorrect) {
          feedbackBox.style.background = "var(--status-success-bg)";
          feedbackBox.style.color = "var(--status-success)";
          feedbackBox.innerHTML = `<strong>Diagnóstico correcto.</strong> La memoria RAM y el procesador determinan el tiempo de respuesta y fluidez en multitarea. Argumente este beneficio antes de abordar características secundarias.`;
          ProgressManager.setDailyChallengeCompleted(true);
        } else {
          feedbackBox.style.background = "var(--status-alert-bg)";
          feedbackBox.style.color = "var(--status-alert)";
          feedbackBox.innerHTML = `<strong>Observación de entrenamiento:</strong> Ante la consulta de velocidad, enfoque el diálogo en el <strong>Procesador</strong> y la <strong>RAM</strong> antes de mencionar la cámara o la pantalla.`;
          ProgressManager.setDailyChallengeCompleted(false);
        }
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 2. EXPLORA UN TELÉFONO (HOTSPOTS)
// ---------------------------------------------------------------------------
const HOTSPOT_DATA = {
  screen: {
    title: "Pantalla AMOLED 120 Hz",
    tech: "Panel Full HD+ de 6.67 pulgadas con frecuencia de actualización adaptable de 120 Hz.",
    customerPitch: "Permite una lectura descansada y desplazamientos continuos de texto e imágenes sin desenfoque ni saltos al revisar documentos o catálogos.",
    quiz: {
      q: "¿Cómo explicar la tasa de 120 Hz en una conversación de venta?",
      opts: [
        "Aumenta la potencia acústica de las llamadas",
        "Aporta suavidad y respuesta inmediata al deslizar la vista en pantalla",
        "Incrementa la recepción de señal celular"
      ],
      correct: 1,
      tip: "Respuesta correcta. La suavidad visual en el desplazamiento es la ventaja inmediata."
    }
  },
  camera: {
    title: "Cámara 64 MP con OIS",
    tech: "Sensor de alta resolución integrado con Estabilización Óptica de Imagen (OIS).",
    customerPitch: "Asegura fotografías nítidas y videos estables evitando imágenes borrosas aun con poca iluminación o movimientos accidentales.",
    quiz: {
      q: "¿Qué función cumple la estabilización óptica (OIS)?",
      opts: [
        "Previene que las tomas salgan desenfocadas o movidas por pulso involuntario",
        "Acelera la recarga eléctrica de la batería",
        "Modifica el contraste del fondo del sistema"
      ],
      correct: 0,
      tip: "Respuesta correcta. Elimina la trepidación en condiciones complejas de luz."
    }
  },
  processor: {
    title: "Procesador Snapdragon 5G",
    tech: "Arquitectura de 8 núcleos en 6 nm con módem integrado para redes 5G de alta velocidad.",
    customerPitch: "Constituye el motor central del equipo: abre aplicaciones en milisegundos y mantiene la fluidez del sistema durante toda la jornada.",
    quiz: {
      q: "Si el cliente busca evitar lentitud al trabajar, ¿qué componente se debe argumentar?",
      opts: [
        "El material del marco perimetral",
        "El procesador central y la memoria RAM",
        "La resolución de la cámara frontal"
      ],
      correct: 1,
      tip: "Respuesta correcta. Procesador y RAM definen la agilidad operativa."
    }
  },
  battery: {
    title: "Batería 5000 mAh y Carga Rápida",
    tech: "Celda de polímero de 5000 mAh combinada con protocolo de carga rápida de 33W.",
    customerPitch: "Otorga autonomía para jornadas completas de actividad profesional y permite recuperar horas de operación con solo 20 minutos de conexión.",
    quiz: {
      q: "¿Qué necesidad concreta resuelve una capacidad de 5000 mAh?",
      opts: [
        "Operar durante toda la jornada sin depender de cargadores externos",
        "Reducir el consumo de datos en la factura mensual",
        "Aumentar el brillo del panel táctil"
      ],
      correct: 0,
      tip: "Respuesta correcta. Brinda autonomía garantizada fuera de oficina."
    }
  },
  network: {
    title: "Conectividad 5G y Dual SIM",
    tech: "Soporte para redes de quinta generación 5G NR y módulo para doble línea (SIM / eSIM).",
    customerPitch: "Permite navegación a máxima velocidad y posibilita gestionar dos líneas activas (personal y de trabajo) en un solo dispositivo.",
    quiz: {
      q: "¿Cuál es el valor práctico de Dual SIM para un cliente comercial?",
      opts: [
        "Requerir la compra de dos terminales independientes",
        "Administrar la línea de trabajo y la personal en el mismo equipo",
        "Optimizar el volumen del micrófono"
      ],
      correct: 1,
      tip: "Respuesta correcta. Centraliza la comunicación profesional y personal."
    }
  }
};

function setupPhoneExplorer() {
  const hotspots = document.querySelectorAll(".hotspot-point");
  const sheetTitle = document.getElementById("hotspotSheetTitle");
  const sheetDesc = document.getElementById("hotspotSheetDesc");
  const sheetPitch = document.getElementById("hotspotSheetPitch");
  const sheetQuizWrap = document.getElementById("hotspotQuizWrap");

  function loadHotspot(key) {
    AppState.activeHotspot = key;
    const data = HOTSPOT_DATA[key];
    if (!data) return;

    if (sheetTitle) sheetTitle.textContent = data.title;
    if (sheetDesc) sheetDesc.textContent = data.tech;
    if (sheetPitch) sheetPitch.textContent = data.customerPitch;

    if (sheetQuizWrap) {
      sheetQuizWrap.innerHTML = `
        <div class="quiz-wrapper">
          <div class="quiz-header-title">Evaluación Rápida: ${data.quiz.q}</div>
          <div class="quiz-options-list">
            ${data.quiz.opts.map((opt, i) => `
              <button class="quiz-opt-item" data-idx="${i}">${opt}</button>
            `).join('')}
          </div>
          <div id="hsQuizFeedback" style="display:none; font-size:12px; font-weight:600; margin-top:8px; line-height:1.4;"></div>
        </div>
      `;

      const choiceBtns = sheetQuizWrap.querySelectorAll(".quiz-opt-item");
      const fb = sheetQuizWrap.querySelector("#hsQuizFeedback");

      choiceBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-idx"));
          choiceBtns.forEach(b => b.style.pointerEvents = "none");
          if (idx === data.quiz.correct) {
            btn.classList.add("correct");
            fb.style.display = "block";
            fb.style.color = "var(--status-success)";
            fb.textContent = data.quiz.tip;
            ProgressManager.markTopicComplete(key, "rendimiento");
          } else {
            btn.classList.add("wrong");
            choiceBtns[data.quiz.correct].classList.add("correct");
            fb.style.display = "block";
            fb.style.color = "var(--status-danger)";
            fb.textContent = `Opción correcta: ${data.quiz.opts[data.quiz.correct]}`;
          }
        });
      });
    }
  }

  hotspots.forEach(hs => {
    hs.addEventListener("click", () => {
      const key = hs.getAttribute("data-hotspot");
      loadHotspot(key);
    });
  });

  loadHotspot("processor");
}

// ---------------------------------------------------------------------------
// 3. COMPARADOR VISUAL
// ---------------------------------------------------------------------------
function setupComparator() {
  const challenge = COMPARATOR_CHALLENGES[0];
  const profileEl = document.getElementById("compProfileName");
  const needEl = document.getElementById("compProfileNeed");
  const phoneCards = document.querySelectorAll(".comp-phone-card");
  const feedbackEl = document.getElementById("compFeedbackCard");

  if (profileEl) profileEl.textContent = challenge.customerProfile.name;
  if (needEl) needEl.textContent = `"${challenge.customerProfile.need}"`;

  phoneCards.forEach(card => {
    card.addEventListener("click", () => {
      const phoneId = card.getAttribute("data-phone-id");
      const isCorrect = phoneId === challenge.correctPhoneId;

      phoneCards.forEach(c => c.style.pointerEvents = "none");

      if (feedbackEl) {
        feedbackEl.style.display = "block";
        if (isCorrect) {
          card.style.borderColor = "var(--status-success)";
          feedbackEl.innerHTML = `
            <div style="font-weight:700; color:var(--status-success); margin-bottom:6px;">Recomendación Validada</div>
            <p style="font-size:13px; color:var(--text-primary); line-height:1.45;">${challenge.explanation}</p>
            <div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">
              ${challenge.keyPoints.map(p => `<span class="badge-tag success">${p}</span>`).join('')}
            </div>
          `;
          ProgressManager.markTopicComplete("comparator-done", "rendimiento");
        } else {
          card.style.borderColor = "var(--status-danger)";
          feedbackEl.innerHTML = `
            <div style="font-weight:700; color:var(--status-danger); margin-bottom:6px;">Alternativa Sugerida: Nova X1 Pro</div>
            <p style="font-size:13px; color:var(--text-primary); line-height:1.45;">${challenge.explanation}</p>
          `;
        }
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 4. SIMULADOR DE VENTA CONSULTIVA
// ---------------------------------------------------------------------------
function setupSalesSimulator() {
  const simContainer = document.getElementById("salesSimContainer");

  function renderSimStep() {
    if (!simContainer) return;
    const stepData = SALES_SIMULATION.steps[AppState.simulationStep];

    if (!stepData) {
      simContainer.innerHTML = `
        <div class="card-clean" style="text-align:center; padding:24px 20px;">
          <h3 style="font-size:18px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Simulación Concluida</h3>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.45; margin-bottom:18px;">
            El proceso comercial cumplió con la secuencia de escucha activa, argumentación técnica adaptada y cierre con esquema de financiamiento.
          </p>
          <div style="display:flex; justify-content:center; gap:8px; margin-bottom:18px;">
            <span class="badge-tag success">Evaluación: 10 / 10</span>
            <span class="badge-tag blue">+100 Puntos Obtenidos</span>
          </div>
          <button class="btn-primary" id="btnRestartSim">Reiniciar Simulación de Venta</button>
        </div>
      `;
      ProgressManager.completeSimulation(10);
      document.getElementById("btnRestartSim")?.addEventListener("click", () => {
        AppState.simulationStep = 0;
        AppState.simulationScore = 0;
        renderSimStep();
      });
      return;
    }

    simContainer.innerHTML = `
      <div class="dialog-flow-wrap">
        <div class="dialog-bubble customer">
          <div class="dialog-client-meta">
            Carlos (Cliente) — ${stepData.customerMood}
          </div>
          "${stepData.customerMessage}"
        </div>
      </div>

      <div style="font-size:11px; font-weight:700; color:var(--text-secondary); text-transform:uppercase; margin-bottom:8px; letter-spacing:0.3px;">
        Etapa ${stepData.step} de ${SALES_SIMULATION.steps.length}: Seleccione su respuesta
      </div>

      <div style="display:flex; flex-direction:column; gap:8px;" id="simChoicesWrap">
        ${stepData.options.map((opt, i) => `
          <button class="card-clean" data-opt-idx="${i}" style="text-align:left; cursor:pointer; padding:12px 14px;">
            <div style="font-size:13px; font-weight:500; color:var(--text-primary); line-height:1.4;">${opt.text}</div>
          </button>
        `).join('')}
      </div>

      <div id="simStepFeedback" style="display:none; margin-top:12px; padding:12px 14px; border-radius:var(--radius-xs); font-size:12px; line-height:1.4;"></div>
      <button class="btn-primary" id="btnNextSimStep" style="display:none; margin-top:12px;">Continuar a la siguiente etapa</button>
    `;

    const choiceBtns = simContainer.querySelectorAll("#simChoicesWrap button");
    const fb = simContainer.querySelector("#simStepFeedback");
    const nextBtn = simContainer.querySelector("#btnNextSimStep");

    choiceBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-opt-idx"));
        const opt = stepData.options[idx];

        choiceBtns.forEach(b => b.style.pointerEvents = "none");

        if (fb) {
          fb.style.display = "block";
          if (opt.isBest) {
            btn.style.borderColor = "var(--status-success)";
            btn.style.background = "var(--status-success-bg)";
            fb.style.background = "var(--status-success-bg)";
            fb.style.color = "var(--status-success)";
            fb.innerHTML = `<strong>Enfoque acertado:</strong> ${opt.feedback}`;
            AppState.simulationScore += opt.score;
          } else {
            btn.style.borderColor = "var(--status-danger)";
            btn.style.background = "var(--status-danger-bg)";
            fb.style.background = "var(--status-danger-bg)";
            fb.style.color = "var(--status-danger)";
            fb.innerHTML = `<strong>Observación de entrenamiento:</strong> ${opt.feedback}`;
          }
        }

        if (nextBtn) {
          nextBtn.style.display = "flex";
          nextBtn.addEventListener("click", () => {
            AppState.simulationStep++;
            renderSimStep();
          }, { once: true });
        }
      });
    });
  }

  renderSimStep();
}

// ---------------------------------------------------------------------------
// 5. SIMULADOR DE CUOTAS
// ---------------------------------------------------------------------------
function setupCreditCalculator() {
  const priceSlider = document.getElementById("calcPriceSlider");
  const priceDisplay = document.getElementById("calcPriceVal");
  const downSlider = document.getElementById("calcDownSlider");
  const downDisplay = document.getElementById("calcDownVal");
  const cuotaDisplay = document.getElementById("calcCuotaBig");
  const termPills = document.querySelectorAll(".term-select-pill");
  const summaryTotal = document.getElementById("calcSummaryTotal");
  const summaryInitial = document.getElementById("calcSummaryInitial");
  const summaryBalance = document.getElementById("calcSummaryBalance");

  function recalculate() {
    const price = parseInt(priceSlider?.value || 5899);
    const down = parseInt(downSlider?.value || 1000);
    const balance = Math.max(0, price - down);
    const term = AppState.calculator.termWeeks || 12;

    const weeklyPayment = Math.round(balance / term);

    if (priceDisplay) priceDisplay.textContent = `$${price.toLocaleString()}`;
    if (downDisplay) downDisplay.textContent = `$${down.toLocaleString()}`;
    if (cuotaDisplay) cuotaDisplay.textContent = `$${weeklyPayment.toLocaleString()} / sem`;
    if (summaryTotal) summaryTotal.textContent = `$${price.toLocaleString()}`;
    if (summaryInitial) summaryInitial.textContent = `$${down.toLocaleString()}`;
    if (summaryBalance) summaryBalance.textContent = `$${balance.toLocaleString()}`;
  }

  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      AppState.calculator.price = parseInt(e.target.value);
      recalculate();
    });
  }

  if (downSlider) {
    downSlider.addEventListener("input", (e) => {
      AppState.calculator.downPayment = parseInt(e.target.value);
      recalculate();
    });
  }

  termPills.forEach(pill => {
    pill.addEventListener("click", () => {
      termPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.calculator.termWeeks = parseInt(pill.getAttribute("data-term") || 12);
      recalculate();
    });
  });

  recalculate();
}

// ---------------------------------------------------------------------------
// 6. GLOSARIO VISUAL
// ---------------------------------------------------------------------------
function setupGlossary() {
  const glossaryList = document.getElementById("glossaryModulesList");
  const searchInput = document.getElementById("glossarySearchInput");

  function renderGlossary(filter = "") {
    if (!glossaryList) return;
    const termFilter = filter.toLowerCase().trim();

    const html = GLOSSARY_MODULES.map(module => {
      const filteredItems = module.items.filter(item => 
        item.term.toLowerCase().includes(termFilter) || 
        item.technical.toLowerCase().includes(termFilter) ||
        item.clientExplanation.toLowerCase().includes(termFilter)
      );

      if (filteredItems.length === 0 && termFilter !== "") return "";

      return `
        <div class="module-card">
          <div class="module-header">
            <div class="module-left-content">
              <div class="module-icon-box">
                ${SVG_ICONS[module.icon] || SVG_ICONS.cpu}
              </div>
              <div>
                <div class="module-name">${module.title}</div>
                <div class="module-topic-count">${filteredItems.length} temas clave</div>
              </div>
            </div>
            <div style="color:var(--text-tertiary); display:flex; align-items:center;">
              ${SVG_ICONS.chevronRight}
            </div>
          </div>

          <div class="module-topics-list">
            ${filteredItems.map(item => `
              <div class="topic-item-row" data-topic-id="${item.id}" data-mod-id="${module.id}">
                <div>
                  <div style="font-size:13px; font-weight:600; color:var(--text-primary);">${item.term}</div>
                  <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">${item.badge}</div>
                </div>
                <span style="font-size:12px; color:var(--accent-primary); font-weight:600;">Consultar</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    glossaryList.innerHTML = html || `<div style="text-align:center; padding:24px; color:var(--text-secondary); font-size:13px;">No se encontraron términos para "${filter}"</div>`;

    glossaryList.querySelectorAll(".topic-item-row").forEach(row => {
      row.addEventListener("click", () => {
        const topicId = row.getAttribute("data-topic-id");
        openTopicModal(topicId);
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderGlossary(e.target.value);
    });
  }

  renderGlossary();
}

function openTopicModal(topicId) {
  let foundItem = null;
  let foundMod = null;

  for (const m of GLOSSARY_MODULES) {
    const itm = m.items.find(i => i.id === topicId);
    if (itm) {
      foundItem = itm;
      foundMod = m;
      break;
    }
  }

  if (!foundItem) return;

  const modal = document.getElementById("topicDetailModal");
  const content = document.getElementById("topicModalBody");

  if (content) {
    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px;">
        <div>
          <span class="badge-tag blue" style="margin-bottom:6px;">${foundItem.badge}</span>
          <h2 style="font-size:18px; font-weight:700; color:var(--text-primary);">${foundItem.term}</h2>
        </div>
        <button class="btn-secondary" id="btnCloseTopicModal" style="padding:4px 10px; font-size:11px;">Cerrar</button>
      </div>

      <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-xs); margin-bottom:14px; border:1px solid var(--border-subtle);">
        <div style="font-size:11px; font-weight:700; color:var(--text-secondary); text-transform:uppercase; margin-bottom:4px; letter-spacing:0.3px;">Definición Técnica</div>
        <div style="font-size:13px; color:var(--text-primary); line-height:1.45;">${foundItem.technical}</div>
      </div>

      <div class="sheet-pitch-card" style="margin-bottom:14px;">
        <div class="pitch-header">Estructura del Argumento Comercial</div>
        <div class="pitch-quote">${foundItem.clientExplanation}</div>
      </div>

      <div style="border:1px solid var(--border-subtle); border-radius:var(--radius-xs); padding:14px; margin-bottom:16px;">
        <div style="font-size:11px; font-weight:700; color:var(--accent-primary); text-transform:uppercase; margin-bottom:8px; letter-spacing:0.3px;">Diálogo Demostrativo en Tienda</div>
        <div style="font-size:12px; line-height:1.45; color:var(--text-secondary); margin-bottom:6px;">
          <strong>Cliente:</strong> "${foundItem.salesExample.client}"
        </div>
        <div style="font-size:12px; line-height:1.45; color:var(--text-primary);">
          <strong>Asesor:</strong> "${foundItem.salesExample.seller}"
        </div>
      </div>

      <div class="quiz-wrapper">
        <div class="quiz-header-title">Evaluación: ${foundItem.microQuiz.question}</div>
        <div class="quiz-options-list">
          ${foundItem.microQuiz.options.map((opt, i) => `
            <button class="quiz-opt-item modal-quiz-opt" data-idx="${i}">${opt}</button>
          `).join('')}
        </div>
        <div id="modalQuizFeedback" style="display:none; font-size:12px; font-weight:600; margin-top:8px; line-height:1.4;"></div>
      </div>
    `;

    const optBtns = content.querySelectorAll(".modal-quiz-opt");
    const fb = content.querySelector("#modalQuizFeedback");

    optBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"));
        optBtns.forEach(b => b.style.pointerEvents = "none");
        if (idx === foundItem.microQuiz.correctIndex) {
          btn.classList.add("correct");
          fb.style.display = "block";
          fb.style.color = "var(--status-success)";
          fb.textContent = foundItem.microQuiz.feedback;
          ProgressManager.markTopicComplete(foundItem.id, foundMod.id);
        } else {
          btn.classList.add("wrong");
          optBtns[foundItem.microQuiz.correctIndex].classList.add("correct");
          fb.style.display = "block";
          fb.style.color = "var(--status-danger)";
          fb.textContent = `Opción correcta: ${foundItem.microQuiz.options[foundItem.microQuiz.correctIndex]}`;
        }
      });
    });

    content.querySelector("#btnCloseTopicModal")?.addEventListener("click", () => {
      modal?.classList.remove("active");
    });
  }

  modal?.classList.add("active");
}

// ---------------------------------------------------------------------------
// 7. VISTA CAPACITADORA
// ---------------------------------------------------------------------------
function setupTrainerView() {
  const empList = document.getElementById("trainerEmployeesList");
  const moduleBars = document.getElementById("trainerModuleBars");

  if (empList) {
    empList.innerHTML = TRAINER_DASHBOARD_DATA.employees.map(emp => `
      <div class="employee-status-card">
        <div>
          <div class="emp-name-text">${emp.name}</div>
          <div class="emp-sub-text">${emp.store} • <span style="color:var(--accent-primary); font-weight:600;">${emp.badge}</span></div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:13px; font-weight:700; color:var(--text-primary);">${emp.progress}%</div>
          <div style="font-size:11px; color:var(--status-success); font-weight:600;">${emp.status}</div>
        </div>
      </div>
    `).join('');
  }

  if (moduleBars) {
    moduleBars.innerHTML = TRAINER_DASHBOARD_DATA.modulePerformance.map(mod => `
      <div style="margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; margin-bottom:4px;">
          <span>${mod.module}</span>
          <span style="color:var(--text-secondary);">${mod.completion}% (${mod.status})</span>
        </div>
        <div class="progress-track" style="margin-bottom:0; height:5px;">
          <div class="progress-fill" style="width:${mod.completion}%; background:${mod.color};"></div>
        </div>
      </div>
    `).join('');
  }
}

// ---------------------------------------------------------------------------
// 8. PROGRESO
// ---------------------------------------------------------------------------
function setupProgressView() {
  const resetBtn = document.getElementById("btnResetProgressDemo");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("¿Desea restablecer los registros de progreso de la demostración?")) {
        ProgressManager.resetDemo();
        updateLiveProgressIndicators();
      }
    });
  }
}

function updateLiveProgressIndicators() {
  const progress = ProgressManager.getProgress();
  const pct = ProgressManager.calculateOverallPercentage();

  const heroPct = document.getElementById("homeProgressPercent");
  const heroBar = document.getElementById("homeProgressBar");
  const myProgPct = document.getElementById("myProgressPercentVal");
  const myProgBar = document.getElementById("myProgressBarVal");
  const pointsBadge = document.getElementById("userPointsDisplay");
  const streakBadge = document.getElementById("userStreakDisplay");

  if (heroPct) heroPct.textContent = `${pct}%`;
  if (heroBar) heroBar.style.width = `${pct}%`;
  if (myProgPct) myProgPct.textContent = `${pct}%`;
  if (myProgBar) myProgBar.style.width = `${pct}%`;
  if (pointsBadge) pointsBadge.textContent = `${progress.totalPoints} pts`;
  if (streakBadge) streakBadge.textContent = `${progress.streakDays} días consecutivos`;
}

// ---------------------------------------------------------------------------
// 9. MODALS & ONBOARDING
// ---------------------------------------------------------------------------
function setupModals() {
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });
}

function checkOnboarding() {
  const progress = ProgressManager.getProgress();
  if (!progress.onboardingSeen) {
    const introModal = document.getElementById("commercialIntroModal");
    if (introModal) {
      introModal.classList.add("active");
      document.getElementById("btnStartDemoExperience")?.addEventListener("click", () => {
        introModal.classList.remove("active");
        progress.onboardingSeen = true;
        ProgressManager.saveProgress(progress);
      });
    }
  }
}
