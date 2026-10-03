# 📱 Gabriela Licona — Plataforma de Capacitación Comercial Interactiva

> **"Aprende. Practica. Vende mejor."**  
> Una experiencia de aprendizaje móvil e interactiva para asesores de venta de telefonía móvil y retail. Diseñada con estética **Liquid Glass / Apple Light Mode**, transformando infografías y manuales largos en microcontenido visual y simulaciones reales.

---

## 🌟 Características Principales

1. **Explora un Teléfono (Interactive Hotspots):** Toca la cámara, pantalla 120Hz, procesador, batería 5000 mAh o antena 5G/SIM para ver qué hace cada pieza técnica y cómo explicárselo al cliente en una sola frase.
2. **Comparador Visual:** Aprende a perfilar clientes (por ejemplo, creadores de contenido o conductores) y a recomendar el equipo adecuado demostrando que más números no siempre es lo mejor.
3. **Simulador de Ventas Realista (4 Pasos):** Diálogo interactivo con un cliente ficticio, retroalimentación formativa y consejos directos de Gabriela.
4. **Simulador de Cuotas & Enganche:** Herramienta visual con sliders para cotizar financiamiento semanal/quincenal con transparencia.
5. **Glosario Visual con Búsqueda Instantánea:** Conceptos clave de conectividad, biometría, IP68, RAM y procesadores con traducción técnica ➔ comercial.
6. **Vista de Capacitadora (Panel de Gabriela):** KPIs, detección inteligente de dudas recurrentes (ej. 120Hz vs resolución) y seguimiento por sucursal.
7. **Progreso y Gamificación:** Insignias, rachas diarias y persistencia en `localStorage`.

---

## 🚀 Despliegue en Cloudflare Pages

El proyecto es **100% estático** (Vanilla HTML5, CSS3 y ES Modules), sin dependencias ni compiladores pesados.

### Opción 1: Conectar Repositorio GitHub (Automático)
1. Ve a tu panel de **Cloudflare Dashboard** ➔ **Workers & Pages** ➔ **Create application** ➔ **Pages**.
2. Conecta tu repositorio de GitHub: `https://github.com/LuisLs26/gabrielaaalic`.
3. Configuración de Build:
   - **Framework preset:** `None`
   - **Build command:** *(dejar vacío)*
   - **Build output directory:** `.` o `/` (la raíz del proyecto)
4. Haz clic en **Save and Deploy**. En 15 segundos estará en vivo en `https://gabrielaaalic.pages.dev`.

### Opción 2: Wrangler CLI
```bash
npx wrangler pages deploy . --project-name=gabriela-licona-training
```

---

## 🛠️ Dónde Personalizar Contenido

Toda la lógica y datos están desacoplados de la interfaz para facilitar su edición:

- **Nombre, Marca y Logo:** Modifica `APP_CONFIG` en [`js/data.js`](file:///c:/Users/LUIS/Desktop/PROYECTOS%20WEB/DEMO%20GABY/js/data.js).
- **Catálogo de Teléfonos (Nova Lite, Nova X1, Nova X1 Pro):** Modifica `PHONES_DATA` en [`js/data.js`](file:///c:/Users/LUIS/Desktop/PROYECTOS%20WEB/DEMO%20GABY/js/data.js).
- **Temas del Glosario y Quizzes:** Modifica `GLOSSARY_MODULES` en [`js/data.js`](file:///c:/Users/LUIS/Desktop/PROYECTOS%20WEB/DEMO%20GABY/js/data.js).
- **Escenarios de Venta:** Modifica `SALES_SIMULATION` en [`js/data.js`](file:///c:/Users/LUIS/Desktop/PROYECTOS%20WEB/DEMO%20GABY/js/data.js).
- **Métricas de Capacitadora:** Modifica `TRAINER_DASHBOARD_DATA` en [`js/data.js`](file:///c:/Users/LUIS/Desktop/PROYECTOS%20WEB/DEMO%20GABY/js/data.js).
