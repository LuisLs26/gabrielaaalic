/**
 * MANUAL VISUAL INTERACTIVO — GABRIELA LICONA
 * Microfichas visuales, síntesis técnica a 1 frase y traducción directa al cliente en MXN ($).
 */

export const APP_CONFIG = {
  trainerName: "Gabriela Licona",
  title: "Manual Visual de Telefonía y Ventas",
  subtitle: "Guía interactiva de consulta rápida para piso de venta",
  currency: "MXN",
  currencySymbol: "$"
};

export const CATEGORIES = [
  { id: "conectividad", name: "Conectividad", icon: "antenna", count: 3 },
  { id: "rendimiento", name: "Rendimiento y Memoria", icon: "cpu", count: 3 },
  { id: "pantalla", name: "Pantalla y Frecuencia", icon: "display", count: 2 },
  { id: "bateria", name: "Batería y Carga", icon: "battery", count: 2 },
  { id: "camara", name: "Cámaras y Óptica", icon: "camera", count: 2 },
  { id: "seguridad", name: "Seguridad y Protección", icon: "shield", count: 2 },
  { id: "sim-imei", name: "SIM, eSIM e IMEI", icon: "sim", count: 2 },
  { id: "cuotas", name: "Venta a Cuotas", icon: "calculator", count: 1 }
];

export const VISUAL_CARDS = [
  // CONECTIVIDAD
  {
    id: "5g-red",
    category: "conectividad",
    title: "5G vs 4G LTE",
    subtitle: "Velocidad de red de última generación",
    badge: "Red Móvil",
    visualType: "network-speed",
    visualHighlight: "Hasta 10x más rápido",
    techSummary: "Red de alta velocidad con latencia menor a 5 milisegundos para descarga y transmisión continua.",
    clientPitch: "Descargas instantáneas, videos en máxima definición sin pausas y videollamadas fluidas incluso en lugares concurridos.",
    salesSnippet: {
      question: "¿Me sirve el 5G hoy?",
      answer: "Sí, navega al triple de velocidad al ver videos o descargar archivos y asegura que su equipo no quede obsoleto en los próximos años."
    }
  },
  {
    id: "wifi-6",
    category: "conectividad",
    title: "Wi-Fi y Redes Locales",
    subtitle: "Navegación de alta velocidad en interiores",
    badge: "Inalámbrico",
    visualType: "wifi-signal",
    visualHighlight: "2.4 GHz + 5 GHz",
    techSummary: "Conexión a redes residenciales y empresariales con mayor alcance y estabilidad de transferencia.",
    clientPitch: "Aprovecha al máximo el internet de su casa o trabajo para navegar a máxima velocidad sin gastar sus datos celulares.",
    salesSnippet: {
      question: "¿Se conecta fácil al módem?",
      answer: "Se conecta automáticamente a la banda más rápida de su casa para que nunca se interrumpan sus descargas o llamadas."
    }
  },
  {
    id: "bluetooth",
    category: "conectividad",
    title: "Bluetooth 5.3",
    subtitle: "Enlace inalámbrico para accesorios",
    badge: "Audio y Manos Libres",
    visualType: "bluetooth-link",
    visualHighlight: "Alcance 10m sin cortes",
    techSummary: "Protocolo de corto alcance de bajo consumo energético para audífonos, relojes y audio vehicular.",
    clientPitch: "Enlaza audífonos inalámbricos, el auto o bocinas al instante y sin cables estorbosos.",
    salesSnippet: {
      question: "¿Gastará mucha batería usar audífonos Bluetooth?",
      answer: "No, la versión actual de Bluetooth consume un mínimo de energía y la conexión es automática e inmediata."
    }
  },

  // RENDIMIENTO Y MEMORIA
  {
    id: "ram",
    category: "rendimiento",
    title: "Memoria RAM (4 GB vs 8 GB vs 12 GB)",
    subtitle: "Capacidad para múltiples aplicaciones abiertas",
    badge: "Fluidez Operativa",
    visualType: "ram-meter",
    visualHighlight: "Mesa de Trabajo Multitarea",
    techSummary: "Memoria de acceso ultrarrápido donde se mantienen activas las apps en segundo plano.",
    clientPitch: "Es como el tamaño de su escritorio: con 8 GB o más puede abrir WhatsApp, Facebook y mapas a la vez sin que el teléfono se alente.",
    salesSnippet: {
      question: "¿Por qué me conviene tener 8 GB en lugar de 4 GB?",
      answer: "Con 8 GB puede cambiar entre varias aplicaciones al instante sin que se cierren o tenga que esperar a que vuelvan a cargar."
    }
  },
  {
    id: "storage",
    category: "rendimiento",
    title: "Almacenamiento (128 GB vs 256 GB)",
    subtitle: "Espacio para fotos, videos y aplicaciones",
    badge: "Capacidad de Archivos",
    visualType: "storage-bar",
    visualHighlight: "Más de 60,000 fotos",
    techSummary: "Unidad interna no volátil donde se guardan de forma permanente fotos, audios, documentos y el sistema.",
    clientPitch: "Es el cajón de recuerdos: con 256 GB guarda miles de fotos familiares, videos y audios sin recibir el molesto aviso de 'Memoria Llena'.",
    salesSnippet: {
      question: "¿Vale la pena pagar por 256 GB?",
      answer: "Sí, le da tranquilidad por años sin tener que estar borrando fotos ni aplicaciones cada semana para liberar espacio."
    }
  },
  {
    id: "processor",
    category: "rendimiento",
    title: "Procesador Central (SoC)",
    subtitle: "El cerebro y motor del teléfono",
    badge: "Velocidad y Agilidad",
    visualType: "cpu-chip",
    visualHighlight: "Arquitectura 8 Núcleos",
    techSummary: "Chip central que coordina todas las órdenes, procesa fotos al instante y optimiza la batería.",
    clientPitch: "Es el motor del equipo: hace que el teléfono responda de inmediato al tocarlo y tome fotos con colores vivos sin calentarse.",
    salesSnippet: {
      question: "¿Qué significa que sea de 8 núcleos?",
      answer: "Significa que se reparten el trabajo: unos núcleos ahorran batería en reposo y otros entran en acción al abrir juegos o editar videos."
    }
  },

  // PANTALLA
  {
    id: "refresh-rate",
    category: "pantalla",
    title: "Tasa de Refresco: 120 Hz vs 60 Hz",
    subtitle: "Sensación de suavidad extrema al deslizar",
    badge: "Fluidez Visual",
    visualType: "hz-comparison",
    visualHighlight: "120 Cuadros por segundo",
    techSummary: "Frecuencia con que la pantalla actualiza la imagen por segundo (60 veces vs 120 veces).",
    clientPitch: "Al deslizar en redes sociales, páginas web o menús, todo se mueve ultra suave como mantequilla, sin saltos ni cansancio para la vista.",
    salesSnippet: {
      question: "¿Se nota realmente el cambio a 120 Hz?",
      answer: "Al deslizar el dedo en la pantalla el texto no se borra ni brinca; la vista descansa mucho más al leer contenido largo."
    }
  },
  {
    id: "screen-amoled",
    category: "pantalla",
    title: "Pantalla AMOLED y Resolución FHD+",
    subtitle: "Colores vivos y negros puros",
    badge: "Calidad de Imagen",
    visualType: "display-pixels",
    visualHighlight: "Claridad Tipo Cine",
    techSummary: "Tecnología de píxeles autoiluminados con alto contraste y resolución de alta nitidez.",
    clientPitch: "Permite ver series, fotos y videos con colores intensos y letras nítidas, viéndose con total claridad incluso bajo el sol de la calle.",
    salesSnippet: {
      question: "¿Se ve bien en exteriores con mucha luz?",
      answer: "Sí, el panel AMOLED ofrece brillo superior para leer mensajes bajo la luz directa del sol sin forzar la vista."
    }
  },

  // BATERÍA
  {
    id: "battery-capacity",
    category: "batería",
    title: "Capacidad de Batería (5000 mAh)",
    subtitle: "Autonomía para toda la jornada",
    badge: "Duración de Energía",
    visualType: "battery-level",
    visualHighlight: "Más de 24 horas de uso",
    techSummary: "Capacidad de reserva eléctrica de la celda medida en miliamperios-hora.",
    clientPitch: "Es como tener un tanque de gasolina grande: sale por la mañana y regresa en la noche con batería de sobra sin andar buscando cargadores.",
    salesSnippet: {
      question: "¿Me va a durar el día completo?",
      answer: "Con 5000 mAh está diseñado para darle más de 24 horas de uso continuo entre llamadas, WhatsApp y navegación."
    }
  },
  {
    id: "fast-charging",
    category: "batería",
    title: "Carga Rápida (33W a 67W)",
    subtitle: "Horas de energía en minutos",
    badge: "Velocidad de Carga",
    visualType: "charging-bolt",
    visualHighlight: "50% en 18 minutos",
    techSummary: "Entrega de alta potencia eléctrica que llena la batería en una fracción del tiempo habitual.",
    clientPitch: "Con solo conectarlo 15 o 20 minutos mientras se baña o desayuna, obtiene batería para varias horas de uso.",
    salesSnippet: {
      question: "Siempre olvido cargar el celular en la noche, ¿qué hago?",
      answer: "Con la carga rápida incluida, en lo que se prepara antes de salir de casa ya recuperó más del 60% de batería."
    }
  },

  // CÁMARAS
  {
    id: "camera-megapixels",
    category: "cámara",
    title: "Megapíxeles (MP) y Sensores",
    subtitle: "Nivel de detalle y recorte de fotos",
    badge: "Fotografía y Zoom",
    visualType: "camera-sensor",
    visualHighlight: "50 MP a 108 MP",
    techSummary: "Cantidad de millones de puntos que capturan la imagen, permitiendo ampliaciones sin pérdida de nitidez.",
    clientPitch: "Le permite tomar fotos con tanto detalle que puede hacer zoom o recortar a una persona sin que la foto se vea borrosa.",
    salesSnippet: {
      question: "¿Tener más megapíxeles significa mejores fotos de noche?",
      answer: "Los megapíxeles dan detalle para recortar, pero el sensor grande y el modo noche son los que logran fotos claras con poca luz."
    }
  },
  {
    id: "ois-stabilizer",
    category: "cámara",
    title: "Estabilización Óptica (OIS)",
    subtitle: "Fotos y videos sin movimiento borroso",
    badge: "Nitidez en Movimiento",
    visualType: "stabilizer-gyro",
    visualHighlight: "Cero fotos movidas",
    techSummary: "Mecanismo físico que compensa el pulso de la mano mediante microgiroscopios.",
    clientPitch: "Evita que las fotos salgan borrosas o movidas cuando los niños no se quedan quietos o usted camina grabando un video.",
    salesSnippet: {
      question: "¿Por qué me salían borrosas las fotos en mi celular anterior?",
      answer: "Porque no tenía estabilizador; este equipo compensa el pulso de su mano para que cada toma salga enfocada a la primera."
    }
  },

  // SEGURIDAD
  {
    id: "ip-rating",
    category: "seguridad",
    title: "Protección IP (IP54 vs IP68)",
    subtitle: "Resistencia al agua, lluvia y polvo",
    badge: "Durabilidad",
    visualType: "water-shield",
    visualHighlight: "Resistente a salpicaduras y lluvia",
    techSummary: "Norma internacional de sellado contra polvo y líquidos (IP54 = salpicaduras, IP68 = inmersión en agua dulce).",
    clientPitch: "Le da tranquilidad si le agarra la lluvia en la calle o si se le derrama un vaso de agua encima, el equipo sigue funcionando sin dañarse.",
    salesSnippet: {
      question: "¿Puedo contestar llamadas bajo la lluvia?",
      answer: "Sí, cuenta con certificación contra salpicaduras para atender mensajes o llamadas en la intemperie sin riesgo."
    }
  },
  {
    id: "biometrics",
    category: "seguridad",
    title: "Huella Dactilar y Reconocimiento Facial",
    subtitle: "Desbloqueo seguro en 1 segundo",
    badge: "Protección de Apps",
    visualType: "fingerprint-scan",
    visualHighlight: "Acceso instantáneo y privado",
    techSummary: "Sensores biométricos que protegen el acceso al sistema y aplicaciones bancarias sin escribir contraseñas.",
    clientPitch: "Desbloquea el teléfono con solo tocarlo o mirarlo, manteniendo sus chats y cuentas del banco 100% protegidas contra extraños.",
    salesSnippet: {
      question: "¿Es seguro para entrar a mi app del banco?",
      answer: "Es el método más seguro que existe: nadie puede duplicar su huella y evita tener que teclear claves en lugares públicos."
    }
  },

  // SIM Y EQUIPO
  {
    id: "dual-sim-esim",
    category: "sim-imei",
    title: "Dual SIM y eSIM",
    subtitle: "Dos líneas telefónicas en un solo equipo",
    badge: "Negocio y Personal",
    visualType: "dual-cards",
    visualHighlight: "2 Números Activos",
    techSummary: "Capacidad para operar dos líneas de forma simultánea mediante dos chips físicos o un chip virtual integrado (eSIM).",
    clientPitch: "Le permite llevar su número de trabajo y su número personal en el mismo celular, sin cargar dos teléfonos pesados.",
    salesSnippet: {
      question: "¿Puedo recibir WhatsApp de mis clientes y de mi familia por separado?",
      answer: "Sí, maneja ambas líneas a la vez y puede asignar timbres y contactos independientes para cada número."
    }
  },
  {
    id: "imei-code",
    category: "sim-imei",
    title: "Código IMEI del Dispositivo",
    subtitle: "La cédula de identidad del celular",
    badge: "Garantía y Seguridad",
    visualType: "imei-barcode",
    visualHighlight: "15 Dígitos Únicos",
    techSummary: "Número de serie global irrepetible que identifica el terminal ante operadores de telefonía.",
    clientPitch: "Es como la placa o CURP única de su celular: sirve para hacer válida su garantía y para bloquearlo de inmediato si llega a extraviarse.",
    salesSnippet: {
      question: "¿Para qué me sirve anotar el IMEI de la caja?",
      answer: "Es su respaldo de propiedad: con ese número la compañía telefónica puede bloquear el equipo si se le pierde."
    }
  }
];

export const PHONES_COMPARISON = [
  {
    id: "nova-lite",
    name: "Nova Lite",
    priceMXN: 3499,
    downPaymentMXN: 600,
    weeklyMXN: 241,
    tag: "Económico y Rendidor",
    specs: {
      screen: '6.5" HD+ (90 Hz)',
      ramStorage: "4 GB RAM + 128 GB",
      camera: "50 MP Principal",
      battery: "5000 mAh (15W)",
      network: "4G LTE / Dual SIM"
    },
    idealFor: "Llamadas, WhatsApp, navegación y uso diario sin gastar de más."
  },
  {
    id: "nova-x1",
    name: "Nova X1",
    priceMXN: 5899,
    downPaymentMXN: 1000,
    weeklyMXN: 408,
    tag: "El Más Vendido",
    specs: {
      screen: '6.67" AMOLED (120 Hz)',
      ramStorage: "8 GB RAM + 256 GB",
      camera: "64 MP con OIS (Estabilizador)",
      battery: "5000 mAh (33W Turbo)",
      network: "5G Red Rápida / eSIM"
    },
    idealFor: "Multitarea fluida, redes sociales intensivas, trabajo y fotos nítidas."
  },
  {
    id: "nova-x1-pro",
    name: "Nova X1 Pro",
    priceMXN: 8999,
    downPaymentMXN: 1800,
    weeklyMXN: 600,
    tag: "Máxima Potencia",
    specs: {
      screen: '6.78" 1.5K AMOLED (120 Hz)',
      ramStorage: "12 GB RAM + 512 GB",
      camera: "108 MP + Video 4K Frontal",
      battery: "5200 mAh (67W Ultra Carga)",
      network: "5G Ultra / Wi-Fi 6 / IP68"
    },
    idealFor: "Creadores de video, fotografía profesional y máxima velocidad."
  }
];

export const HOTSPOTS_MAP = {
  screen: {
    title: "Pantalla AMOLED 120 Hz",
    tech: "Panel Full HD+ de 6.67\" con 120 cuadros por segundo.",
    clientPitch: "Al deslizar en redes o documentos todo se siente ultra suave, sin saltos ni cansancio para la vista.",
    keyTip: "Demuestre la fluidez deslizando el menú frente al cliente."
  },
  camera: {
    title: "Cámara 64 MP con Estabilizador OIS",
    tech: "Sensor de alta resolución con estabilización óptica física.",
    clientPitch: "Fotos y videos nítidos que no salen movidos ni borrosos aunque le tiemble el pulso.",
    keyTip: "Muestre cómo el estabilizador evita fotos borrosas en interiores."
  },
  processor: {
    title: "Procesador Octa-Core 5G",
    tech: "Chipset de 8 núcleos en 6 nanómetros con módem 5G.",
    clientPitch: "Es el motor del teléfono: abre aplicaciones al instante y navega a máxima velocidad.",
    keyTip: "Asocie procesador con rapidez de respuesta inmediata."
  },
  battery: {
    title: "Batería 5000 mAh + Carga Rápida",
    tech: "Celda de polímero de 5000 mAh con carga de 33W.",
    clientPitch: "Batería para todo el día y horas de uso con solo 20 minutos de carga.",
    keyTip: "Destaque la tranquilidad de no buscar cargador a mitad del día."
  },
  storage: {
    title: "Memoria RAM 8GB + 256GB Almacenamiento",
    tech: "8 GB RAM física y 256 GB de memoria flash interna.",
    clientPitch: "Abra decenas de apps sin que se trabe y guarde miles de fotos sin borrar nada.",
    keyTip: "Enfatice el fin del aviso de 'Almacenamiento casi lleno'."
  },
  network: {
    title: "Conectividad 5G y Dual SIM",
    tech: "Antenas 5G multinivel y soporte para dos líneas telefónicas.",
    clientPitch: "Descargas instantáneas y dos números (personal y de trabajo) en un solo teléfono.",
    keyTip: "Ideal para comerciantes que manejan WhatsApp de ventas."
  }
};
