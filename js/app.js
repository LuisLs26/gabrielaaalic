/**
 * MANUAL VISUAL DE EQUIPOS — GABRIELA LICONA
 * Controlador de experiencias interactivas y visuales.
 * Regla: Primero ver, luego entender, y solo si se desea, leer más.
 */

import {
  APP_CONFIG,
  CONNECTIVITY_DATA,
  SIM_EQUIPO_DATA,
  HOTSPOTS_EXPLORER,
  COMPARATOR_MODELS
} from "./data.js";

// Estado Global de la Aplicación
const State = {
  activeConn: "5g",
  activeSim: "sim",
  activeRam: 8,
  activeStorage: 256,
  activeScreenSize: 6.7,
  activeHz: 120,
  activeMah: 5000,
  activeWatt: 33,
  activeHotspot: "procesador",
  compareModelA: "nova-x1",
  compareModelB: "nova-x1-pro",
  calculator: {
    priceMXN: 5899,
    downPaymentMXN: 1000,
    frequency: "semanal",
    periods: 12
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initConnectivityExp();
  initSimEquipoExp();
  initSeguridadExp();
  initRendimientoExp();
  initPantallaExp();
  initBateriaExp();
  initCamaraExp();
  initHardwareExplorer();
  initComparatorExp();
  initCuotasCalculator();
  initModal();
});

/* ==========================================================================
   1. NAVEGACIÓN Y MENÚ MÓVIL
   ========================================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileClose = document.getElementById("mobileNavClose");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("open");
      mobileDrawer.setAttribute("aria-hidden", "false");
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      mobileDrawer.setAttribute("aria-hidden", "true");
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      mobileDrawer.setAttribute("aria-hidden", "true");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navItems.forEach(item => {
          if (item.getAttribute("href") === `#${id}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   2. CONECTIVIDAD
   ========================================================================== */
function initConnectivityExp() {
  const segButtons = document.querySelectorAll("#connSelector .seg-btn");
  const nodeTower = document.getElementById("nodeTower");
  const nodeRouter = document.getElementById("nodeRouter");
  const nodeAccessories = document.getElementById("nodeAccessories");
  const towerLabel = document.getElementById("towerLabel");
  const phoneSignalIcon = document.getElementById("phoneSignalIcon");
  const phoneSpeedMeter = document.getElementById("phoneSpeedMeter");
  const phoneStatusText = document.getElementById("phoneStatusText");

  const connBadge = document.getElementById("connBadge");
  const connSpeed = document.getElementById("connSpeed");
  const connTitle = document.getElementById("connTitle");
  const connConcept = document.getElementById("connConcept");
  const connPitchText = document.getElementById("connPitchText");
  const connPitchToggle = document.getElementById("connPitchToggle");
  const connPitchBox = document.getElementById("connPitchBox");
  const btnConnDetails = document.getElementById("btnConnDetails");

  function updateConn(mode) {
    State.activeConn = mode;
    const data = CONNECTIVITY_DATA[mode];
    if (!data) return;

    segButtons.forEach(btn => {
      const active = btn.getAttribute("data-conn") === mode;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    nodeTower.classList.remove("active");
    nodeRouter.classList.remove("active");
    nodeAccessories.classList.remove("active");

    if (mode === "5g") {
      nodeTower.classList.add("active");
      towerLabel.textContent = "Antena 5G";
      phoneSignalIcon.textContent = "5G";
      phoneSpeedMeter.textContent = "1,200 Mbps";
      phoneStatusText.textContent = "Conectado a Red 5G";
    } else if (mode === "4g") {
      nodeTower.classList.add("active");
      towerLabel.textContent = "Antena 4G LTE";
      phoneSignalIcon.textContent = "4G";
      phoneSpeedMeter.textContent = "65 Mbps";
      phoneStatusText.textContent = "Conectado a Red 4G";
    } else if (mode === "wifi") {
      nodeRouter.classList.add("active");
      phoneSignalIcon.textContent = "Wi-Fi";
      phoneSpeedMeter.textContent = "350 Mbps";
      phoneStatusText.textContent = "Conectado a Wi-Fi";
    } else if (mode === "bluetooth") {
      nodeAccessories.classList.add("active");
      phoneSignalIcon.textContent = "BT";
      phoneSpeedMeter.textContent = "10m Alcance";
      phoneStatusText.textContent = "Accesorios enlazados";
    }

    connBadge.textContent = data.badge;
    connSpeed.textContent = data.speedLabel;
    connTitle.textContent = data.name;
    connConcept.textContent = data.concept;
    connPitchText.textContent = `“${data.pitch}”`;
  }

  segButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      updateConn(btn.getAttribute("data-conn"));
    });
  });

  if (connPitchToggle && connPitchBox) {
    connPitchToggle.addEventListener("click", () => {
      connPitchBox.classList.toggle("open");
      connPitchToggle.classList.toggle("open");
    });
  }

  if (btnConnDetails) {
    btnConnDetails.addEventListener("click", () => {
      const data = CONNECTIVITY_DATA[State.activeConn];
      openModal(`
        <span class="badge-pill">${data.badge}</span>
        <h3 class="info-title" style="margin-top:10px;">${data.name}</h3>
        <p class="info-concept">${data.details}</p>
        <div class="dialog-speech-box">
          <div class="dialog-bubble client">
            <span class="bubble-author">Pregunta</span>
            ${data.clientDialog.client}
          </div>
          <div class="dialog-bubble seller">
            <span class="bubble-author">Respuesta</span>
            ${data.clientDialog.seller}
          </div>
        </div>
      `);
    });
  }
}

/* ==========================================================================
   3. SIM Y EQUIPO
   ========================================================================== */
function initSimEquipoExp() {
  const segButtons = document.querySelectorAll("#simSelector .seg-btn");
  const views = {
    sim: document.getElementById("viewSimPhysical"),
    esim: document.getElementById("viewEsim"),
    dualsim: document.getElementById("viewDualSim"),
    imei: document.getElementById("viewImei"),
    so: document.getElementById("viewSo")
  };

  const simBadge = document.getElementById("simBadge");
  const simTitle = document.getElementById("simTitle");
  const simConcept = document.getElementById("simConcept");
  const simPitchText = document.getElementById("simPitchText");
  const btnSimDetails = document.getElementById("btnSimDetails");

  const btnToggleSimInsert = document.getElementById("btnToggleSimInsert");
  const trayEjected = document.getElementById("trayEjected");
  const simInsertStatus = document.getElementById("simInsertStatus");
  let isInserted = false;

  if (btnToggleSimInsert && trayEjected) {
    btnToggleSimInsert.addEventListener("click", () => {
      isInserted = !isInserted;
      trayEjected.classList.toggle("inserted", isInserted);
      btnToggleSimInsert.textContent = isInserted ? "Expulsar SIM" : "Insertar SIM al Teléfono";
      simInsertStatus.textContent = isInserted ? "SIM dentro del equipo" : "Bandeja para chip";
    });
  }

  const btnDialImei = document.getElementById("btnDialImei");
  const imeiDisplay = document.getElementById("imeiDisplay");
  const imeiDialNote = document.getElementById("imeiDialNote");
  if (btnDialImei && imeiDisplay) {
    btnDialImei.addEventListener("click", () => {
      imeiDisplay.style.color = "var(--accent)";
      imeiDialNote.textContent = "Código verificado en pantalla marcando *#06#";
      setTimeout(() => {
        imeiDisplay.style.color = "var(--text-primary)";
      }, 1500);
    });
  }

  const btnSoAndroid = document.getElementById("btnSoAndroid");
  const btnSoIos = document.getElementById("btnSoIos");
  const soNameLabel = document.getElementById("soNameLabel");

  if (btnSoAndroid && btnSoIos && soNameLabel) {
    btnSoAndroid.addEventListener("click", () => {
      btnSoAndroid.classList.add("active");
      btnSoIos.classList.remove("active");
      soNameLabel.textContent = "Sistema Operativo (Android 14)";
    });
    btnSoIos.addEventListener("click", () => {
      btnSoIos.classList.add("active");
      btnSoAndroid.classList.remove("active");
      soNameLabel.textContent = "Sistema Operativo (iOS 18)";
    });
  }

  function updateSim(mode) {
    State.activeSim = mode;
    const data = SIM_EQUIPO_DATA[mode];
    if (!data) return;

    segButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-sim") === mode);
    });

    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.toggle("active", key === mode);
      }
    });

    simBadge.textContent = data.tag;
    simTitle.textContent = data.title;
    simConcept.textContent = data.oneLiner;
    simPitchText.textContent = `“${data.pitch}”`;
  }

  segButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      updateSim(btn.getAttribute("data-sim"));
    });
  });

  if (btnSimDetails) {
    btnSimDetails.addEventListener("click", () => {
      const data = SIM_EQUIPO_DATA[State.activeSim];
      openModal(`
        <span class="badge-pill">${data.tag}</span>
        <h3 class="info-title" style="margin-top:10px;">${data.title}</h3>
        <p class="info-concept">${data.oneLiner}</p>
        <div class="dialog-speech-box">
          <div class="dialog-bubble client">
            <span class="bubble-author">Pregunta</span>
            ${data.dialog.client}
          </div>
          <div class="dialog-bubble seller">
            <span class="bubble-author">Respuesta</span>
            ${data.dialog.seller}
          </div>
        </div>
      `);
    });
  }
}

/* ==========================================================================
   4. SEGURIDAD Y RESISTENCIA
   ========================================================================== */
function initSeguridadExp() {
  const btnTestFingerprint = document.getElementById("btnTestFingerprint");
  const btnTestFace = document.getElementById("btnTestFace");
  const lockIndicator = document.getElementById("lockIndicator");
  const lockSvg = document.getElementById("lockSvg");
  const lockElements = document.getElementById("lockElements");
  const homeElements = document.getElementById("homeElements");
  const fpZone = document.getElementById("fpZone");
  const faceMesh = document.getElementById("faceMesh");

  function unlockDevice() {
    lockIndicator.classList.add("unlocked");
    lockSvg.innerHTML = `<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/><polyline points="9 16 11 18 15 14"/>`;
    lockElements.classList.add("hidden");
    homeElements.classList.remove("hidden");

    setTimeout(() => {
      lockIndicator.classList.remove("unlocked");
      lockSvg.innerHTML = `<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`;
      lockElements.classList.remove("hidden");
      homeElements.classList.add("hidden");
      faceMesh.classList.add("hidden");
    }, 2400);
  }

  if (btnTestFingerprint) {
    btnTestFingerprint.addEventListener("click", unlockDevice);
  }

  if (fpZone) {
    fpZone.addEventListener("click", unlockDevice);
  }

  if (btnTestFace) {
    btnTestFace.addEventListener("click", () => {
      faceMesh.classList.remove("hidden");
      setTimeout(unlockDevice, 600);
    });
  }

  const btnToggleDust = document.getElementById("btnToggleDust");
  const btnToggleWater = document.getElementById("btnToggleWater");
  const dustContainer = document.getElementById("dustContainer");
  const waterContainer = document.getElementById("waterContainer");
  const ipPills = document.querySelectorAll(".ip-level-btn");
  const shieldRating = document.getElementById("shieldRating");
  const ipStatusIndicator = document.getElementById("ipStatusIndicator");
  const ipPitchText = document.getElementById("ipPitchText");

  let dustActive = false;
  let waterActive = false;

  function createParticles() {
    dustContainer.innerHTML = "";
    waterContainer.innerHTML = "";

    for (let i = 0; i < 25; i++) {
      const dust = document.createElement("div");
      dust.className = "dust-particle";
      dust.style.left = `${Math.random() * 90 + 5}%`;
      dust.style.top = `${Math.random() * 80 + 10}%`;
      dust.style.animationDelay = `${Math.random() * 2}s`;
      dustContainer.appendChild(dust);

      const drop = document.createElement("div");
      drop.className = "water-drop";
      drop.style.left = `${Math.random() * 85 + 7}%`;
      drop.style.animationDelay = `${Math.random() * 0.8}s`;
      waterContainer.appendChild(drop);
    }
  }

  createParticles();

  if (btnToggleDust && dustContainer) {
    btnToggleDust.addEventListener("click", () => {
      dustActive = !dustActive;
      dustContainer.classList.toggle("hidden", !dustActive);
      btnToggleDust.classList.toggle("btn-primary", dustActive);
      btnToggleDust.classList.toggle("btn-outline", !dustActive);
    });
  }

  if (btnToggleWater && waterContainer) {
    btnToggleWater.addEventListener("click", () => {
      waterActive = !waterActive;
      waterContainer.classList.toggle("hidden", !waterActive);
      btnToggleWater.classList.toggle("btn-primary", waterActive);
      btnToggleWater.classList.toggle("btn-outline", !waterActive);
    });
  }

  ipPills.forEach(pill => {
    pill.addEventListener("click", () => {
      ipPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const ip = pill.getAttribute("data-ip");
      if (ip === "ip54") {
        shieldRating.textContent = "IP54";
        ipStatusIndicator.textContent = "Resistencia a Salpicaduras";
        ipPitchText.textContent = "“Protegido contra salpicaduras de líquidos y lluvia ligera.”";
      } else {
        shieldRating.textContent = "IP68";
        ipStatusIndicator.textContent = "Resistencia a Inmersión";
        ipPitchText.textContent = "“Protegido ante accidentes con agua o caídas accidentales en líquidos.”";
      }
    });
  });
}

/* ==========================================================================
   5. RENDIMIENTO Y MEMORIA
   ========================================================================== */
function initRendimientoExp() {
  const ramButtons = document.querySelectorAll("#ramSelector .seg-btn");
  const ramAppsContainer = document.getElementById("ramAppsContainer");
  const ramActiveLabel = document.getElementById("ramActiveLabel");
  const ramPitchText = document.getElementById("ramPitchText");

  const appsList = [
    { name: "WhatsApp", icon: "WA" },
    { name: "Facebook", icon: "FB" },
    { name: "Chrome", icon: "CH" },
    { name: "Instagram", icon: "IG" },
    { name: "Mapas", icon: "MP" },
    { name: "YouTube", icon: "YT" },
    { name: "Música", icon: "MU" },
    { name: "Banco", icon: "BC" },
    { name: "Juego", icon: "3D" }
  ];

  function renderRamApps(ram) {
    State.activeRam = ram;
    ramButtons.forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.getAttribute("data-ram")) === ram);
    });

    let allowed = 3;
    let label = "4 GB RAM • 3 apps abiertas";
    let pitch = "Con 4 GB puedes usar mensajería y redes; si abres muchas apps a la vez, algunas tendrán que recargar.";

    if (ram === 8) {
      allowed = 6;
      label = "8 GB RAM • 6 apps abiertas";
      pitch = "Con 8 GB puedes alternar entre varias aplicaciones al mismo tiempo sin que se cierren.";
    } else if (ram === 12) {
      allowed = 9;
      label = "12 GB RAM • 9+ apps abiertas";
      pitch = "Con 12 GB obtienes fluidez total para juegos y multitarea intensiva sin pausas.";
    }

    ramActiveLabel.textContent = label;
    ramPitchText.textContent = `“${pitch}”`;

    ramAppsContainer.innerHTML = appsList.slice(0, 9).map((app, index) => {
      const isActive = index < allowed;
      return `
        <div class="ram-app-card ${isActive ? 'active' : 'reloaded'}">
          <span style="font-size:16px; font-weight:700;">${app.icon}</span>
          <span>${app.name}</span>
          <span style="font-size:9.5px; opacity:0.8;">${isActive ? 'Activa' : 'Recarga'}</span>
        </div>
      `;
    }).join("");
  }

  ramButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      renderRamApps(parseInt(btn.getAttribute("data-ram")));
    });
  });

  renderRamApps(8);

  const storageButtons = document.querySelectorAll("#storageSelector .seg-btn");
  const segPhotos = document.getElementById("segPhotos");
  const segVideos = document.getElementById("segVideos");
  const segApps = document.getElementById("segApps");
  const segSystem = document.getElementById("segSystem");

  const statPhotos = document.getElementById("statPhotos");
  const statVideos = document.getElementById("statVideos");
  const statApps = document.getElementById("statApps");
  const storagePitchText = document.getElementById("storagePitchText");

  function updateStorage(gb) {
    State.activeStorage = gb;
    storageButtons.forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.getAttribute("data-storage")) === gb);
    });

    if (gb === 128) {
      segPhotos.style.width = "40%";
      segVideos.style.width = "25%";
      segApps.style.width = "17%";
      segSystem.style.width = "18%";
      statPhotos.textContent = "~32,000";
      statVideos.textContent = "~30 hrs";
      statApps.textContent = "~45";
      storagePitchText.textContent = "“128 GB te da espacio suficiente para fotos, mensajes y aplicaciones habituales.”";
    } else if (gb === 256) {
      segPhotos.style.width = "38%";
      segVideos.style.width = "28%";
      segApps.style.width = "18%";
      segSystem.style.width = "16%";
      statPhotos.textContent = "~65,000";
      statVideos.textContent = "~65 hrs";
      statApps.textContent = "~90";
      storagePitchText.textContent = "“256 GB te da tranquilidad para guardar fotos y videos familiares sin preocuparte por el espacio.”";
    } else if (gb === 512) {
      segPhotos.style.width = "35%";
      segVideos.style.width = "32%";
      segApps.style.width = "21%";
      segSystem.style.width = "12%";
      statPhotos.textContent = "~135,000";
      statVideos.textContent = "~130 hrs";
      statApps.textContent = "~180+";
      storagePitchText.textContent = "“512 GB es ideal si grabas mucho video en alta definición y descargas contenido pesado.”";
    }
  }

  storageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      updateStorage(parseInt(btn.getAttribute("data-storage")));
    });
  });

  const taskButtons = document.querySelectorAll(".task-node-btn");
  const cpuStatement = document.getElementById("cpuStatement");
  const mainChip = document.getElementById("mainChip");

  const taskStatements = {
    apps: "“Abre y gestiona las aplicaciones.”",
    camera: "“Procesa la imagen y el enfoque de las fotos.”",
    gaming: "“Procesa los gráficos y la fluidez en juegos.”",
    ai: "“Optimiza el consumo y las funciones inteligentes.”"
  };

  taskButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      taskButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const task = btn.getAttribute("data-task");
      cpuStatement.textContent = taskStatements[task];

      mainChip.style.transform = "scale(1.08)";
      setTimeout(() => {
        mainChip.style.transform = "scale(1)";
      }, 200);
    });
  });
}

/* ==========================================================================
   6. PANTALLA
   ========================================================================== */
function initPantallaExp() {
  const sizeButtons = document.querySelectorAll("#screenSizeSelector .seg-btn");
  const phoneScaleFrame = document.getElementById("phoneScaleFrame");
  const diagonalLabel = document.getElementById("diagonalLabel");
  const inchesPitchText = document.getElementById("inchesPitchText");

  const sizeConfigs = {
    6.1: { width: "148px", height: "220px", label: '6.1" (15.5 cm)', pitch: "“6.1 pulgadas es un tamaño cómodo para usar con una mano.”" },
    6.5: { width: "162px", height: "238px", label: '6.5" (16.5 cm)', pitch: "“6.5 pulgadas es el equilibrio entre agarre cómodo y buen espacio para ver contenido.”" },
    6.7: { width: "176px", height: "258px", label: '6.7" (17.0 cm)', pitch: "“6.7 pulgadas ofrece una pantalla amplia para leer y ver videos sin forzar la vista.”" }
  };

  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const size = parseFloat(btn.getAttribute("data-size"));
      const config = sizeConfigs[size];
      if (config) {
        phoneScaleFrame.style.width = config.width;
        phoneScaleFrame.style.height = config.height;
        diagonalLabel.textContent = config.label;
        inchesPitchText.textContent = config.pitch;
      }
    });
  });

  const resSlider = document.getElementById("resSlider");
  const resTestImg = document.getElementById("resTestImg");
  const resOverlayLabel = document.getElementById("resOverlayLabel");

  if (resSlider && resTestImg && resOverlayLabel) {
    resSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      if (val < 40) {
        resTestImg.style.filter = "blur(4px) contrast(0.85)";
        resOverlayLabel.textContent = "720p HD";
      } else if (val < 75) {
        resTestImg.style.filter = "blur(1.5px) contrast(0.95)";
        resOverlayLabel.textContent = "1080p FHD";
      } else {
        resTestImg.style.filter = "none";
        resOverlayLabel.textContent = "Full HD+ Cristalino";
      }
    });
  }

  const btnZoomPixel = document.getElementById("btnZoomPixel");
  const pixelOrigImg = document.getElementById("pixelOrigImg");
  const pixelSubgrid = document.getElementById("pixelSubgrid");
  const pixelCaption = document.getElementById("pixelCaption");
  let isPixelZoomed = false;

  if (btnZoomPixel && pixelOrigImg && pixelSubgrid) {
    btnZoomPixel.addEventListener("click", () => {
      isPixelZoomed = !isPixelZoomed;
      pixelOrigImg.classList.toggle("zoomed", isPixelZoomed);
      pixelSubgrid.classList.toggle("hidden", !isPixelZoomed);
      pixelCaption.textContent = isPixelZoomed ? "Píxeles individuales visibles en pantalla" : "Toca 'Acercar' para ver la cuadrícula de puntos de luz";
      btnZoomPixel.querySelector("span").textContent = isPixelZoomed ? "Alejar" : "Acercar";
    });
  }

  const hzButtons = document.querySelectorAll("#hzSelector .seg-btn");
  const ball120 = document.getElementById("ball120");

  hzButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      hzButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const hz = parseInt(btn.getAttribute("data-hz"));

      if (hz === 60) {
        ball120.style.animation = "moveBall60 2s steps(8) infinite alternate";
        ball120.textContent = "60 Hz";
      } else if (hz === 90) {
        ball120.style.animation = "moveBall120 1.5s steps(18) infinite alternate";
        ball120.textContent = "90 Hz";
      } else {
        ball120.style.animation = "moveBall120 2s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate";
        ball120.textContent = "120 Hz";
      }
    });
  });
}

/* ==========================================================================
   7. BATERÍA Y CARGA
   ========================================================================== */
function initBateriaExp() {
  const mahButtons = document.querySelectorAll("#mahSelector .seg-btn");
  const batteryInnerFill = document.getElementById("batteryInnerFill");
  const batteryValDisplay = document.getElementById("batteryValDisplay");
  const batteryEstimateText = document.getElementById("batteryEstimateText");
  const mahPitchText = document.getElementById("mahPitchText");

  const mahData = {
    4000: { fill: "65%", label: "4000 mAh", est: "Capacidad para la jornada habitual.", pitch: "“4000 mAh ofrece un equipo más ligero con batería para el día.”" },
    5000: { fill: "85%", label: "5000 mAh", est: "Capacidad para uso continuo durante todo el día.", pitch: "“5000 mAh es la medida estándar para usar el celular todo el día con tranquilidad.”" },
    6000: { fill: "100%", label: "6000 mAh", est: "Máxima duración para hasta 2 días de uso moderado.", pitch: "“6000 mAh ofrece máxima duración para jornadas muy largas sin cargar.”" }
  };

  mahButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      mahButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mah = parseInt(btn.getAttribute("data-mah"));
      const config = mahData[mah];
      if (config) {
        batteryInnerFill.style.height = config.fill;
        batteryValDisplay.textContent = config.label;
        batteryEstimateText.textContent = config.est;
        mahPitchText.textContent = config.pitch;
      }
    });
  });

  const wattButtons = document.querySelectorAll("#wattSelector .seg-btn");
  const btnStartCharge = document.getElementById("btnStartCharge");
  const chargePercentBig = document.getElementById("chargePercentBig");
  const chargeTimeEst = document.getElementById("chargeTimeEst");
  const chargePitchText = document.getElementById("chargePitchText");

  let activeWatt = 33;
  let chargeInterval = null;

  const wattPitches = {
    18: "“Con 18W cargas el teléfono de forma segura en aproximadamente hora y media.”",
    33: "“Con 33W recuperas buena parte de la batería en pocos minutos.”",
    67: "“Con 67W recuperas carga para todo el día en 25 minutos.”"
  };

  wattButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      wattButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeWatt = parseInt(btn.getAttribute("data-watt"));
      chargePitchText.textContent = wattPitches[activeWatt];
    });
  });

  if (btnStartCharge && chargePercentBig) {
    btnStartCharge.addEventListener("click", () => {
      clearInterval(chargeInterval);
      btnStartCharge.disabled = true;
      let pct = 0;
      const speed = activeWatt === 67 ? 25 : activeWatt === 33 ? 40 : 65;

      chargeInterval = setInterval(() => {
        pct += 2;
        if (pct > 100) pct = 100;
        chargePercentBig.textContent = `${pct}%`;

        const minEst = Math.round((pct / 100) * (activeWatt === 67 ? 28 : activeWatt === 33 ? 55 : 85));
        chargeTimeEst.textContent = `Tiempo sim.: ${minEst} min`;

        if (pct >= 100) {
          clearInterval(chargeInterval);
          btnStartCharge.disabled = false;
        }
      }, speed);
    });
  }
}

/* ==========================================================================
   8. CÁMARAS Y MEGAPÍXELES
   ========================================================================== */
function initCamaraExp() {
  const lensPins = document.querySelectorAll(".lens-pin");
  const lensTitle = document.getElementById("lensTitle");
  const lensDesc = document.getElementById("lensDesc");
  const lensPitchText = document.getElementById("lensPitchText");

  lensPins.forEach(pin => {
    pin.addEventListener("click", () => {
      lensPins.forEach(p => p.classList.remove("active"));
      pin.classList.add("active");
      const lens = pin.getAttribute("data-lens");

      if (lens === "main") {
        lensTitle.textContent = "Cámara Principal con Estabilizador OIS";
        lensDesc.textContent = "Sensor principal con estabilización óptica para evitar fotos movidas.";
        lensPitchText.textContent = "“El estabilizador compensa el movimiento de la mano para que las fotos no salgan borrosas.”";
      } else {
        lensTitle.textContent = "Cámara Frontal";
        lensDesc.textContent = "Optimizada para selfies y videollamadas claras.";
        lensPitchText.textContent = "“Fotos y videollamadas claras sin sombras oscuras.”";
      }
    });
  });

  const btnCropDemo = document.getElementById("btnCropDemo");
  const cropTargetImg = document.getElementById("cropTargetImg");
  const cropCaption = document.getElementById("cropCaption");
  let isCropped = false;

  if (btnCropDemo && cropTargetImg) {
    btnCropDemo.addEventListener("click", () => {
      isCropped = !isCropped;
      cropTargetImg.classList.toggle("cropped", isCropped);
      cropCaption.textContent = isCropped ? "Detalle recortado manteniendo nitidez" : "Toca 'Recortar' para ver el nivel de detalle";
      btnCropDemo.querySelector("span").textContent = isCropped ? "Restaurar" : "Recortar";
    });
  }
}

/* ==========================================================================
   9. CONOCE EL TELÉFONO
   ========================================================================== */
function initHardwareExplorer() {
  const hotspots = document.querySelectorAll(".hw-hotspot");
  const expKeyFact = document.getElementById("expKeyFact");
  const expTitle = document.getElementById("expTitle");
  const expOneLiner = document.getElementById("expOneLiner");
  const expPitch = document.getElementById("expPitch");
  const expSpecs = document.getElementById("expSpecs");
  const btnExpFullDialog = document.getElementById("btnExpFullDialog");

  function updateHotspot(spotId) {
    State.activeHotspot = spotId;
    const data = HOTSPOTS_EXPLORER[spotId];
    if (!data) return;

    hotspots.forEach(spot => {
      spot.classList.toggle("active", spot.getAttribute("data-spot") === spotId);
    });

    expKeyFact.textContent = data.keyFact;
    expTitle.textContent = data.title;
    expOneLiner.textContent = data.oneLiner;
    expPitch.textContent = `“${data.pitch}”`;
    expSpecs.textContent = data.specs;
  }

  hotspots.forEach(spot => {
    spot.addEventListener("click", () => {
      updateHotspot(spot.getAttribute("data-spot"));
    });
  });

  if (btnExpFullDialog) {
    btnExpFullDialog.addEventListener("click", () => {
      const data = HOTSPOTS_EXPLORER[State.activeHotspot];
      openModal(`
        <span class="badge-pill">${data.keyFact}</span>
        <h3 class="info-title" style="margin-top:10px;">${data.title}</h3>
        <p class="info-concept">${data.oneLiner}</p>
        <div class="pitch-container">
          <span class="pitch-tag-label">Cómo explicárselo al cliente</span>
          <p class="pitch-quote">“${data.pitch}”</p>
        </div>
        <div style="font-size:14.5px; color:var(--text-secondary); line-height:1.5;">
          ${data.specs}
        </div>
      `);
    });
  }
}

/* ==========================================================================
   10. COMPARADOR DE EQUIPOS
   ========================================================================== */
function initComparatorExp() {
  const selectA = document.getElementById("compareSelectA");
  const selectB = document.getElementById("compareSelectB");
  const stage = document.getElementById("compareStage");

  function renderPhoneCard(phone) {
    const ramPct = Math.round((phone.metrics.ramVal / phone.metrics.ramMax) * 100);
    const storagePct = Math.round((phone.metrics.storageVal / phone.metrics.storageMax) * 100);
    const batteryPct = Math.round((phone.metrics.batteryVal / phone.metrics.batteryMax) * 100);

    return `
      <div class="compare-phone-card">
        <div class="compare-card-header">
          <img src="${phone.image}" alt="${phone.name}" class="compare-img-thumb">
          <div>
            <span class="badge-pill">${phone.tag}</span>
            <div class="compare-phone-name">${phone.name}</div>
            <div class="compare-phone-price">$${phone.priceMXN.toLocaleString('es-MX')} MXN</div>
          </div>
        </div>

        <div class="compare-metrics-list">
          <div class="compare-metric-row">
            <div class="compare-metric-label-row">
              <span>Memoria RAM</span>
              <strong>${phone.metrics.ramLabel}</strong>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width: ${ramPct}%;"></div></div>
          </div>

          <div class="compare-metric-row">
            <div class="compare-metric-label-row">
              <span>Almacenamiento</span>
              <strong>${phone.metrics.storageLabel}</strong>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width: ${storagePct}%;"></div></div>
          </div>

          <div class="compare-metric-row">
            <div class="compare-metric-label-row">
              <span>Batería</span>
              <strong>${phone.metrics.batteryLabel}</strong>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width: ${batteryPct}%;"></div></div>
          </div>

          <div class="compare-metric-row">
            <div class="compare-metric-label-row">
              <span>Pantalla</span>
              <strong>${phone.metrics.screenHz}</strong>
            </div>
          </div>

          <div class="compare-metric-row">
            <div class="compare-metric-label-row">
              <span>Cámara</span>
              <strong>${phone.metrics.cameraMain}</strong>
            </div>
          </div>

          <div class="compare-metric-row">
            <div class="compare-metric-label-row">
              <span>Conectividad</span>
              <strong>${phone.metrics.network}</strong>
            </div>
          </div>
        </div>

        <div class="compare-ideal-box">
          <strong style="color:var(--accent); display:block; margin-bottom:4px;">Perfil recomendado</strong>
          ${phone.idealFor}
        </div>
      </div>
    `;
  }

  function updateComparator() {
    const idA = selectA.value;
    const idB = selectB.value;
    const phoneA = COMPARATOR_MODELS.find(m => m.id === idA) || COMPARATOR_MODELS[0];
    const phoneB = COMPARATOR_MODELS.find(m => m.id === idB) || COMPARATOR_MODELS[1];

    stage.innerHTML = renderPhoneCard(phoneA) + renderPhoneCard(phoneB);
  }

  if (selectA && selectB) {
    selectA.addEventListener("change", updateComparator);
    selectB.addEventListener("change", updateComparator);
    updateComparator();
  }
}

/* ==========================================================================
   11. CALCULADORA DE CUOTAS (MXN)
   ========================================================================== */
function initCuotasCalculator() {
  const presets = document.querySelectorAll(".preset-pill");
  const priceSlider = document.getElementById("priceSlider");
  const downSlider = document.getElementById("downSlider");
  const priceDisplay = document.getElementById("priceDisplay");
  const downDisplay = document.getElementById("downDisplay");
  const maxDownLabel = document.getElementById("maxDownLabel");

  const freqButtons = document.querySelectorAll("#freqSelector .seg-btn");
  const termPillsContainer = document.getElementById("termPillsContainer");

  const calcHeroAmount = document.getElementById("calcHeroAmount");
  const calcHeroPeriod = document.getElementById("calcHeroPeriod");
  const calcHeroLabel = document.getElementById("calcHeroLabel");
  const summaryPrice = document.getElementById("summaryPrice");
  const summaryDown = document.getElementById("summaryDown");
  const summaryBalance = document.getElementById("summaryBalance");
  const calcPitchText = document.getElementById("calcPitchText");

  const termsByFreq = {
    semanal: [
      { label: "8 semanas", periods: 8 },
      { label: "12 semanas", periods: 12 },
      { label: "24 semanas", periods: 24 }
    ],
    quincenal: [
      { label: "4 quincenas", periods: 4 },
      { label: "6 quincenas", periods: 6 },
      { label: "12 quincenas", periods: 12 }
    ],
    mensual: [
      { label: "3 meses", periods: 3 },
      { label: "6 meses", periods: 6 },
      { label: "12 meses", periods: 12 }
    ]
  };

  function renderTerms(freq) {
    const list = termsByFreq[freq];
    termPillsContainer.innerHTML = list.map((item, idx) => `
      <button class="term-pill ${idx === 1 ? 'active' : ''}" data-periods="${item.periods}">
        ${item.label}
      </button>
    `).join("");

    termPillsContainer.querySelectorAll(".term-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        termPillsContainer.querySelectorAll(".term-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        State.calculator.periods = parseInt(pill.getAttribute("data-periods"));
        calculate();
      });
    });

    State.calculator.periods = list[1].periods;
  }

  function calculate() {
    let price = parseInt(priceSlider.value);
    let down = parseInt(downSlider.value);

    if (down > price) {
      down = price;
      downSlider.value = price;
    }
    downSlider.max = price;
    maxDownLabel.textContent = `Máx. $${price.toLocaleString('es-MX')} MXN`;

    const balance = Math.max(0, price - down);
    const periods = State.calculator.periods || 12;
    const cuota = periods > 0 ? Math.round(balance / periods) : 0;

    priceDisplay.textContent = `$${price.toLocaleString('es-MX')} MXN`;
    downDisplay.textContent = `$${down.toLocaleString('es-MX')} MXN`;

    summaryPrice.textContent = `$${price.toLocaleString('es-MX')} MXN`;
    summaryDown.textContent = `$${down.toLocaleString('es-MX')} MXN`;
    summaryBalance.textContent = `$${balance.toLocaleString('es-MX')} MXN`;

    calcHeroAmount.textContent = `$${cuota.toLocaleString('es-MX')} MXN`;

    const freqName = State.calculator.frequency;
    const periodLabel = freqName === "semanal" ? "por semana" : freqName === "quincenal" ? "por quincena" : "por mes";
    calcHeroPeriod.textContent = periodLabel;
    calcHeroLabel.textContent = `CUOTA ${freqName.toUpperCase()} ESTIMADA`;

    calcPitchText.textContent = `“Te llevas el equipo con $${down.toLocaleString('es-MX')} de enganche y pagos de $${cuota.toLocaleString('es-MX')} pesos ${periodLabel}.”`;
  }

  if (priceSlider) {
    priceSlider.addEventListener("input", calculate);
  }

  if (downSlider) {
    downSlider.addEventListener("input", calculate);
  }

  presets.forEach(preset => {
    preset.addEventListener("click", () => {
      presets.forEach(p => p.classList.remove("active"));
      preset.classList.add("active");
      priceSlider.value = preset.getAttribute("data-price");
      downSlider.value = preset.getAttribute("data-down");
      calculate();
    });
  });

  freqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      freqButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      State.calculator.frequency = btn.getAttribute("data-freq");
      renderTerms(State.calculator.frequency);
      calculate();
    });
  });

  renderTerms("semanal");
  calculate();
}

/* ==========================================================================
   12. MODAL / BOTTOM SHEET
   ========================================================================== */
function initModal() {
  const modal = document.getElementById("appModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

export function openModal(htmlContent) {
  const modal = document.getElementById("appModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = htmlContent;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

export function closeModal() {
  const modal = document.getElementById("appModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
