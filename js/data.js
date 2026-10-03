/**
 * MANUAL VISUAL DE EQUIPOS — GABRIELA LICONA
 * Datos estructurados para experiencias visuales e interactivas.
 * Filosofía: Primero ver, luego entender, y solo si se desea, leer más.
 * Sin emojis. Enfoque editorial Apple Light. Moneda: Pesos Mexicanos (MXN).
 */

export const APP_CONFIG = {
  trainerName: "Gabriela Licona",
  title: "Manual Visual de Equipos",
  subtitle: "Aprende a entenderlos. Aprende a explicarlos.",
  currency: "MXN",
  currencySymbol: "$"
};

export const CATEGORIES_NAV = [
  { id: "conectividad", name: "Conectividad", icon: "network" },
  { id: "sim-equipo", name: "SIM y Equipo", icon: "sim" },
  { id: "seguridad", name: "Seguridad e IP", icon: "shield" },
  { id: "rendimiento", name: "Rendimiento", icon: "cpu" },
  { id: "pantalla", name: "Pantalla", icon: "screen" },
  { id: "bateria", name: "Batería y Carga", icon: "battery" },
  { id: "camara", name: "Cámaras", icon: "camera" },
  { id: "explorador-equipo", name: "Conoce tu Equipo", icon: "phone" },
  { id: "comparador", name: "Comparador", icon: "compare" },
  { id: "cuotas-mxn", name: "Cuotas MXN", icon: "calc" }
];

export const CONNECTIVITY_DATA = {
  "5g": {
    name: "5G",
    badge: "Red Móvil Ultrarrápida",
    speedLabel: "Hasta 1,200 Mbps",
    concept: "Datos móviles de mayor velocidad cuando existe cobertura compatible.",
    pitch: "Con 5G puedes descargar películas y navegar a máxima velocidad en zonas con cobertura, asegurando que tu equipo esté preparado para los próximos años.",
    details: "La quinta generación de redes móviles ofrece anchos de banda muy superiores y latencias de menos de 10 milisegundos en áreas metropolitanas equipadas con antenas 5G.",
    clientDialog: {
      client: "¿Realmente necesito que mi teléfono tenga 5G hoy en día?",
      seller: "Sí, porque cada semana hay más antenas 5G. Su teléfono navegará mucho más rápido y no quedará rezagado en los próximos 3 a 4 años."
    }
  },
  "4g": {
    name: "4G / LTE",
    badge: "Red Móvil Convencional",
    speedLabel: "40 - 100 Mbps",
    concept: "Conexión móvil estable con amplia cobertura para mensajería, redes y llamadas.",
    pitch: "La red 4G es confiable en casi cualquier parte del país, ideal para WhatsApp, mapas y llamadas continuas.",
    details: "4G LTE es el estándar maduro mundial con cobertura geográfica nacional completa para transmisión de datos y llamadas VoLTE.",
    clientDialog: {
      client: "¿El 4G me sirve para ver videos y trabajar?",
      seller: "Totalmente. El 4G reproduce video en alta definición y permite enviar documentos y fotos sin ningún contratiempo."
    }
  },
  "wifi": {
    name: "Wi-Fi",
    badge: "Conexión Inalámbrica Local",
    speedLabel: "Red Hogar / Oficina",
    concept: "Conexión inalámbrica a un módem local; no consume tus datos móviles.",
    pitch: "Al conectar el teléfono al Wi-Fi de tu casa o trabajo, ahorras por completo tus datos del paquete celular.",
    details: "Los estándares Wi-Fi 5 y Wi-Fi 6 enrutan datos por frecuencias de 2.4 GHz y 5 GHz para navegación doméstica sin consumir saldo telefónico.",
    clientDialog: {
      client: "¿Si estoy en Wi-Fi se gastan mis megas de saldo?",
      seller: "No, para nada. En Wi-Fi su teléfono se conecta directamente al módem de casa u oficina y sus datos celulares se quedan intactos."
    }
  },
  "bluetooth": {
    name: "Bluetooth",
    badge: "Enlace Inalámbrico de Corto Alcance",
    speedLabel: "Hasta 10 metros",
    concept: "Conecta accesorios inalámbricos como audífonos, bocinas y relojes inteligentes.",
    pitch: "Enlaza tus audífonos sin cables, el estéreo del auto o tu reloj para escuchar música y recibir notificaciones.",
    details: "Tecnología de radiofrecuencia de 2.4 GHz diseñada para emparejar periféricos de bajo consumo de energía a distancias de hasta 10 metros.",
    clientDialog: {
      client: "¿El Bluetooth gasta mucho la batería del celular?",
      seller: "Los teléfonos modernos usan Bluetooth de bajo consumo, así que puede traer sus audífonos conectados todo el día sin agotar su batería."
    }
  }
};

export const SIM_EQUIPO_DATA = {
  sim: {
    title: "SIM Física",
    tag: "Chip Plástico Tradicional",
    oneLiner: "Tarjeta física con chip que se introduce en la bandeja lateral del equipo.",
    pitch: "Es la tarjeta clásica que compras en cualquier tienda y pasas de un teléfono a otro.",
    dialog: {
      client: "¿Qué pasa con mis contactos si cambio de SIM física?",
      seller: "Hoy en día sus contactos se respaldan en su cuenta de Google o iCloud, así que puede cambiar de SIM sin perder ningún número."
    }
  },
  esim: {
    title: "eSIM Digital",
    tag: "Chip Virtual Integrado",
    oneLiner: "Chip electrónico soldado dentro del equipo; se activa escaneando un código QR.",
    pitch: "No necesitas comprar plásticos: tu operador te manda un código QR y tu línea queda lista al instante.",
    dialog: {
      client: "¿Qué ventaja tiene la eSIM frente a la tarjeta normal?",
      seller: "Si llega a extraviar el teléfono nadie puede sacarle el chip para robarse su línea, y activa planes de viaje en el extranjero al instante."
    }
  },
  dualsim: {
    title: "Dual SIM (Dos Líneas)",
    tag: "Trabajo y Personal en 1 Celular",
    oneLiner: "Permite tener dos números telefónicos funcionando a la vez en el mismo dispositivo.",
    pitch: "Lleva tu número de trabajo y tu número personal en el mismo celular sin cargar dos teléfonos.",
    dialog: {
      client: "¿Puedo tener dos WhatsApp diferentes con Dual SIM?",
      seller: "Sí, puede tener WhatsApp personal con una línea y WhatsApp Business con la otra, todo en este mismo teléfono."
    }
  },
  imei: {
    title: "Código IMEI (15 Dígitos)",
    tag: "Identidad Única Mundial",
    oneLiner: "Número de serie exclusivo de 15 dígitos que identifica a este equipo en todo el mundo.",
    pitch: "Es como el CURP o acta de nacimiento de tu celular: sirve para hacer válida tu garantía o bloquearlo si se extravía.",
    dialog: {
      client: "¿Dónde consulto el IMEI de mi teléfono si me lo piden?",
      seller: "Solo entra a la app de teléfono, marca *#06# y de inmediato aparece en pantalla su código IMEI de 15 dígitos."
    }
  },
  so: {
    title: "Sistema Operativo",
    tag: "Android / iOS",
    oneLiner: "El software maestro que coordina las aplicaciones, la cámara y la seguridad.",
    pitch: "Es el cerebro de software que hace que tus apps favoritas funcionen de forma fácil, segura y protegida.",
    dialog: {
      client: "¿Por qué es importante actualizar el sistema operativo?",
      seller: "Las actualizaciones le dan nuevas funciones a su cámara, hacen que la batería rinda mejor y protegen sus cuentas contra virus."
    }
  }
};

export const HOTSPOTS_EXPLORER = {
  pantalla: {
    title: "Pantalla AMOLED Crystal 120 Hz",
    keyFact: '6.67" FHD+ con tasa fluida',
    oneLiner: "Panel de alta nitidez que se actualiza 120 veces por segundo con colores vivos.",
    pitch: "Al deslizar en Facebook, WhatsApp o navegar por internet todo se siente como seda, y descansa mucho más la vista bajo la luz del sol.",
    specs: "Resolución 2400 x 1080 píxeles, brillo pico de 1,200 nits, cristal templado Gorilla Glass."
  },
  camara: {
    title: "Módulo Triple con Estabilizador OIS",
    keyFact: "64 MP Principal + Estabilización Óptica",
    oneLiner: "Sensor de alta resolución que compensa el movimiento natural de la mano al disparar.",
    pitch: "Fotos claras y enfocadas a la primera, sin salir borrosas aunque camines o tomes fotos con poca luz.",
    specs: "Sensor principal 64 MP f/1.8 OIS + Gran angular 8 MP 118° + Macro 2 MP + Grabación 4K."
  },
  procesador: {
    title: "Procesador Octa-Core de 6 nm",
    keyFact: "8 Núcleos de Alto Rendimiento",
    oneLiner: "El motor central que abre aplicaciones al instante y procesa fotos con agilidad.",
    pitch: "Abre todas tus aplicaciones de inmediato sin que el teléfono se caliente ni se trabe al cambiar entre juegos y mensajes.",
    specs: "Arquitectura de 6 nanómetros, 8 núcleos (2 de alto desempeño + 6 de ahorro energético), módem 5G integrado."
  },
  bateria: {
    title: "Batería de 5000 mAh + Carga Rápida",
    keyFact: "Autonomía de día y medio + 33W Turbo",
    oneLiner: "Gran celda de energía que recupera horas de uso en unos pocos minutos conectado.",
    pitch: "Sal de casa en la mañana y regresa en la noche con batería de sobra. Si olvidaste cargarlo, en 20 minutos recuperas energía para horas.",
    specs: "Celda de polímero de litio de 5000 mAh, disipación de calor multicapa, carga inteligente a 33W."
  },
  sim: {
    title: "Bandeja Dual SIM + Soporte eSIM",
    keyFact: "2 Líneas Activas Simultáneas",
    oneLiner: "Flexibilidad total para usar dos números telefónicos en el mismo dispositivo.",
    pitch: "Maneja tu número de trabajo y tu número de casa en el mismo celular sin cargar dos equipos pesados en el bolsillo.",
    specs: "Bandeja nano-SIM doble + módulo eSIM virtual con cambio de datos y llamadas configurable."
  },
  conectividad: {
    title: "Módem 5G y Antenas Omnidireccionales",
    keyFact: "Navegación Móvil de Próxima Generación",
    oneLiner: "Antenas de alta sensibilidad para descargas ultra rápidas y llamadas estables.",
    pitch: "Descarga videos en segundos y disfruta llamadas sin cortes aun en lugares cerrados o concurridos.",
    specs: "Compatible con bandas 5G Sub-6, Wi-Fi 6 de doble banda (2.4 GHz y 5 GHz) y Bluetooth 5.3."
  }
};

export const COMPARATOR_MODELS = [
  {
    id: "nova-lite",
    name: "Nova Lite",
    image: "assets/images/phone-lite.webp",
    priceMXN: 3499,
    downPaymentMXN: 600,
    weeklyMXN: 241,
    tag: "Económico y Confiable",
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
      screenHz: "90 Hz Fluido",
      cameraMain: "50 MP Principal",
      network: "4G LTE / Dual SIM"
    },
    idealFor: "Ideal para usuarios que buscan llamadas, WhatsApp, YouTube y redes sociales con excelente batería sin gastar de más."
  },
  {
    id: "nova-x1",
    name: "Nova X1",
    image: "assets/images/phone-front.webp",
    priceMXN: 5899,
    downPaymentMXN: 1000,
    weeklyMXN: 408,
    tag: "El Más Vendido / Equilibrado",
    metrics: {
      ramVal: 8,
      ramMax: 12,
      ramLabel: "8 GB RAM",
      storageVal: 256,
      storageMax: 512,
      storageLabel: "256 GB",
      batteryVal: 5000,
      batteryMax: 6000,
      batteryLabel: "5000 mAh (33W)",
      screenHz: "120 Hz AMOLED",
      cameraMain: "64 MP con OIS Antivibración",
      network: "5G Ultra / eSIM + Dual SIM"
    },
    idealFor: "Ideal para quienes trabajan con el teléfono, manejan varias apps a la vez y quieren fotos nítidas sin gastar en gama alta."
  },
  {
    id: "nova-x1-pro",
    name: "Nova X1 Pro",
    image: "assets/images/phone-pro.webp",
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
      batteryLabel: "5200 mAh (67W Turbo)",
      screenHz: "120 Hz 1.5K HDR10+",
      cameraMain: "108 MP + Video 4K 60fps",
      network: "5G Ultra / Wi-Fi 6 / IP68"
    },
    idealFor: "Ideal para creadores de contenido, videojuegos pesados, grabación 4K y usuarios exigentes que buscan lo mejor."
  }
];
