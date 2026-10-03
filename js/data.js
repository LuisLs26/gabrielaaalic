/**
 * MANUAL VISUAL DE EQUIPOS — GABRIELA LICONA
 * Datos estructurados para visualización interactiva.
 * Filosofía: Primero ver, luego entender, y solo si se desea, leer más.
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
  { id: "seguridad", name: "Seguridad", icon: "shield" },
  { id: "rendimiento", name: "Rendimiento", icon: "cpu" },
  { id: "pantalla", name: "Pantalla", icon: "screen" },
  { id: "bateria", name: "Batería", icon: "battery" },
  { id: "camara", name: "Cámara", icon: "camera" },
  { id: "conoce-tu-equipo", name: "Conoce el Teléfono", icon: "phone" },
  { id: "comparador", name: "Comparar", icon: "compare" },
  { id: "cuotas-mxn", name: "Cuotas MXN", icon: "calc" }
];

export const CONNECTIVITY_DATA = {
  "5g": {
    name: "5G",
    badge: "Red Móvil",
    speedLabel: "Hasta 1,200 Mbps",
    concept: "Datos móviles de mayor velocidad cuando existe cobertura compatible.",
    pitch: "Con 5G puedes tener una conexión móvil más rápida si hay cobertura en tu zona.",
    details: "Ofrece mayor velocidad de descarga y menor latencia en zonas metropolitanas con cobertura 5G activa.",
    clientDialog: {
      client: "¿En qué me beneficia que tenga 5G?",
      seller: "Si hay cobertura en tu zona, podrás navegar y descargar archivos mucho más rápido sin pausas."
    }
  },
  "4g": {
    name: "4G / LTE",
    badge: "Red Móvil",
    speedLabel: "40 - 100 Mbps",
    concept: "Conexión móvil estable con amplia cobertura para mensajería, redes y llamadas.",
    pitch: "Conexión estable para llamadas, mensajería y navegación en todo el país.",
    details: "Estándar de cobertura nacional para transmisión de datos móviles y llamadas continuas.",
    clientDialog: {
      client: "¿El 4G me sirve para trabajar y ver videos?",
      seller: "Sí, reproduce videos en alta definición y permite enviar documentos y fotos sin problemas."
    }
  },
  "wifi": {
    name: "Wi-Fi",
    badge: "Red Local",
    speedLabel: "Hogar / Oficina",
    concept: "Conexión inalámbrica a un módem local; no consume tus datos móviles.",
    pitch: "Conexión directa a un módem para navegar sin consumir datos móviles.",
    details: "Enruta la conexión a través del módem de casa o trabajo sin gastar megas de tu paquete celular.",
    clientDialog: {
      client: "¿Si me conecto a Wi-Fi se gastan mis datos?",
      seller: "No, la conexión pasa por el módem local y tu saldo de datos móviles se mantiene intacto."
    }
  },
  "bluetooth": {
    name: "Bluetooth",
    badge: "Corto Alcance",
    speedLabel: "Hasta 10 metros",
    concept: "Conecta accesorios inalámbricos como audífonos, bocinas y relojes inteligentes.",
    pitch: "Enlace inalámbrico para conectar audífonos, bocinas y relojes.",
    details: "Tecnología de corto alcance para emparejar accesorios con bajo consumo de batería.",
    clientDialog: {
      client: "¿Gasta mucha batería tener Bluetooth encendido?",
      seller: "Los teléfonos actuales usan Bluetooth de bajo consumo, así que puedes llevar tus audífonos conectados todo el día sin agotar la batería."
    }
  }
};

export const SIM_EQUIPO_DATA = {
  sim: {
    title: "SIM Física",
    tag: "Tarjeta Plástica",
    oneLiner: "Tarjeta física con chip que se introduce en la bandeja lateral del equipo.",
    pitch: "La tarjeta física tradicional para activar tu línea en el teléfono.",
    dialog: {
      client: "¿Qué pasa si cambio de SIM física?",
      seller: "Tus contactos se respaldan en tu cuenta de correo, por lo que puedes cambiar de SIM sin perder información."
    }
  },
  esim: {
    title: "eSIM Digital",
    tag: "Chip Integrado",
    oneLiner: "Chip digital integrado en el equipo; se activa escaneando un código QR.",
    pitch: "Línea digital integrada en el equipo, sin necesidad de tarjeta plástica.",
    dialog: {
      client: "¿Qué ventaja tiene la eSIM?",
      seller: "No necesitas un chip físico y nadie puede extraer la tarjeta si el equipo se extravía."
    }
  },
  dualsim: {
    title: "Dual SIM",
    tag: "Dos Líneas",
    oneLiner: "Permite tener dos números telefónicos funcionando a la vez en el mismo dispositivo.",
    pitch: "Dos números activos en el mismo equipo, ideal para separar trabajo y personal.",
    dialog: {
      client: "¿Puedo tener dos WhatsApp con Dual SIM?",
      seller: "Sí, puedes usar WhatsApp personal con una línea y WhatsApp Business con la otra en el mismo teléfono."
    }
  },
  imei: {
    title: "Código IMEI",
    tag: "Identificador Único",
    oneLiner: "Número exclusivo de 15 dígitos que identifica a este equipo.",
    pitch: "Identificador único de 15 dígitos exclusivo de este equipo.",
    dialog: {
      client: "¿Cómo consulto el IMEI si me lo solicitan?",
      seller: "Solo marcas *#06# en el teclado de llamadas y aparecerá de inmediato en pantalla."
    }
  },
  so: {
    title: "Sistema Operativo",
    tag: "Android / iOS",
    oneLiner: "El software principal que coordina las aplicaciones y la seguridad.",
    pitch: "El software que hace funcionar tus aplicaciones y la seguridad del equipo.",
    dialog: {
      client: "¿Por qué conviene mantener actualizado el sistema operativo?",
      seller: "Mejora el rendimiento de la batería, agrega funciones a la cámara y mantiene seguras tus aplicaciones."
    }
  }
};

export const HOTSPOTS_EXPLORER = {
  pantalla: {
    title: "Pantalla AMOLED Crystal 120 Hz",
    keyFact: '6.67" FHD+ fluida',
    oneLiner: "Panel nítido con actualización a 120 Hz para movimientos fluidos.",
    pitch: "Al deslizar menús o redes sociales todo se mueve con suavidad y descansa la vista.",
    specs: "Resolución FHD+ (2400 x 1080), panel AMOLED de alto brillo y cristal reforzado."
  },
  camara: {
    title: "Cámara Principal con Estabilizador OIS",
    keyFact: "64 MP + Estabilización Óptica",
    oneLiner: "Sensor de alta resolución que compensa el movimiento natural de la mano.",
    pitch: "Fotos nítidas y enfocadas, evitando que salgan borrosas si te mueves al disparar.",
    specs: "Sensor principal 64 MP con OIS, lente gran angular y grabación de video en alta definición."
  },
  procesador: {
    title: "Procesador Octa-Core de 6 nm",
    keyFact: "8 Núcleos",
    oneLiner: "El motor central que ejecuta las aplicaciones y tareas del equipo.",
    pitch: "Abre tus aplicaciones de inmediato sin que el teléfono se caliente ni se trabe.",
    specs: "Arquitectura de 6 nanómetros, 8 núcleos de procesamiento y módem de red integrado."
  },
  bateria: {
    title: "Batería de 5000 mAh + Carga Rápida",
    keyFact: "5000 mAh + 33W",
    oneLiner: "Capacidad de energía para todo el día y recarga rápida.",
    pitch: "Uso continuo durante el día y recarga rápida en pocos minutos.",
    specs: "Capacidad de 5000 mAh de polímero de litio con soporte para carga rápida."
  },
  sim: {
    title: "Bandeja Dual SIM + eSIM",
    keyFact: "Dos Líneas Activas",
    oneLiner: "Soporte para dos números en un mismo dispositivo.",
    pitch: "Lleva tu línea de trabajo y la personal en el mismo teléfono.",
    specs: "Bandeja para chip físico y módulo para chip digital eSIM."
  },
  conectividad: {
    title: "Módem 5G y Antenas",
    keyFact: "Alta Velocidad",
    oneLiner: "Recepción de señal para llamadas estables y navegación rápida.",
    pitch: "Descargas rápidas y conexión estable en llamadas y navegación.",
    specs: "Bandas 5G, Wi-Fi de doble frecuencia y Bluetooth de bajo consumo."
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
    tag: "Uso Básico",
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
    idealFor: "Llamadas, WhatsApp, navegación y redes sociales con presupuesto accesible."
  },
  {
    id: "nova-x1",
    name: "Nova X1",
    image: "assets/images/phone-front.webp",
    priceMXN: 5899,
    downPaymentMXN: 1000,
    weeklyMXN: 408,
    tag: "Equilibrado",
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
      cameraMain: "64 MP con OIS",
      network: "5G / eSIM + Dual SIM"
    },
    idealFor: "Multitarea ágil, trabajo diario y fotos nítidas con estabilización."
  },
  {
    id: "nova-x1-pro",
    name: "Nova X1 Pro",
    image: "assets/images/phone-pro.webp",
    priceMXN: 8999,
    downPaymentMXN: 1800,
    weeklyMXN: 600,
    tag: "Alto Rendimiento",
    metrics: {
      ramVal: 12,
      ramMax: 12,
      ramLabel: "12 GB RAM",
      storageVal: 512,
      storageMax: 512,
      storageLabel: "512 GB",
      batteryVal: 5200,
      batteryMax: 6000,
      batteryLabel: "5200 mAh (67W)",
      screenHz: "120 Hz 1.5K",
      cameraMain: "108 MP + Video 4K",
      network: "5G / Wi-Fi 6 / IP68"
    },
    idealFor: "Videojuegos, creación de contenido en 4K y recarga ultrarrápida."
  }
];
