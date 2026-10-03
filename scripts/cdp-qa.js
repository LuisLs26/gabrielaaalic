// scripts/cdp-qa.js
import fs from 'fs';

async function runQA() {
  console.log("Fetching CDP targets...");
  const res = await fetch("http://localhost:9222/json");
  const targets = await res.json();
  const pageTarget = targets.find(t => t.type === 'page' && t.url.includes("localhost:8080"));

  if (!pageTarget) {
    console.error("Page target not found:", targets);
    process.exit(1);
  }

  console.log("Connecting to WebSocket:", pageTarget.webSocketDebuggerUrl);
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let idCounter = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);

  console.log("Enabling Page, Runtime, DOM...");
  await send("Page.enable");
  await send("Runtime.enable");
  await send("DOM.enable");

  // Helper to evaluate in page
  async function evalInPage(expression) {
    const res = await send("Runtime.evaluate", { expression, returnByValue: true });
    if (res.exceptionDetails) {
      throw new Error(`Eval error: ${JSON.stringify(res.exceptionDetails)}`);
    }
    return res.result?.value;
  }

  // 1. Verify Page Title & Header
  const title = await evalInPage("document.title");
  console.log("PAGE TITLE:", title);

  // 2. Check for any console errors
  const errCount = await evalInPage("window.__errors ? window.__errors.length : 0");
  console.log("Console errors detected:", errCount);

  // 3. Test Connectivity Selector
  console.log("Testing Conectividad buttons...");
  await evalInPage(`
    document.querySelector('#connSelector [data-conn="wifi"]').click();
  `);
  let wifiStatus = await evalInPage(`document.getElementById("phoneStatusText").textContent`);
  console.log("Wi-Fi status text:", wifiStatus);

  await evalInPage(`
    document.querySelector('#connSelector [data-conn="bluetooth"]').click();
  `);
  let btStatus = await evalInPage(`document.getElementById("phoneStatusText").textContent`);
  console.log("Bluetooth status text:", btStatus);

  await evalInPage(`
    document.querySelector('#connSelector [data-conn="5g"]').click();
  `);

  // 4. Test SIM tray
  console.log("Testing SIM tray insert/eject...");
  await evalInPage(`
    document.getElementById("btnToggleSimInsert").click();
  `);
  let simStatus = await evalInPage(`document.getElementById("simInsertStatus").textContent`);
  console.log("SIM Status after click:", simStatus);

  // 5. Test RAM Multitask
  console.log("Testing RAM selector...");
  await evalInPage(`
    document.querySelector('#ramSelector [data-ram="12"]').click();
  `);
  let ramLabel = await evalInPage(`document.getElementById("ramActiveLabel").textContent`);
  console.log("RAM 12GB Label:", ramLabel);

  await evalInPage(`
    document.querySelector('#ramSelector [data-ram="8"]').click();
  `);

  // 6. Test Storage Bar
  console.log("Testing Storage selector...");
  await evalInPage(`
    document.querySelector('#storageSelector [data-storage="512"]').click();
  `);
  let statPhotos = await evalInPage(`document.getElementById("statPhotos").textContent`);
  console.log("512GB Photos count:", statPhotos);

  // 7. Test Pantalla (Pulgadas & Hz)
  console.log("Testing Screen size & Hz...");
  await evalInPage(`
    document.querySelector('#screenSizeSelector [data-size="6.1"]').click();
  `);
  let diagLabel = await evalInPage(`document.getElementById("diagonalLabel").textContent`);
  console.log("6.1 Diagonal label:", diagLabel);

  // 8. Test Fast Charge Simulator
  console.log("Testing Fast Charge Simulator...");
  await evalInPage(`
    document.querySelector('#wattSelector [data-watt="67"]').click();
    document.getElementById("btnStartCharge").click();
  `);
  // wait 1.2s to observe charging progress
  await new Promise(r => setTimeout(r, 1200));
  let chargeVal = await evalInPage(`document.getElementById("chargePercentBig").textContent`);
  console.log("Charge percentage during sim:", chargeVal);

  // 9. Test Conoce tu equipo Hotspots
  console.log("Testing Hardware Hotspots...");
  await evalInPage(`
    document.querySelector('.hw-hotspot.spot-camara').click();
  `);
  let spotTitle = await evalInPage(`document.getElementById("expTitle").textContent`);
  console.log("Active hotspot title:", spotTitle);

  // 10. Test Cuotas Calculator
  console.log("Testing Simulador de Cuotas MXN...");
  await evalInPage(`
    document.getElementById("priceSlider").value = 8999;
    document.getElementById("downSlider").value = 1800;
    document.getElementById("priceSlider").dispatchEvent(new Event("input"));
    document.getElementById("downSlider").dispatchEvent(new Event("input"));
  `);
  let quote = await evalInPage(`document.getElementById("calcHeroAmount").textContent`);
  let balance = await evalInPage(`document.getElementById("summaryBalance").textContent`);
  console.log("Calculated Quote for $8,999 ($1,800 down):", quote, "Balance:", balance);

  // Test Term Frequency: Mensual
  await evalInPage(`
    document.querySelector('#freqSelector [data-freq="mensual"]').click();
  `);
  let monthlyQuote = await evalInPage(`document.getElementById("calcHeroAmount").textContent`);
  let periodLabel = await evalInPage(`document.getElementById("calcHeroPeriod").textContent`);
  console.log("Monthly Quote:", monthlyQuote, periodLabel);

  // Test protection: down payment > price
  await evalInPage(`
    document.getElementById("downSlider").value = 15000;
    document.getElementById("downSlider").dispatchEvent(new Event("input"));
  `);
  let cappedDown = await evalInPage(`document.getElementById("downSlider").value`);
  console.log("Down payment protection test (attempted 15000 on 8999 price): capped at", cappedDown);

  // 11. Test Modal Dialog
  console.log("Testing Modal Open/Close...");
  await evalInPage(`
    document.getElementById("btnExpFullDialog").click();
  `);
  let modalOpen = await evalInPage(`document.getElementById("appModal").classList.contains("open")`);
  console.log("Modal opened successfully:", modalOpen);

  // Take screenshot of Modal
  const modalScreen = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("qa-modal-open.png", Buffer.from(modalScreen.data, 'base64'));
  console.log("Captured qa-modal-open.png");

  // Close modal
  await evalInPage(`document.getElementById("modalCloseBtn").click();`);

  // 12. Scroll to and capture Conoce tu Equipo, Comparador, and Cuotas
  console.log("Capturing bottom sections...");
  await evalInPage(`document.getElementById("conoce-tu-equipo").scrollIntoView({ behavior: 'instant' });`);
  await new Promise(r => setTimeout(r, 400));
  const hwScreen = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("qa-hardware-section.png", Buffer.from(hwScreen.data, 'base64'));
  console.log("Captured qa-hardware-section.png");

  await evalInPage(`document.getElementById("comparador").scrollIntoView({ behavior: 'instant' });`);
  await new Promise(r => setTimeout(r, 400));
  const compScreen = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("qa-comparador-section.png", Buffer.from(compScreen.data, 'base64'));
  console.log("Captured qa-comparador-section.png");

  await evalInPage(`document.getElementById("cuotas-mxn").scrollIntoView({ behavior: 'instant' });`);
  await new Promise(r => setTimeout(r, 400));
  const cuotasScreen = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("qa-cuotas-section.png", Buffer.from(cuotasScreen.data, 'base64'));
  console.log("Captured qa-cuotas-section.png");

  // 13. Mobile viewport test (390 x 844)
  console.log("Testing Mobile Viewport (390 x 844)...");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await evalInPage(`window.scrollTo(0, 0);`);
  await new Promise(r => setTimeout(r, 400));

  // Open mobile drawer
  await evalInPage(`document.getElementById("mobileMenuBtn").click();`);
  await new Promise(r => setTimeout(r, 400));
  const mobileDrawerScreen = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("qa-mobile-drawer.png", Buffer.from(mobileDrawerScreen.data, 'base64'));
  console.log("Captured qa-mobile-drawer.png");

  // Close drawer
  await evalInPage(`document.getElementById("mobileNavClose").click();`);
  await new Promise(r => setTimeout(r, 400));

  // Capture mobile hero & connectivity
  const mobileHero = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("qa-mobile-hero.png", Buffer.from(mobileHero.data, 'base64'));
  console.log("Captured qa-mobile-hero.png");

  console.log("\nALL QA TESTS COMPLETED SUCCESSFULLY!");
  process.exit(0);
}

runQA().catch(err => {
  console.error("QA Error:", err);
  process.exit(1);
});
