# 📱 Manual Visual de Equipos — Gabriela Licona

> **“Aprende a entenderlos. Aprende a explicarlos.”**  
> Manual web visual e interactivo de alto impacto diseñado para capacitar asesores y vendedores de telefonía móvil.  
> Cero bloques de texto innecesarios. Sin emojis. Estética editorial **Apple Light**, enfocado en aprender viendo, tocando, deslizando y comparando.

---

## 🎯 Filosofía Pedagógica
1. **Primero ver:** Simulaciones gráficas, movimientos reales, animaciones útiles y objetos interactivos.
2. **Después entender:** Frases claras de máximo 15 a 30 palabras sin tecnicismos oscuros.
3. **Y solo si se desea, leer más:** Ejemplos de diálogos directos con el cliente y notas técnicas ocultos en modales y drawers táctiles (*bottom-sheet*).

---

## 🛠️ Experiencias Visuales e Interactivas

### 1. Conectividad (Escena Interactiva)
- **Centro:** Smartphone reactivo con indicador de red y velocímetro dinámico.
- **Entorno:** Antenas 5G y 4G LTE, router Wi-Fi y accesorios Bluetooth (audífonos, reloj, bocina).
- **Interacción:** Al conmutar entre 5G, 4G, Wi-Fi o Bluetooth, se visualizan las ondas de radio correspondientes y la velocidad en Mbps.
- **Argumento de Venta:** Desplegable con la traducción exacta para el cliente en piso de venta.

### 2. SIM y Equipo
- **SIM Física:** Animación con bandeja lateral retráctil y botón para insertar o expulsar la nano-SIM.
- **eSIM Digital:** El chip físico desaparece y se activa un microchip luminoso soldado en la placa madre mediante código QR.
- **Dual SIM:** Pantalla de celular gestionando dos líneas en paralelo (Personal y Trabajo) para llamadas y datos 5G.
- **Código IMEI:** Cédula de identidad mundial con código de barras y botón para simular el marcado universal `*#06#`.
- **Sistema Operativo:** Visual interactivo de capas (Android vs iOS) coordinando aplicaciones, seguridad y hardware.

### 3. Seguridad y Resistencia
- **Biometría en Vivo:** Teléfono bloqueado con candado. Permite probar desbloqueo por **Huella digital** (sensor táctil) o **Reconocimiento facial** (malla 3D Face ID).
- **Cámara de Prueba IP:** Simulador de partículas de polvo y gotas de agua en suspensión con escudo protector para **IP54** (salpicaduras) e **IP68** (inmersión en agua dulce).

### 4. Rendimiento y Memoria
- **Memoria RAM (Multitarea):** Selector 4 GB, 8 GB y 12 GB. El celular muestra en vivo cuántas apps pueden permanecer abiertas simultáneamente sin cerrarse ni recargar.
- **Almacenamiento Interno:** Barra gigante segmentada en tiempo real (Fotos, Videos, Apps y Sistema) con contadores precisos para 128 GB, 256 GB y 512 GB.
- **Procesador (El Motor):** Chip Octa-Core de 6 nm con activación de rutas hacia Apertura de Apps, Cámara (ISP), Juegos 3D (GPU) e Inteligencia Artificial (NPU).

### 5. Pantalla y Fluidez
- **Pulgadas:** Medición diagonal en tiempo real (6.1", 6.5" y 6.7") con redimensionamiento físico del smartphone y alcance con una mano.
- **Resolución:** Fotografía de prueba con deslizador interactivo entre resolución baja (720p HD) y Full HD+ cristalino.
- **Píxel con Zoom Extremo:** Acercamiento a nivel microscópico que revela la cuadrícula de subpíxeles Rojo, Verde y Azul (RGB).
- **Tasa de Refresco (60 Hz vs 120 Hz):** Comparativa en vivo de fluidez visual con selector de frecuencia (60, 90 y 120 Hz).

### 6. Batería y Carga Rápida
- **Capacidad en mAh:** Tanque de energía gigante con ajuste de volumen para 4000, 5000 y 6000 mAh.
- **Simulador de Carga Rápida:** Cronómetro y porcentaje en vivo (0% a 100%) según la potencia seleccionada (18W, 33W y 67W Turbo).

### 7. Cámaras y Megapíxeles
- **Módulo Óptico:** Exploración del lente principal con estabilizador óptico antivibración (OIS) y cámara frontal para selfies.
- **Megapíxeles en la Práctica:** Demostración con fotografía real de alta resolución y recorte digital (*crop zoom*), explicando por qué más megapíxeles no siempre significan mejor calidad por sí solos.

### 8. Conoce tu Equipo (Explorador con Hotspots)
- Smartphone protagonista con hotspots de pulso suave sobre Pantalla, Cámara, Procesador, Batería, SIM y 5G.
- Al tocar cada punto, se actualiza el panel con la función técnica y el argumento de venta para el cliente.

### 9. Comparador Visual de Equipos
- Comparación frente a frente entre 3 modelos (*Nova Lite*, *Nova X1*, *Nova X1 Pro*).
- Barras gráficas de RAM, almacenamiento y batería en lugar de tablas aburridas, con badge de *"¿Para quién es ideal?"*.

### 10. Simulador de Cuotas en Pesos Mexicanos (MXN)
- Presets rápidos y sliders en vivo para Precio y Enganche inicial.
- **Protección de negocio:** El enganche jamás puede superar el precio del equipo.
- Modalidades de pago: Semanal (8, 12, 24 sem), Quincenal (4, 6, 12 quinc) o Mensual (3, 6, 12 meses).
- Cálculo instantáneo en pesos mexicanos: `$ XXX MXN por periodo` con desglose de saldo a financiar y argumento de piso.

---

## 💻 Arquitectura Técnica
- **100% Estático y Modular:** HTML5 semántico, CSS3 moderno con variables y animaciones nativas, y JavaScript Vanilla ES6 modular.
- **Sin Dependencias Pesadas:** Carga ultrarrápida, sin Node ni bundlers obligatorios.
- **Imágenes Locales Optimizadas:** Guardadas en `assets/images/` para total autonomía.
- **Totalmente Adaptable (Responsive):** Probado y optimizado en móviles (390px, 430px), tablets (768px) y escritorios (1366px, 1920px). En móvil, los diálogos se abren como elegantes *bottom-sheets*.

---

## 🚀 Despliegue en Cloudflare Pages / GitHub Pages
El proyecto puede ejecutarse abriendo directamente `index.html` en un servidor local (por ejemplo con `npx serve .` o la extensión Live Server), o desplegándose en Cloudflare Pages configurando el directorio raíz como salida de build.
