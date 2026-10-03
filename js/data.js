/**
 * MANUAL VISUAL INTERACTIVO — GABRIELA LICONA
 * Datos enriquecidos con componentes interactivos y visuales directos.
 * Explicaciones de 1 sola frase. Cero afirmaciones técnicas dudosas.
 */

export const APP_CONFIG = {
  trainerName: "Gabriela Licona",
  title: "Manual Visual de Telefonía",
  subtitle: "Guía visual de consulta rápida para vendedores de piso",
  currency: "MXN",
  currencySymbol: "$"
};

export const CATEGORIES = [
  { id: "all", name: "Todos", count: 8 },
  { id: "rendimiento", name: "Rendimiento", count: 2 },
  { id: "pantalla", name: "Pantalla", count: 1 },
  { id: "bateria", name: "Batería y Carga", count: 2 },
  { id: "camara", name: "Cámaras", count: 1 },
  { id: "conectividad", name: "Conectividad", count: 1 },
  { id: "seguridad", name: "Seguridad e IP", count: 1 },
  { id: "sim-imei", name: "SIM e IMEI", count: 1 }
];

export const VISUAL_CARDS = [
  // 1. RAM (GRANDE / EDITORIAL)
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

  // 2. ALMACENAMIENTO (BARRA VISUAL)
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

  // 3. TASA DE REFRESCO 120 HZ (ANIMACIÓN / COMPARADOR VISUAL)
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

  // 4. BATERÍA 5000 mAh (GAUGE VISUAL)
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

  // 5. CARGA RÁPIDA (ANIMACIÓN DE BATERÍA 0-100)
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

  // 6. CÁMARAS Y ESTABILIZADOR OIS (ESQUEMA ÓPTICO)
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

  // 7. 5G Y CONECTIVIDAD
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

  // 8. CERTIFICACIÓN IP68 (AGUA Y POLVO)
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
      technicalNote: "Ingress Protection: norma internacional de hermeticidad contra sólidos (ej. 6) y líquidos (ej. 4 u 8).",
      exampleDialog: {
        client: "¿Puedo responder llamadas si está lloviendo?",
        seller: "Sí, cuenta con certificación contra salpicaduras para atender mensajes en exteriores sin riesgo."
      }
    }
  },

  // 9. DUAL SIM Y ESIM
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

export const HOTSPOTS_DATA = {
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

export const PHONES_COMPARE_DATA = [
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
