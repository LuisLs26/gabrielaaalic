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

// DOM References & Init
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

  // Listen for progress updates
  window.addEventListener("progressUpdated", () => {
    updateLiveProgressIndicators();
  });
}

function renderBrandInfo() {
  const brandTitle = document.getElementById("brandTrainerName");
  if (brandTitle) brandTitle.textContent = APP_CONFIG.trainerName;
  const brandSub = document.getElementById("brandTrainerSub");
  if (brandSub) brandSub.textContent = APP_CONFIG.badge;
}

function setupNavigation() {
  const navButtons = document.querySelectorAll("[data-nav-target]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const target = btn.getAttribute("data-nav-target");
      navigateTo(target);
    });
  });
}

export function navigateTo(viewId) {
  AppState.currentView = viewId;
  
  // Update views
  document.querySelectorAll(".section-view").forEach(view => {
    view.classList.remove("active-view");
  });
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update bottom nav active state
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
  // Update Greeting based on hour
  const hour = new Date().getHours();
  let greeting = "Hola 👋";
  if (hour < 12) greeting = "Buenos días ☀️";
  else if (hour < 19) greeting = "Buenas tardes 🌤️";
  else greeting = "Buenas noches 🌙";

  const greetingEl = document.getElementById("homeGreeting");
  if (greetingEl) greetingEl.textContent = greeting;

  // Daily Challenge Logic
  const optButtons = document.querySelectorAll(".daily-opt-btn");
  const feedbackBox = document.getElementById("dailyFeedback");

  optButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.getAttribute("data-correct") === "true";
      optButtons.forEach(b => {
        b.style.pointerEvents = "none";
        if (b.getAttribute("data-correct") === "true") {
          b.style.background = "rgba(52, 199, 89, 0.4)";
          b.style.borderColor = "#34C759";
        } else {
          b.style.opacity = "0.5";
        }
      });

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        if (isCorrect) {
          feedbackBox.innerHTML = `<strong>✓ ¡Excelente deducción!</strong><br>El <strong>Procesador</strong> y la <strong>RAM</strong> determinan la velocidad y agilidad del equipo. Explícale al cliente cómo sentirá el cambio al abrir varias apps.`;
          ProgressManager.setDailyChallengeCompleted(true);
        } else {
          feedbackBox.innerHTML = `<strong>💡 Tip de Gabriela:</strong><br>Para 'rapidez', enfócate en <strong>Procesador</strong> y <strong>RAM</strong> antes de hablar de la cámara o pantalla.`;
          ProgressManager.setDailyChallengeCompleted(false);
        }
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 2. EXPLORA UN TELÉFONO (HOTSPOTS INTERACTIVOS)
// ---------------------------------------------------------------------------
const HOTSPOT_DATA = {
  screen: {
    title: "Pantalla 120 Hz AMOLED",
    icon: "📺",
    tech: "Panel FHD+ de 6.67 pulgadas con 120 Hertzios de refresco adaptativo.",
    customerPitch: "Los videos y redes se ven súper claros y al deslizar la pantalla todo se siente ultra suave sin cansarte la vista.",
    quiz: {
      q: "¿Cómo le explicas '120 Hz' de forma sencilla?",
      opts: ["Hace que la música suene más fuerte", "Hace que el celular se sienta mucho más fluido y suave al deslizar", "Aumenta la señal del chip"],
      correct: 1,
      tip: "¡Exacto! Fluidez y suavidad es lo que el ojo nota de inmediato."
    }
  },
  camera: {
    title: "Cámara 64 MP con OIS",
    icon: "📸",
    tech: "Sensor de alta resolución con Estabilización Óptica de Imagen (OIS).",
    customerPitch: "Tus fotos y videos saldrán nítidos y sin moverse aunque tus manos tiemblen o los niños estén en movimiento.",
    quiz: {
      q: "¿Para qué sirve el estabilizador (OIS)?",
      opts: ["Para que las fotos no salgan borrosas o movidas", "Para que la batería cargue más rápido", "Para cambiar el fondo de pantalla"],
      correct: 0,
      tip: "¡Muy bien! Elimina las fotos movidas o desenfocadas."
    }
  },
  processor: {
    title: "Procesador Snapdragon 5G",
    icon: "⚡",
    tech: "Chipset Octa-core con módem 5G y optimización térmica por IA.",
    customerPitch: "Es el motor del teléfono: abre tus apps al instante, no se traba y te da la máxima velocidad de internet 5G.",
    quiz: {
      q: "Si un cliente dice 'no quiero que se me trabe el celular', ¿qué le explicas?",
      opts: ["El color de la carcasa", "El procesador y la memoria RAM", "El tamaño de los audífonos"],
      correct: 1,
      tip: "¡Perfecto! Procesador + RAM es la fórmula de la velocidad."
    }
  },
  battery: {
    title: "Batería 5000 mAh + Carga Rápida",
    icon: "🔋",
    tech: "Celda de polímero de litio con carga Turbo Power de 33W.",
    customerPitch: "Batería de sobra para más de un día completo de trabajo y redes, y con 20 minutos de carga tienes horas extra.",
    quiz: {
      q: "¿Qué ventaja resuelve los 5000 mAh?",
      opts: ["No tener que buscar cargadores a mitad de la tarde", "Pagar menos en la factura de luz", "Tener fotos con más brillo"],
      correct: 0,
      tip: "¡Excelente! Tranquilidad de no quedarse sin batería fuera de casa."
    }
  },
  network: {
    title: "Conectividad 5G & Dual SIM",
    icon: "📶",
    tech: "Compatibilidad con redes 5G NR y doble ranura Nano SIM / eSIM.",
    customerPitch: "Navegas a toda velocidad y puedes llevar tu número de trabajo y tu número personal en el mismo celular.",
    quiz: {
      q: "¿Qué beneficio tiene el Dual SIM para quien vende por WhatsApp?",
      opts: ["Tener dos celulares físicos", "Manejar línea de negocio y personal en el mismo teléfono", "Mejorar el volumen del altavoz"],
      correct: 1,
      tip: "¡Correcto! Separa trabajo y familia sin gastar en dos teléfonos."
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

    if (sheetTitle) sheetTitle.innerHTML = `<span>${data.icon}</span> ${data.title}`;
    if (sheetDesc) sheetDesc.textContent = data.tech;
    if (sheetPitch) sheetPitch.textContent = data.customerPitch;

    // Render Micro Quiz
    if (sheetQuizWrap) {
      sheetQuizWrap.innerHTML = `
        <div class="quiz-box">
          <div class="quiz-q-title">🎯 Mini Reto: ${data.quiz.q}</div>
          <div class="quiz-opts-list">
            ${data.quiz.opts.map((opt, i) => `
              <button class="quiz-choice-btn" data-idx="${i}">${opt}</button>
            `).join('')}
          </div>
          <div class="quiz-feedback-text" id="hsQuizFeedback" style="display:none;"></div>
        </div>
      `;

      const choiceBtns = sheetQuizWrap.querySelectorAll(".quiz-choice-btn");
      const fb = sheetQuizWrap.querySelector("#hsQuizFeedback");

      choiceBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-idx"));
          choiceBtns.forEach(b => b.style.pointerEvents = "none");
          if (idx === data.quiz.correct) {
            btn.classList.add("correct");
            fb.style.display = "block";
            fb.style.color = "var(--accent-green)";
            fb.textContent = `✓ ${data.quiz.tip}`;
            ProgressManager.markTopicComplete(key, "rendimiento");
          } else {
            btn.classList.add("wrong");
            choiceBtns[data.quiz.correct].classList.add("correct");
            fb.style.display = "block";
            fb.style.color = "var(--accent-red)";
            fb.textContent = `💡 Respuesta correcta: ${data.quiz.opts[data.quiz.correct]}`;
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

  // Load default
  loadHotspot("processor");
}

// ---------------------------------------------------------------------------
// 3. COMPARADOR VISUAL ("¿Cuál es mejor para este cliente?")
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
          card.style.borderColor = "var(--accent-green)";
          card.style.boxShadow = "0 0 20px rgba(52, 199, 89, 0.3)";
          feedbackEl.innerHTML = `
            <div style="font-weight:700; color:var(--accent-green); margin-bottom:6px;">✓ ¡Recomendación Perfecta!</div>
            <p style="font-size:13px; color:var(--text-primary); line-height:1.4;">${challenge.explanation}</p>
            <div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">
              ${challenge.keyPoints.map(p => `<span class="badge-tag green">${p}</span>`).join('')}
            </div>
          `;
          ProgressManager.markTopicComplete("comparator-done", "rendimiento");
        } else {
          card.style.borderColor = "var(--accent-red)";
          feedbackEl.innerHTML = `
            <div style="font-weight:700; color:var(--accent-red); margin-bottom:6px;">💡 Mejor alternativa: Nova X1 Pro</div>
            <p style="font-size:13px; color:var(--text-primary); line-height:1.4;">${challenge.explanation}</p>
          `;
        }
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 4. SIMULADOR DE VENTA REAL (4 PASOS INTERACTIVOS)
// ---------------------------------------------------------------------------
function setupSalesSimulator() {
  const simContainer = document.getElementById("salesSimContainer");
  const simScoreEl = document.getElementById("simScoreDisplay");

  function renderSimStep() {
    if (!simContainer) return;
    const stepData = SALES_SIMULATION.steps[AppState.simulationStep];

    if (!stepData) {
      // Simulación completada
      simContainer.innerHTML = `
        <div class="liquid-card" style="text-align:center; padding:28px 20px;">
          <div style="font-size:44px; margin-bottom:12px;">🏆</div>
          <h3 style="font-size:20px; font-weight:800; color:var(--text-primary); margin-bottom:8px;">¡Simulación de Venta Exitosa!</h3>
          <p style="font-size:14px; color:var(--text-secondary); line-height:1.4; margin-bottom:18px;">
            Demostraste excelente escucha activa, explicaste los beneficios de RAM y batería con claridad y cerraste con financiamiento a cuotas.
          </p>
          <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px;">
            <span class="badge-tag green">Puntuación: 10/10</span>
            <span class="badge-tag blue">+100 Puntos</span>
          </div>
          <button class="btn-primary" id="btnRestartSim">Practicar de Nuevo</button>
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
      <div class="chat-sim-container">
        <div class="chat-bubble customer">
          <div class="customer-avatar-tag">
            <span>👤</span> Carlos (Cliente) • ${stepData.customerMood}
          </div>
          "${stepData.customerMessage}"
        </div>
      </div>

      <div style="font-size:12px; font-weight:700; color:var(--text-secondary); text-transform:uppercase; margin-bottom:10px;">
        Paso ${stepData.step} de ${SALES_SIMULATION.steps.length}: Elige tu respuesta como asesor
      </div>

      <div style="display:flex; flex-direction:column; gap:10px;" id="simChoicesWrap">
        ${stepData.options.map((opt, i) => `
          <button class="liquid-card" data-opt-idx="${i}" style="text-align:left; cursor:pointer; padding:14px;">
            <div style="font-size:13px; font-weight:600; color:var(--text-primary); line-height:1.35;">${opt.text}</div>
          </button>
        `).join('')}
      </div>

      <div id="simStepFeedback" style="display:none; margin-top:14px; padding:14px; border-radius:var(--radius-md); font-size:13px; line-height:1.4;"></div>
      <button class="btn-primary" id="btnNextSimStep" style="display:none; margin-top:14px;">Siguiente Paso →</button>
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
            btn.style.borderColor = "var(--accent-green)";
            btn.style.background = "var(--accent-green-soft)";
            fb.style.background = "var(--accent-green-soft)";
            fb.style.color = "#1b5e20";
            fb.innerHTML = `<strong>✓ Excelente enfoque:</strong> ${opt.feedback}`;
            AppState.simulationScore += opt.score;
          } else {
            btn.style.borderColor = "var(--accent-red)";
            btn.style.background = "var(--accent-red-soft)";
            fb.style.background = "var(--accent-red-soft)";
            fb.style.color = "#b71c1c";
            fb.innerHTML = `<strong>💡 Observación de Gabriela:</strong> ${opt.feedback}`;
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
// 5. SIMULADOR DE CUOTAS (CALCULADORA INTERACTIVA)
// ---------------------------------------------------------------------------
function setupCreditCalculator() {
  const priceSlider = document.getElementById("calcPriceSlider");
  const priceDisplay = document.getElementById("calcPriceVal");
  const downSlider = document.getElementById("calcDownSlider");
  const downDisplay = document.getElementById("calcDownVal");
  const cuotaDisplay = document.getElementById("calcCuotaBig");
  const termPills = document.querySelectorAll(".term-pill-btn");
  const summaryTotal = document.getElementById("calcSummaryTotal");
  const summaryInitial = document.getElementById("calcSummaryInitial");
  const summaryBalance = document.getElementById("calcSummaryBalance");

  function recalculate() {
    const price = parseInt(priceSlider?.value || 5899);
    const down = parseInt(downSlider?.value || 1000);
    const balance = Math.max(0, price - down);
    const term = AppState.calculator.termWeeks || 12;

    // Cálculo demostrativo directo (sin intereses ocultos para fines formativos)
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
// 6. GLOSARIO VISUAL INTERACTIVO CON BÚSQUEDA INSTANTÁNEA
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
        <div class="module-accordion-card">
          <div class="module-accordion-head">
            <div class="module-head-left">
              <div class="module-icon-circle" style="background:${module.color};">
                ${getModuleSvgIcon(module.icon)}
              </div>
              <div>
                <div class="module-title-h3">${module.title}</div>
                <div class="module-sub-info">${filteredItems.length} temas clave</div>
              </div>
            </div>
            <span style="color:var(--text-tertiary); font-size:18px;">›</span>
          </div>

          <div class="module-body-items">
            ${filteredItems.map(item => `
              <div class="topic-row-item" data-topic-id="${item.id}" data-mod-id="${module.id}">
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">${item.term}</div>
                  <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">${item.badge}</div>
                </div>
                <button class="btn-icon-soft" style="width:28px; height:28px; font-size:11px;">🔍</button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    glossaryList.innerHTML = html || `<div style="text-align:center; padding:30px; color:var(--text-secondary);">No encontramos términos para "${filter}"</div>`;

    // Attach click modal to topics
    glossaryList.querySelectorAll(".topic-row-item").forEach(row => {
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
          <h2 style="font-size:20px; font-weight:800; color:var(--text-primary);">${foundItem.term}</h2>
        </div>
        <button class="btn-icon-soft" id="btnCloseTopicModal">✕</button>
      </div>

      <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-md); margin-bottom:16px;">
        <div style="font-size:11px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; margin-bottom:4px;">Definición Técnica</div>
        <div style="font-size:13px; color:var(--text-primary); line-height:1.4;">${foundItem.technical}</div>
      </div>

      <div class="hotspot-pitch-box" style="margin-bottom:16px;">
        <div class="pitch-label">🗣️ Cómo explicárselo al cliente</div>
        <div class="pitch-text">${foundItem.clientExplanation}</div>
      </div>

      <div style="border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:14px; margin-bottom:18px;">
        <div style="font-size:11px; font-weight:700; color:var(--accent-blue); text-transform:uppercase; margin-bottom:8px;">Ejemplo de Diálogo en Tienda</div>
        <div style="font-size:12px; line-height:1.4; color:var(--text-secondary); margin-bottom:6px;">
          <strong>Cliente:</strong> "${foundItem.salesExample.client}"
        </div>
        <div style="font-size:12px; line-height:1.4; color:var(--text-primary);">
          <strong>Asesor:</strong> "${foundItem.salesExample.seller}"
        </div>
      </div>

      <div class="quiz-box">
        <div class="quiz-q-title">🎯 Pregunta Rápida: ${foundItem.microQuiz.question}</div>
        <div class="quiz-opts-list">
          ${foundItem.microQuiz.options.map((opt, i) => `
            <button class="quiz-choice-btn modal-quiz-opt" data-idx="${i}">${opt}</button>
          `).join('')}
        </div>
        <div class="quiz-feedback-text" id="modalQuizFeedback" style="display:none;"></div>
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
          fb.style.color = "var(--accent-green)";
          fb.textContent = `✓ ${foundItem.microQuiz.feedback}`;
          ProgressManager.markTopicComplete(foundItem.id, foundMod.id);
        } else {
          btn.classList.add("wrong");
          optBtns[foundItem.microQuiz.correctIndex].classList.add("correct");
          fb.style.display = "block";
          fb.style.color = "var(--accent-red)";
          fb.textContent = `💡 Respuesta correcta: ${foundItem.microQuiz.options[foundItem.microQuiz.correctIndex]}`;
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
// 7. VISTA CAPACITADORA DE GABRIELA (PANEL DEMOSTRATIVO)
// ---------------------------------------------------------------------------
function setupTrainerView() {
  const empList = document.getElementById("trainerEmployeesList");
  const moduleBars = document.getElementById("trainerModuleBars");

  if (empList) {
    empList.innerHTML = TRAINER_DASHBOARD_DATA.employees.map(emp => `
      <div class="employee-row-card">
        <div>
          <div class="emp-name">${emp.name}</div>
          <div class="emp-branch">${emp.store} • <span style="color:var(--accent-blue); font-weight:600;">${emp.badge}</span></div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:14px; font-weight:800; color:var(--text-primary);">${emp.progress}%</div>
          <div style="font-size:10px; color:var(--accent-green); font-weight:600;">${emp.status}</div>
        </div>
      </div>
    `).join('');
  }

  if (moduleBars) {
    moduleBars.innerHTML = TRAINER_DASHBOARD_DATA.modulePerformance.map(mod => `
      <div style="margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; margin-bottom:4px;">
          <span>${mod.module}</span>
          <span style="color:${mod.color};">${mod.completion}% (${mod.status})</span>
        </div>
        <div class="progress-bar-track" style="margin-bottom:0; height:6px;">
          <div class="progress-bar-fill" style="width:${mod.completion}%; background:${mod.color};"></div>
        </div>
      </div>
    `).join('');
  }
}

// ---------------------------------------------------------------------------
// 8. VISTA DE PROGRESO DEL EMPLEADO & INSIGNIAS
// ---------------------------------------------------------------------------
function setupProgressView() {
  const resetBtn = document.getElementById("btnResetProgressDemo");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("¿Deseas reiniciar los datos de progreso de la demo?")) {
        ProgressManager.resetDemo();
        alert("Progreso reiniciado correctamente.");
        updateLiveProgressIndicators();
      }
    });
  }
}

function updateLiveProgressIndicators() {
  const progress = ProgressManager.getProgress();
  const pct = ProgressManager.calculateOverallPercentage();

  // Elements
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
  if (streakBadge) streakBadge.textContent = `🔥 ${progress.streakDays} días`;
}

// ---------------------------------------------------------------------------
// 9. MODALS & DEMO GUIADA (ONBOARDING)
// ---------------------------------------------------------------------------
function setupModals() {
  const closeModals = document.querySelectorAll("[data-close-modal]");
  closeModals.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    });
  });

  // Modal Backdrop dismiss
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

// Icon helper (Clean Apple SF-style SVG)
function getModuleSvgIcon(name) {
  const icons = {
    antenna: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12h20M7 7a7 7 0 0 1 10 0M12 2v20"/></svg>`,
    "sim-card": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M9 11v6M15 11v6M9 14h6"/></svg>`,
    cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
    display: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    battery: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 10v4M6 10h4"/></svg>`,
    camera: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  };
  return icons[name] || icons.cpu;
}
