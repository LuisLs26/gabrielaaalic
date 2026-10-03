/**
 * CONFIGURACIÓN CENTRALIZADA E IDENTIDAD PROFESIONAL
 * Sin emojis, lenguaje corporativo de alta gama, arquitectura desacoplada.
 */

export const APP_CONFIG = {
  trainerName: "Gabriela Licona",
  trainerTitle: "Capacitación Comercial",
  appName: "Gabriela Licona",
  badge: "Programa de Entrenamiento Comercial",
  tagline: "Capacitación Técnica y Argumentación de Ventas",
  currencySymbol: "$",
  defaultCurrencyCode: "MXN",
  companyName: "Retail Móvil"
};

export const PHONES_DATA = [
  {
    id: "nova-lite",
    name: "Nova Lite",
    category: "Gama de Entrada",
    price: 3499,
    badge: "Eficiencia y Autonomía",
    color: "Plata Niebla",
    specs: {
      ram: "4 GB LPDDR4X",
      storage: "128 GB (Expandible a 1 TB)",
      processor: "Octa-Core 2.0 GHz",
      screen: '6.5" HD+ IPS (90 Hz)',
      refreshRate: "90 Hz",
      battery: "5000 mAh",
      charging: "15W Carga Inteligente",
      cameraMain: "50 MP con IA",
      cameraFront: "8 MP",
      connectivity: "4G LTE / Dual SIM",
      security: "Sensor lateral de huella",
      protection: "IP52 (Resistencia a salpicaduras)"
    },
    pitch: "Equipo enfocado en usuarios que priorizan duración de batería durante toda la jornada, mensajería constante y navegación confiable sin exceder presupuesto.",
    idealFor: "Uso diario, estudiantes, mensajería operativa y aplicaciones de transporte.",
    highlights: ["Batería 5000 mAh", "Almacenamiento 128 GB expandible", "Costo-beneficio"]
  },
  {
    id: "nova-x1",
    name: "Nova X1",
    category: "Gama Media Balanceada",
    price: 5899,
    badge: "Mayor Demanda",
    color: "Azul Titanio",
    specs: {
      ram: "8 GB + 4 GB RAM Dinámica",
      storage: "256 GB UFS 2.2",
      processor: "Snapdragon 695 5G (6 nm)",
      screen: '6.67" FHD+ AMOLED',
      refreshRate: "120 Hz",
      battery: "5000 mAh",
      charging: "33W TurboCharge",
      cameraMain: "64 MP con OIS (Estabilización Óptica)",
      cameraFront: "16 MP HDR",
      connectivity: "5G Red Móvil / Dual SIM + eSIM",
      security: "Sensor biométrico óptico en pantalla",
      protection: "IP54 (Protección contra polvo y lluvia ligera)"
    },
    pitch: "Recomendado para clientes que manejan múltiples aplicaciones simultáneas, redes sociales y contenido multimedia sin experimentar caídas de rendimiento.",
    idealFor: "Profesionales, ventas, usuarios activos de redes sociales y consumo multimedia continuo.",
    highlights: ["Pantalla AMOLED 120 Hz", "8 GB RAM con 256 GB", "Conectividad 5G"]
  },
  {
    id: "nova-x1-pro",
    name: "Nova X1 Pro",
    category: "Gama Alta Premium",
    price: 8999,
    badge: "Alto Desempeño",
    color: "Negro Obsidiana",
    specs: {
      ram: "12 GB LPDDR5",
      storage: "512 GB UFS 3.1",
      processor: "Dimensity 8300 Ultra (4 nm)",
      screen: '6.78" 1.5K Crystal AMOLED',
      refreshRate: "120 Hz Adaptable (LTPO)",
      battery: "5200 mAh",
      charging: "67W Ultra Charge (0 a 100% en 38 min)",
      cameraMain: "108 MP Sensor Grande + Ultra Gran Angular",
      cameraFront: "32 MP Grabación 4K",
      connectivity: "5G Banda Dual / Wi-Fi 6 / eSIM",
      security: "Sensor biométrico de respuesta instantánea",
      protection: "IP68 (Protección completa contra inmersión y polvo)"
    },
    pitch: "Diseñado para clientes que demandan máxima calidad fotográfica, grabación de video en alta definición y tiempos de recarga mínimos.",
    idealFor: "Creadores de contenido, fotografía, edición y usuarios con alta exigencia tecnológica.",
    highlights: ["Cámara 108 MP OIS", "Carga 67W", "Certificación IP68"]
  }
];

export const GLOSSARY_MODULES = [
  {
    id: "conectividad",
    title: "Conectividad y Redes",
    icon: "antenna",
    description: "Tecnologías de transmisión de datos móviles e inalámbricas.",
    items: [
      {
        id: "5g",
        term: "Redes 5G vs 4G LTE",
        badge: "Red Móvil",
        technical: "Quinta generación de tecnología de comunicación inalámbrica. Proporciona tasas de transferencia de datos de alta velocidad y latencia inferior a 5 milisegundos.",
        clientExplanation: "Garantiza descargas casi instantáneas, reproducción de video en máxima resolución sin pausas y estabilidad en zonas de alta concentración de usuarios.",
        salesExample: {
          client: "¿Qué beneficio práctico obtengo con un equipo 5G frente a mi 4G actual?",
          seller: "El equipo 5G le asegura una navegación considerablemente más rápida al descargar archivos y ver transmisiones, además de mantener su inversión vigente ante la expansión de la infraestructura de los operadores."
        },
        microQuiz: {
          question: "¿Cuál es el beneficio directo para el usuario al adoptar tecnología 5G?",
          options: [
            "Aumento en el espectro de frecuencias físicas de radio",
            "Mayor velocidad de transferencia y menor tiempo de respuesta al cargar contenido",
            "Duplicación del rendimiento de la celda de batería"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. La velocidad de transferencia y la baja latencia son las ventajas perceptibles de inmediato para el cliente."
        }
      },
      {
        id: "wifi-bluetooth",
        term: "Wi-Fi y Bluetooth",
        badge: "Inalámbrico",
        technical: "Protocolos estándar para redes de área local (WLAN 2.4/5 GHz) y enlaces de corto alcance (Bluetooth 5.3) con bajo consumo energético.",
        clientExplanation: "Permite navegación de alta velocidad en redes residenciales y empresariales sin consumo de datos celulares, así como conexión estable con accesorios como audífonos y relojes inteligentes.",
        salesExample: {
          client: "¿Tendré problemas para sincronizar mis audífonos o la pantalla del automóvil?",
          seller: "No. El estándar Bluetooth moderno establece sincronización inmediata y mantiene un enlace estable sin interferencias ni cortes en la reproducción."
        },
        microQuiz: {
          question: "¿Cuál es el argumento comercial clave respecto a la conectividad Bluetooth?",
          options: [
            "Expansión de la memoria interna del sistema",
            "Enlace inalámbrico confiable y automático con accesorios de audio y manos libres",
            "Incremento del brillo del panel frontal"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. La compatibilidad y estabilidad con periféricos es el factor determinante para el comprador."
        }
      }
    ]
  },
  {
    id: "sim-equipo",
    title: "Identificación, SIM y eSIM",
    icon: "sim-card",
    description: "Gestión de líneas telefónicas y seguridad del dispositivo.",
    items: [
      {
        id: "esim-dual",
        term: "SIM Física, eSIM y Dual SIM",
        badge: "Líneas Telefónicas",
        technical: "Módulo de identidad de abonado físico frente a circuito integrado programable (eSIM). La arquitectura Dual SIM permite operar dos líneas activas de forma concurrente.",
        clientExplanation: "Permite gestionar dos números telefónicos en un único dispositivo: por ejemplo, una línea corporativa y una personal, sin necesidad de portar dos equipos independientes.",
        salesExample: {
          client: "Manejo un número para mi negocio y otro personal, ¿puedo integrarlos aquí?",
          seller: "Correcto. Mediante la función Dual SIM y eSIM puede recibir llamadas y mensajes de ambas líneas en este mismo equipo, asignando contactos y tonos de manera independiente."
        },
        microQuiz: {
          question: "Un cliente gestiona ventas y vida personal por separado. ¿Qué solución comercial le presentas?",
          options: [
            "Adquisición obligatoria de dos dispositivos independientes",
            "Uso de Dual SIM o eSIM para consolidar ambas líneas en el mismo equipo",
            "Ampliación de la memoria RAM del sistema"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. La consolidación de líneas en un solo equipo optimiza costos y comodidad para el usuario."
        }
      },
      {
        id: "imei",
        term: "Código IMEI",
        badge: "Seguridad y Garantía",
        technical: "International Mobile Equipment Identity: registro alfanumérico global único de 15 dígitos que identifica unívocamente al terminal ante operadores y fabricantes.",
        clientExplanation: "Funciona como la identificación oficial y única del dispositivo. Es indispensable para validación de garantías y permite bloquear el equipo de inmediato en caso de robo o extravío.",
        salesExample: {
          client: "¿Por qué es importante registrar el código IMEI de la factura?",
          seller: "Es su principal respaldo de seguridad. Si el dispositivo llegara a extraviarse, ese identificador permite que la compañía bloquee el acceso para que no pueda ser utilizado por terceros."
        },
        microQuiz: {
          question: "¿Cuál es la función principal del código IMEI explicada al cliente?",
          options: [
            "Medición de la frecuencia del procesador",
            "Identificador único del equipo para gestión de garantías y bloqueo preventivo",
            "Clave de acceso al correo electrónico institucional"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. El IMEI es la clave de identidad y protección del equipo ante siniestros."
        }
      }
    ]
  },
  {
    id: "rendimiento",
    title: "Rendimiento y Almacenamiento",
    icon: "cpu",
    description: "Capacidad de procesamiento, memoria operativa y almacenamiento.",
    items: [
      {
        id: "ram",
        term: "Memoria RAM",
        badge: "Capacidad Operativa",
        technical: "Memoria de acceso aleatorio de alta velocidad donde se almacenan temporalmente las instrucciones de las aplicaciones en ejecución y procesos del sistema.",
        clientExplanation: "Determina la capacidad del teléfono para mantener múltiples aplicaciones abiertas simultáneamente sin que se reinicien o se perciba lentitud al alternar entre ellas.",
        salesExample: {
          client: "¿Qué ventaja práctica me ofrece contar con 8 GB de RAM en lugar de 4 GB?",
          seller: "Con 8 GB usted puede revisar documentos, responder mensajes en WhatsApp y navegar en internet alternando entre ventanas sin que ninguna aplicación se cierre o se pause."
        },
        microQuiz: {
          question: "Un usuario manifiesta que su equipo actual se congela al alternar aplicaciones. ¿Qué componente debe destacarse?",
          options: [
            "La resolución del sensor fotográfico",
            "Una mayor capacidad de Memoria RAM",
            "El grado de protección contra polvo"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. La memoria RAM es el recurso que asegura la continuidad de procesos en multitarea."
        }
      },
      {
        id: "storage",
        term: "Almacenamiento Interno (GB)",
        badge: "Capacidad de Datos",
        technical: "Unidad de estado sólido no volátil (tecnología UFS) donde se conservan el sistema operativo, aplicaciones instaladas, documentos y archivos multimedia.",
        clientExplanation: "Es el espacio disponible para guardar fotos, videos en alta definición, conversaciones y aplicaciones sin requerir depuración periódica de archivos.",
        salesExample: {
          client: "¿Vale la pena optar por 256 GB frente a 128 GB?",
          seller: "Si usted genera contenido, conserva historiales extensos de mensajería o descarga aplicaciones frecuentemente, 256 GB le garantizan varios años de uso continuo sin alertas de espacio insuficiente."
        },
        microQuiz: {
          question: "¿Qué problemática recurrente resuelve un almacenamiento interno amplio?",
          options: [
            "Descarga imprevista de la batería durante el día",
            "La necesidad constante de eliminar archivos o fotos por falta de espacio",
            "Baja recepción de señal en exteriores"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. Evitar la saturación del almacenamiento previene fricciones de uso a mediano plazo."
        }
      },
      {
        id: "processor",
        term: "Procesador Central (SoC)",
        badge: "Unidad de Cómputo",
        technical: "Circuito integrado que combina CPU multinúcleo, unidad gráfica (GPU) y motor neuronal (NPU) para la ejecución eficiente de instrucciones.",
        clientExplanation: "Constituye la unidad central de cómputo del teléfono. Asegura que la interfaz responda con inmediatez al tacto, procese fotografías con rapidez y mantenga eficiencia energética.",
        salesExample: {
          client: "¿Cómo influye el procesador en el uso cotidiano?",
          seller: "Es el componente que coordina la velocidad general del equipo: permite abrir aplicaciones en milisegundos y procesar imágenes con mayor fidelidad sin sobrecalentamiento."
        },
        microQuiz: {
          question: "¿Cómo debe definirse el procesador en una conversación comercial?",
          options: [
            "La dimensión diagonal de la pantalla",
            "El componente central que define la agilidad y tiempo de respuesta de todas las tareas",
            "El módulo receptor de señal de radio"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. Explicarlo como la unidad central de respuesta facilita la comprensión del cliente."
        }
      }
    ]
  },
  {
    id: "pantalla",
    title: "Pantalla y Tasa de Refresco",
    icon: "display",
    description: "Tecnología de panel, resolución y frecuencia de actualización.",
    items: [
      {
        id: "hz-refresh",
        term: "Tasa de Refresco (Hz)",
        badge: "Fluidez Visual",
        technical: "Frecuencia con la que el panel actualiza la imagen por segundo (60 Hz vs 120 Hz).",
        clientExplanation: "Una frecuencia de 120 Hz genera desplazamientos considerablemente más suaves al navegar y leer texto en movimiento, reduciendo la fatiga visual.",
        salesExample: {
          client: "¿Qué diferencia práctica existe entre una pantalla de 60 Hz y una de 120 Hz?",
          seller: "Al desplazarse por listas de contactos, documentos o redes sociales, en 120 Hz el contenido se mantiene nítido y la respuesta táctil es inmediata, sin saltos visuales."
        },
        microQuiz: {
          question: "¿Cuál es el beneficio directo perceptible en un panel de 120 Hz?",
          options: [
            "Mayor volumen en el altavoz principal",
            "Continuidad y suavidad superior durante el desplazamiento de contenidos",
            "Reducción en el peso físico del dispositivo"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. La suavidad en el desplazamiento y la respuesta táctil son evidentes de inmediato."
        }
      }
    ]
  },
  {
    id: "bateria",
    title: "Batería y Protocolos de Carga",
    icon: "battery",
    description: "Autonomía operativa y potencia de recarga en vatios.",
    items: [
      {
        id: "mah-bateria",
        term: "Capacidad de Batería (mAh)",
        badge: "Autonomía",
        technical: "Miliamperios-hora: cuantificación de la capacidad de almacenamiento de energía electroquímica en la celda.",
        clientExplanation: "Una capacidad de 5000 mAh asegura autonomía suficiente para cubrir jornadas completas de uso continuo sin requerir conexiones intermedias.",
        salesExample: {
          client: "¿El equipo resistirá una jornada laboral completa sin recarga?",
          seller: "Con una celda de 5000 mAh y gestión inteligente de energía, el dispositivo está diseñado para operar durante toda su jornada con margen de reserva."
        },
        microQuiz: {
          question: "¿Qué indica una especificación de 5000 mAh?",
          options: [
            "La velocidad de transferencia de datos móviles",
            "La capacidad de reserva energética y autonomía del dispositivo",
            "La cantidad de archivos admisibles en memoria"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. Representa la capacidad de reserva de energía del equipo."
        }
      },
      {
        id: "carga-rapida",
        term: "Carga Rápida (Watts)",
        badge: "Potencia de Recarga",
        technical: "Entrega de potencia eléctrica regulada (W) mediante protocolos térmicos de seguridad.",
        clientExplanation: "Permite recuperar un porcentaje significativo de carga en periodos breves (por ejemplo, 15 a 20 minutos), optimizando tiempos de espera.",
        salesExample: {
          client: "Dispongo de poco tiempo para recargar el equipo durante el día.",
          seller: "Con un sistema de carga rápida de 33W o 67W, en aproximadamente 20 minutos obtendrá carga suficiente para varias horas de operación continua."
        },
        microQuiz: {
          question: "¿Qué valor resuelve la carga rápida en un perfil ejecutivo o de alta movilidad?",
          options: [
            "Reducción del consumo de datos móviles",
            "Recuperación acelerada de energía en lapsos breves",
            "Disminución del tamaño físico de la pantalla"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. La recuperación rápida de autonomía es la solución para usuarios de alta actividad."
        }
      }
    ]
  },
  {
    id: "camara",
    title: "Sistemas Fotográficos y Óptica",
    icon: "camera",
    description: "Sensores, estabilización óptica y resolución en megapíxeles.",
    items: [
      {
        id: "megapixeles-calidad",
        term: "Megapíxeles (MP) y Estabilización (OIS)",
        badge: "Captura de Imagen",
        technical: "Resolución del sensor en millones de puntos combinada con Estabilización Óptica de Imagen (OIS) y algoritmos de rango dinámico.",
        clientExplanation: "Una alta resolución permite recortar tomas sin perder definición, mientras que la estabilización óptica evita imágenes borrosas en condiciones de poca iluminación o tomas en movimiento.",
        salesExample: {
          client: "¿Un número mayor de megapíxeles garantiza automáticamente mejores fotografías?",
          seller: "Los megapíxeles aportan nivel de detalle, pero la presencia de estabilización óptica y la apertura del lente son los factores determinantes para obtener tomas nítidas e iluminadas en interiores."
        },
        microQuiz: {
          question: "¿De qué depende la nitidez fotográfica en condiciones de baja iluminación?",
          options: [
            "Exclusivamente de la cifra nominal de megapíxeles",
            "De la combinación del sensor, apertura y estabilización óptica",
            "Del color del acabado posterior del equipo"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. La calidad fotográfica responde a la integración de óptica, sensor y estabilización."
        }
      }
    ]
  },
  {
    id: "seguridad-resistencia",
    title: "Seguridad y Certificación IP",
    icon: "shield",
    description: "Autenticación biométrica y tolerancia a factores ambientales.",
    items: [
      {
        id: "proteccion-ip",
        term: "Certificación IP (IP54 / IP68)",
        badge: "Resistencia Ambiental",
        technical: "Ingress Protection: estándar de clasificación contra la penetración de partículas sólidas (primer dígito) y líquidos (segundo dígito).",
        clientExplanation: "IP54 ofrece tolerancia contra polvo y salpicaduras incidentales de lluvia. IP68 certifica protección hermética ante inmersión accidental en agua dulce.",
        salesExample: {
          client: "Trabajo frecuentemente en exteriores y me preocupa la exposición a la lluvia.",
          seller: "Este equipo cuenta con certificación IP para protección contra salpicaduras y polvo, lo que previene daños por humedad accidental durante su jornada."
        },
        microQuiz: {
          question: "¿Qué garantiza la certificación IP68 frente a accidentes cotidianos?",
          options: [
            "Mayor tasa de refresco en pantalla",
            "Protección comprobada contra inmersión accidental y polvo",
            "Incremento en el alcance de la red Wi-Fi"
          ],
          correctIndex: 1,
          feedback: "Respuesta correcta. Certifica el nivel de hermeticidad ante partículas y agua."
        }
      }
    ]
  }
];

export const SALES_SIMULATION = {
  title: "Simulación de Venta Consultiva",
  scenario: "Cliente: Carlos — Comerciante independiente",
  steps: [
    {
      step: 1,
      customerMood: "Evaluación de necesidades",
      customerMessage: "Busco renovar mi equipo. El teléfono actual presenta lentitud constante al trabajar con catálogos y necesito que la batería cubra toda mi jornada sin recargas intermedias.",
      options: [
        {
          id: "opt-1",
          text: "Le sugiero directamente el modelo de mayor precio de 108 Megapíxeles y 512 Gigabytes de almacenamiento.",
          isBest: false,
          score: 1,
          feedback: "Se ofertó la opción más costosa sin validar previamente el perfil operativo ni argumentar en función de la lentitud y autonomía manifestadas."
        },
        {
          id: "opt-2",
          text: "Comprendo. Para eliminar la lentitud en multitarea requerimos un procesador eficiente con mínimo 8 GB de RAM, además de una batería de 5000 mAh para su jornada completa. ¿Qué volumen de archivos multimedia maneja habitualmente?",
          isBest: true,
          score: 3,
          feedback: "Excelente argumentación. Vinculó de forma técnica y comprensible los requerimientos de memoria y autonomía, cerrando con una pregunta de diagnóstico."
        },
        {
          id: "opt-3",
          text: "Contamos con una amplia variedad en exhibición. Puede revisar las fichas técnicas impresas en el mostrador.",
          isBest: false,
          score: 0,
          feedback: "El comprador requiere asesoría consultiva orientada a resolver su problema, no lectura de especificaciones aisladas."
        }
      ]
    },
    {
      step: 2,
      customerMood: "Análisis de financiamiento",
      customerMessage: "Envío continuamente cotizaciones e imágenes a clientes. Me interesa una opción con financiamiento en parcialidades periódicas, ¿cuentan con ese esquema?",
      options: [
        {
          id: "opt-1",
          text: "Efectivamente. Mediante nuestro esquema de financiamiento, el modelo Nova X1 le permite iniciar con un enganche mínimo y cuotas semanales accesibles, incluyendo 256 GB para almacenar todo su catálogo comercial.",
          isBest: true,
          score: 3,
          feedback: "Excelente integración. Conectó la viabilidad del financiamiento en pagos cómodos con el beneficio directo para su actividad comercial."
        },
        {
          id: "opt-2",
          text: "Solo procesamos liquidaciones de contado en este departamento.",
          isBest: false,
          score: 0,
          feedback: "Se descarta la principal alternativa de comercialización accesible para el cliente."
        },
        {
          id: "opt-3",
          text: "El precio de lista es de $5,899. Para esquemas a plazos debe consultar en ventanilla de cobranza.",
          isBest: false,
          score: 1,
          feedback: "El asesor comercial debe dominar y presentar la simulación de cuotas durante la conversación de venta."
        }
      ]
    },
    {
      step: 3,
      customerMood: "Validación de durabilidad",
      customerMessage: "Realizo entregas en campo. ¿Qué respaldo ofrece el equipo ante exposición a polvo o lluvia imprevista?",
      options: [
        {
          id: "opt-1",
          text: "Cualquier contacto con humedad invalida la garantía de forma inmediata.",
          isBest: false,
          score: 0,
          feedback: "Respuesta imprecisa que genera incertidumbre en lugar de explicar las especificaciones de ingeniería del producto."
        },
        {
          id: "opt-2",
          text: "El dispositivo cuenta con certificación IP que protege contra el ingreso de polvo y salpicaduras de lluvia, haciéndolo idóneo para trabajo en exteriores. Adicionalmente, podemos integrar protección de cristal templado de alta densidad.",
          isBest: true,
          score: 3,
          feedback: "Explicación precisa. Tradujo la norma IP en tranquilidad operativa para el usuario y añadió valor con protección complementaria."
        },
        {
          id: "opt-3",
          text: "Cuenta con pantalla de 120 Hertzios de refresco.",
          isBest: false,
          score: 0,
          feedback: "Se confundió la fluidez de panel con la resistencia física estructural."
        }
      ]
    },
    {
      step: 4,
      customerMood: "Decisión de adquisición",
      customerMessage: "La configuración del Nova X1 cumple con lo que necesito. ¿Cuál es el procedimiento para concretar la adquisición mediante cuotas?",
      options: [
        {
          id: "opt-1",
          text: "Con su identificación oficial definimos en nuestro simulador el enganche y el plazo deseado. El trámite se completa en minutos y realizamos la entrega del equipo listo para operar.",
          isBest: true,
          score: 3,
          feedback: "Cierre profesional. Procedimiento ágil, transparente y con orientación al servicio."
        },
        {
          id: "opt-2",
          text: "Debe presentar documentación física adicional en los próximos días.",
          isBest: false,
          score: 0,
          feedback: "Introduce obstáculos burocráticos y dilata el cierre de la operación."
        }
      ]
    }
  ]
};

export const COMPARATOR_CHALLENGES = [
  {
    id: "challenge-1",
    customerProfile: {
      name: "Valeria — Creadora de Contenido y Edición Digital",
      need: "Producción continua de video en alta resolución, edición móvil y carga de archivos pesados. Requiere capacidad amplia, grabación 4K y tiempos breves de recarga.",
      budget: "Inversión orientada a productividad"
    },
    phoneA: "nova-x1",
    phoneB: "nova-x1-pro",
    correctPhoneId: "nova-x1-pro",
    explanation: "Para flujos de trabajo que involucran renderizado de video y almacenamiento de material sin compresión, el Nova X1 Pro ofrece 512 GB de almacenamiento UFS 3.1, sensor con captura 4K y recarga rápida de 67W.",
    keyPoints: ["512 GB de almacenamiento", "Grabación frontal 4K", "Recarga rápida de 67W"]
  },
  {
    id: "challenge-2",
    customerProfile: {
      name: "Don Roberto — Servicio de Transporte de Pasajeros",
      need: "Operación continua de aplicaciones de navegación GPS durante turnos prolongados. Demanda máxima autonomía de batería, lectura clara de mapas y costo operativo balanceado.",
      budget: "Inversión eficiente"
    },
    phoneA: "nova-lite",
    phoneB: "nova-x1-pro",
    correctPhoneId: "nova-lite",
    explanation: "El Nova Lite satisface plenamente sus requerimientos de autonomía (batería de 5000 mAh y procesador de consumo optimizado) manteniendo un costo accesible sin sobreespecificaciones innecesarias para su función.",
    keyPoints: ["Batería 5000 mAh de alta eficiencia", "Pantalla de 6.5 pulgadas de fácil lectura", "Relación costo-beneficio óptima"]
  }
];

export const TRAINER_DASHBOARD_DATA = {
  stats: {
    totalEmployees: 18,
    activeThisWeek: 16,
    avgCompletionRate: 78,
    simulationsPassed: 42,
    avgQuizScore: "88%"
  },
  modulePerformance: [
    { module: "Batería y Protocolos de Carga", completion: 95, status: "Consolidado", color: "#1D74F5" },
    { module: "SIM, eSIM y Código IMEI", completion: 89, status: "Nivel Óptimo", color: "#1D74F5" },
    { module: "Rendimiento (RAM y Procesador)", completion: 82, status: "Satisfactorio", color: "#1D74F5" },
    { module: "Sistemas Ópticos y Megapíxeles", completion: 74, status: "En Desarrollo", color: "#6E6E73" },
    { module: "Pantalla y Tasa de Refresco (Hz)", completion: 62, status: "Refuerzo Requerido", color: "#D9383A" },
    { module: "Simulación de Venta en Parcialidades", completion: 68, status: "En Práctica", color: "#6E6E73" }
  ],
  employees: [
    { name: "Andrea Méndez", store: "Sucursal Central", progress: 96, score: "9.8 / 10", badge: "Asesor Certificado", status: "Acreditado" },
    { name: "Carlos Quintana", store: "Sucursal Norte", progress: 88, score: "9.2 / 10", badge: "Nivel Avanzado", status: "Activo" },
    { name: "María Fernanda López", store: "Sucursal Plaza", progress: 84, score: "8.9 / 10", badge: "Nivel Avanzado", status: "Activo" },
    { name: "José Manuel Ruiz", store: "Sucursal Sur", progress: 72, score: "8.1 / 10", badge: "En Proceso", status: "Activo" },
    { name: "Sofía Galindo", store: "Sucursal Central", progress: 65, score: "7.8 / 10", badge: "En Proceso", status: "Módulo Cuotas" },
    { name: "David Alarcón", store: "Sucursal Oriente", progress: 48, score: "7.0 / 10", badge: "Nuevo Ingreso", status: "Módulo Inicial" }
  ],
  insights: [
    {
      type: "alert",
      title: "Punto de refuerzo pedagógico: Tasa de Refresco (Hz)",
      description: "El 38% del personal de nuevo ingreso confunde la tasa de refresco (Hz) con la resolución de pantalla al estructurar el argumento de venta."
    },
    {
      type: "success",
      title: "Concepto con mayor índice de asimilación: Autonomía (mAh)",
      description: "El 95% del equipo comunica con precisión la equivalencia de 5000 mAh en términos de jornada completa de trabajo."
    },
    {
      type: "action",
      title: "Recomendación operativa semanal",
      description: "Desplegar cápsula de entrenamiento breve sobre diferenciación de RAM Física vs Almacenamiento Interno."
    }
  ]
};
