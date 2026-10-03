# 📱 Manual Visual de Telefonía y Ventas — Gabriela Licona

> **"Aprende a explicar un celular viendo, no leyendo."**  
> Manual web interactivo y visual de consulta rápida para vendedores y asesores comerciales de retail móvil. Diseñado con estética **Apple Light Editorial**, enfocado en microcontenido gráfico, comparaciones directas y simulación de cuotas en **pesos mexicanos ($ MXN)**.

---

## 🌟 Estructura del Manual Visual

1. **Buscador Instantáneo & Filtro por Categorías:**
   - Filtro ágil por chips para localizar cualquier concepto técnico en segundos (*RAM, Almacenamiento, 120 Hz, Batería, Cámaras, 5G, IP68, SIM*).
2. **Fichas Visuales Editoriales (Ver primero, entender después):**
   - **RAM:** Comparación gráfica de apertura simultánea de apps y barras 4 GB / 8 GB / 12 GB.
   - **Almacenamiento:** Barra segmentada de capacidad (Fotos, Videos, Apps y Sistema).
   - **120 Hz:** Demostración animada de fluidez comparativa 60 Hz vs 120 Hz.
   - **Batería:** Medidor visual de 5000 mAh y autonomía de jornada completa.
   - **Carga Rápida:** Indicador de recuperación de energía (0% a 60% en 20 min).
   - **Cámaras & OIS:** Esquema de lente principal y estabilizador óptico antivibración.
   - **5G, IP68 y Dual SIM:** Fichas gráficas directas con síntesis de **1 sola frase** y bloque *"Cómo decírselo al cliente"*.
3. **Smartphone con Hotspots Interactivos:**
   - Teléfono visual con pines interactivos sobre cámara, pantalla, procesador, batería, SIM y red 5G que abren fichas flotantes inmediatas (con soporte *bottom-sheet* en móvil).
4. **Comparador Visual de Modelos:**
   - Comparación gráfica de terminales ficticios (*Nova Lite*, *Nova X1*, *Nova X1 Pro*) con barras visuales de RAM, espacio interno y batería en lugar de listas densas de texto.
5. **Simulador de Cuotas Semanales (MXN):**
   - Cotizador demostrativo con sliders para precio y enganche en pesos mexicanos, con validación automática que impide que el enganche supere el costo del equipo.

---

## 🚀 Despliegue en Cloudflare Pages

El proyecto es **100% estático** (Vanilla HTML5, CSS3 y ES Modules modernos).

1. Ingresa a tu panel de **Cloudflare Dashboard** ➔ **Workers & Pages** ➔ **Create application** ➔ **Pages**.
2. Conecta tu repositorio de GitHub: `https://github.com/LuisLs26/gabrielaaalic`.
3. Configuración:
   - **Framework preset:** `None`
   - **Build command:** *(vacío)*
   - **Build output directory:** `.` (la raíz del proyecto)
4. Haz clic en **Save and Deploy**. Estará disponible en vivo en `https://gabrielaaalic.pages.dev`.

---

## 🛠️ Personalización de Contenido

- **Textos, fichas y comparador:** Todo se edita directamente en [`js/data.js`](file:///c:/Users/LUIS/Desktop/PROYECTOS%20WEB/DEMO%20GABY/js/data.js).
- **Estilos y animaciones:** Configurados en [`css/styles.css`](file:///c:/Users/LUIS/Desktop/PROYECTOS%20WEB/DEMO%20GABY/css/styles.css).
