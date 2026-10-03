/**
 * CONFIGURACIÓN CENTRALIZADA E IDENTIDAD
 * Editable para cambiar fácilmente textos, teléfonos, preguntas y estructura de la plataforma.
 */

export const APP_CONFIG = {
  trainerName: "Gabriela Licona",
  trainerTitle: "Capacitadora Comercial y Líder de Ventas",
  appName: "Gabriela Licona",
  badge: "Capacitación Comercial",
  tagline: "Aprende. Practica. Vende mejor.",
  currencySymbol: "$",
  defaultCurrencyCode: "MXN",
  companyName: "Tienda Celular / Retail Móvil"
};

export const PHONES_DATA = [
  {
    id: "nova-lite",
    name: "Nova Lite",
    tagline: "Equilibrio ideal para redes y mensajería diaria",
    price: 3499,
    badge: "Económico y Confiable",
    color: "Plata Niebla",
    specs: {
      ram: "4 GB",
      storage: "128 GB",
      processor: "Octa-Core 2.0 GHz (Eficiente)",
      screen: '6.5" HD+ IPS LCD',
      refreshRate: "60 Hz",
      battery: "5000 mAh",
      charging: "15W Carga estándar",
      cameraMain: "50 MP Dual",
      cameraFront: "8 MP",
      connectivity: "4G LTE / Dual SIM",
      security: "Huella dactilar lateral",
      protection: "IP52 (Salpicaduras leves)"
    },
    pitch: "El teléfono perfecto para quien busca excelente batería para todo el día, WhatsApp y redes sin gastar de más.",
    idealFor: "Uso diario, estudiantes, mensajería, navegación y trabajo básico.",
    highlights: ["Batería 5000 mAh", "128 GB expandible", "Precio accesible"]
  },
  {
    id: "nova-x1",
    name: "Nova X1",
    tagline: "Rendimiento veloz y fluidez para multitarea",
    price: 5899,
    badge: "Más Vendido",
    color: "Azul Titanio",
    specs: {
      ram: "8 GB + 4GB virtual",
      storage: "256 GB",
      processor: "Snapdragon 695 5G (Velocidad sostenida)",
      screen: '6.67" FHD+ AMOLED',
      refreshRate: "120 Hz",
      battery: "5000 mAh",
      charging: "33W Turbo Power",
      cameraMain: "64 MP OIS + 8 MP Gran Angular",
      cameraFront: "16 MP HDR",
      connectivity: "5G Ultra / Dual SIM + eSIM",
      security: "Huella en pantalla + Desbloqueo facial",
      protection: "IP54 (Polvo y lluvia moderada)"
    },
    pitch: "Equipado con pantalla 120Hz súper fluida y 8GB de RAM para abrir muchas aplicaciones a la vez sin que se trabe jamás.",
    idealFor: "Usuarios activos, redes sociales intensivas, multitarea, streaming y fotos nítidas.",
    highlights: ["Pantalla 120Hz AMOLED", "8GB RAM + 256GB", "Conectividad 5G"]
  },
  {
    id: "nova-x1-pro",
    name: "Nova X1 Pro",
    tagline: "Fotografía profesional y máxima potencia",
    price: 8999,
    badge: "Tope de Gama",
    color: "Negro Obsidiana",
    specs: {
      ram: "12 GB LPDDR5",
      storage: "512 GB UFS 3.1",
      processor: "Dimensity 8300 Ultra (Gama Alta)",
      screen: '6.78" 1.5K Crystal AMOLED',
      refreshRate: "120 Hz Adaptable",
      battery: "5200 mAh",
      charging: "67W Carga Ultrarrápida (0 a 100 en 38m)",
      cameraMain: "108 MP Sensor Grande + Ultra Gran Angular + Macro",
      cameraFront: "32 MP 4K Video",
      connectivity: "5G Dual Band / Wi-Fi 6 / eSIM",
      security: "Sensor biométrico óptico ultra rápido",
      protection: "IP68 (Sumergible hasta 1.5m por 30 min)"
    },
    pitch: "Para quien exige lo mejor: fotos con detalle profesional, carga que llena la batería en menos de 40 minutos y máxima velocidad para juegos y creación de contenido.",
    idealFor: "Creadores de contenido, gamers, amantes de la fotografía y usuarios exigentes.",
    highlights: ["Cámara 108 MP OIS", "Carga 67W", "IP68 + 12GB RAM"]
  }
];

export const GLOSSARY_MODULES = [
  {
    id: "conectividad",
    title: "Conectividad",
    icon: "antenna",
    color: "#0071E3",
    description: "Cómo se comunica el teléfono con el mundo.",
    items: [
      {
        id: "5g",
        term: "5G vs 4G / LTE",
        badge: "Red Móvil",
        technical: "Quinta generación de tecnologías de telefonía móvil. Ofrece velocidades de descarga de hasta 1-10 Gbps y latencias menores a 5ms.",
        clientExplanation: "Significa descargas casi instantáneas, videos en máxima calidad sin esperar y videollamadas nítidas incluso en lugares con mucha gente.",
        salesExample: {
          client: "¿Realmente necesito 5G o con 4G estoy bien?",
          seller: "El 4G funciona excelente hoy, pero el 5G le asegura que su equipo no se quedará obsoleto en los próximos años y navegará al triple de velocidad cuando descargue archivos o vea videos."
        },
        microQuiz: {
          question: "¿Cuál es el beneficio más fácil de entender para el cliente sobre el 5G?",
          options: [
            "Tiene mayor frecuencia en gigahertzios de espectro",
            "Descarga videos y páginas al instante sin trabarse",
            "Hace que la batería dure el doble"
          ],
          correctIndex: 1,
          feedback: "¡Exacto! El cliente valora la velocidad inmediata y fluidez al ver contenido."
        }
      },
      {
        id: "wifi-bluetooth",
        term: "Wi-Fi y Bluetooth",
        badge: "Inalámbrico",
        technical: "Protocolos de red de área local (WLAN 2.4/5GHz) y comunicación de corto alcance para periféricos y audio.",
        clientExplanation: "Wi-Fi le da internet rápido en casa o trabajo sin gastar sus datos. Bluetooth le permite conectar audífonos inalámbricos, bocinas y el auto sin cables.",
        salesExample: {
          client: "¿Se conectará fácil a mis audífonos inalámbricos?",
          seller: "Sí, gracias al Bluetooth moderno la conexión es automática e inmediata en cuanto saca los audífonos de su estuche."
        },
        microQuiz: {
          question: "¿Para qué sirve principalmente el Bluetooth en el día a día del cliente?",
          options: [
            "Para aumentar el almacenamiento del teléfono",
            "Para conectar audífonos, reloj o bocinas sin cables",
            "Para que la pantalla se vea más brillante"
          ],
          correctIndex: 1,
          feedback: "¡Muy bien! Accesorios sin cables es el uso clave para el comprador."
        }
      }
    ]
  },
  {
    id: "sim-equipo",
    title: "SIM, eSIM y Equipo",
    icon: "sim-card",
    color: "#34C759",
    description: "Líneas, números de serie y seguridad de red.",
    items: [
      {
        id: "esim-dual",
        term: "SIM, eSIM y Dual SIM",
        badge: "Línea Telefónica",
        technical: "Tarjeta física inteligente (SIM) vs chip digital integrado y programable (eSIM). Dual SIM permite operar dos líneas telefónicas simultáneamente.",
        clientExplanation: "Con Dual SIM o eSIM puedes tener dos números en el mismo celular: uno para tu trabajo y otro personal, sin necesidad de cargar dos teléfonos.",
        salesExample: {
          client: "¿Puedo tener mi número del trabajo y el personal aquí?",
          seller: "¡Totalmente! Este modelo cuenta con Dual SIM / eSIM, así que puede recibir llamadas de ambos números en el mismo equipo y separar sus contactos fácilmente."
        },
        microQuiz: {
          question: "Un cliente tiene negocio propio y vida personal separada. ¿Qué ventaja le ofreces?",
          options: [
            "Le dices que compre dos celulares",
            "Le explicas que con Dual SIM / eSIM maneja dos líneas en un solo teléfono",
            "Le recomiendas más memoria RAM"
          ],
          correctIndex: 1,
          feedback: "¡Perfecto! Ahorro y comodidad al no cargar dos equipos."
        }
      },
      {
        id: "imei",
        term: "IMEI",
        badge: "Identidad del Equipo",
        technical: "International Mobile Equipment Identity: código único de 15 dígitos que identifica exclusivamente a ese dispositivo a nivel mundial ante los operadores.",
        clientExplanation: "Es como el número de cédula o DNI de su teléfono. Es la huella digital única que sirve para garantía y para bloquearlo en caso de robo o extravío.",
        salesExample: {
          client: "¿Para qué me sirve guardar el IMEI que viene en la caja?",
          seller: "Es su mayor respaldo de seguridad: si alguna vez extravía su equipo, con ese código su compañía telefónica puede bloquearlo para que nadie más pueda usarlo."
        },
        microQuiz: {
          question: "¿Qué analogía sencilla le puedes dar al cliente para explicar el IMEI?",
          options: [
            "Es la velocidad del procesador",
            "Es como el número de cédula o placa única del celular",
            "Es la contraseña del correo electrónico"
          ],
          correctIndex: 1,
          feedback: "¡Excelente! La analogía de cédula/placa es inmediata y clara."
        }
      }
    ]
  },
  {
    id: "rendimiento",
    title: "Rendimiento y Memoria",
    icon: "cpu",
    color: "#5856D6",
    description: "El motor, la fluidez y el espacio del teléfono.",
    items: [
      {
        id: "ram",
        term: "Memoria RAM",
        badge: "Fluidez",
        technical: "Memoria de acceso aleatorio volátil de alta velocidad que almacena las instrucciones y datos de las aplicaciones activas en segundo plano.",
        clientExplanation: "La RAM es como una mesa de trabajo: entre más grande sea la mesa, más aplicaciones puedes tener abiertas al mismo tiempo sin que el teléfono se alente.",
        salesExample: {
          client: "¿Por qué me conviene tener 8 GB de RAM en lugar de 4 GB?",
          seller: "Con 8 GB usted puede estar en WhatsApp, cambiar a Facebook, ver un video en YouTube y regresar a sus mensajes sin que ninguna app se cierre o se trabe."
        },
        microQuiz: {
          question: "Un cliente se queja de que su celular actual 'se traba al abrir varias apps'. ¿Qué componente debes destacar?",
          options: [
            "La cantidad de Megapíxeles de la cámara",
            "Una mayor memoria RAM",
            "La certificación IP"
          ],
          correctIndex: 1,
          feedback: "¡Correcto! La memoria RAM es la que previene que las apps se cierren o congelen."
        }
      },
      {
        id: "storage",
        term: "Almacenamiento (GB)",
        badge: "Capacidad",
        technical: "Memoria flash no volátil (UFS / eMMC) donde residen permanentemente el sistema operativo, fotos, videos, audios y aplicaciones instaladas.",
        clientExplanation: "Es el cajón de recuerdos y archivos de tu celular. Con 256 GB puedes guardar más de 50,000 fotos, miles de audios de WhatsApp y decenas de juegos sin preocuparte por el mensaje de 'Memoria Llena'.",
        salesExample: {
          client: "¿128 GB o 256 GB? No sé si vale la pena pagar la diferencia.",
          seller: "Si toma muchas fotos familiares, videos o le mandan audios constantes por WhatsApp, los 256 GB le darán tranquilidad por años sin tener que estar borrando cosas cada semana."
        },
        microQuiz: {
          question: "¿Qué dolor común del cliente resuelve un almacenamiento de 256 GB o más?",
          options: [
            "Que la batería se descargue antes de llegar a casa",
            "Tener que borrar fotos o aplicaciones por falta de espacio",
            "Tener mala señal en carretera"
          ],
          correctIndex: 1,
          feedback: "¡Exacto! El temido mensaje de 'Almacenamiento casi lleno' es el principal dolor."
        }
      },
      {
        id: "processor",
        term: "Procesador (Chip)",
        badge: "Cerebro",
        technical: "System on Chip (SoC) que integra CPU, GPU, NPU y módem. Ejecuta cálculos y coordina todas las funciones del dispositivo.",
        clientExplanation: "Es el cerebro y motor del teléfono. Un buen procesador hace que el teléfono responda de inmediato al tocarlo, tome fotos al instante y no se caliente.",
        salesExample: {
          client: "¿Este procesador es bueno?",
          seller: "Es un chip de 8 núcleos de última generación. Significa que el teléfono abrirá sus aplicaciones al instante y procesará fotos con colores vivos al instante en que presione el obturador."
        },
        microQuiz: {
          question: "¿Cómo defines el procesador de forma simple ante un comprador?",
          options: [
            "Es el tamaño de la pantalla",
            "Es el cerebro y motor que da agilidad a todo lo que haces",
            "Es la antena que capta la radio"
          ],
          correctIndex: 1,
          feedback: "¡Muy bien! El concepto de 'cerebro y motor' transmite potencia sin tecnicismos."
        }
      }
    ]
  },
  {
    id: "pantalla",
    title: "Pantalla y Frecuencia",
    icon: "display",
    color: "#FF9500",
    description: "Tamaño, colores y sensación de movimiento.",
    items: [
      {
        id: "hz-refresh",
        term: "Tasa de Refresco (Hz - Hertzios)",
        badge: "Suavidad",
        technical: "Número de veces por segundo que el panel actualiza su imagen (60Hz = 60 cuadros/seg, 120Hz = 120 cuadros/seg).",
        clientExplanation: "Los 120 Hz hacen que deslizar el dedo en Facebook, Instagram o páginas web se sienta ultra suave como mantequilla, sin saltos ni tirones molestos.",
        salesExample: {
          client: "¿Qué diferencia hay entre 60Hz y 120Hz?",
          seller: "Mire, permítame deslizar en esta pantalla de 120Hz: note cómo el texto no se borra al moverse y todo responde exactamente a la velocidad de su dedo. Es un descanso para la vista."
        },
        microQuiz: {
          question: "¿Cuál es la sensación principal que percibe un usuario con una pantalla de 120 Hz?",
          options: [
            "Que la música suena con más bajos",
            "Extrema suavidad y fluidez al deslizar el contenido",
            "Que el teléfono pesa menos"
          ],
          correctIndex: 1,
          feedback: "¡Excelente! La suavidad visual en el scroll es instantáneamente notable."
        }
      },
      {
        id: "resolucion-pulgadas",
        term: "Pulgadas y Resolución (FHD+)",
        badge: "Claridad",
        technical: "Diagonal del panel en pulgadas y matriz de píxeles (FHD+ típicamente 2400 x 1080 píxeles).",
        clientExplanation: "6.67 pulgadas te da una pantalla amplia tipo cine para disfrutar series y leer sin cansar la vista, con nitidez cristalina en letras e imágenes.",
        salesExample: {
          client: "¿Se verá bien para ver películas en Netflix?",
          seller: "Tiene resolución Full HD+ con panel AMOLED, lo que significa negros puros y colores muy vivos exactamente como en una televisión moderna de sala."
        },
        microQuiz: {
          question: "¿Por qué a un cliente le interesa una pantalla grande con alta resolución?",
          options: [
            "Para ver videos, series y leer mensajes con total comodidad sin forzar la vista",
            "Para que la batería cargue más rápido",
            "Para tener mejor señal de llamadas"
          ],
          correctIndex: 0,
          feedback: "¡Correcto! Experiencia multimedia y descanso visual."
        }
      }
    ]
  },
  {
    id: "bateria",
    title: "Batería y Carga",
    icon: "battery",
    color: "#30B0C7",
    description: "Autonomía y velocidad de recarga.",
    items: [
      {
        id: "mah-bateria",
        term: "Capacidad (mAh - Miliamperios)",
        badge: "Duración",
        technical: "Miliamperios-hora: medida de la carga eléctrica que almacena la celda de la batería.",
        clientExplanation: "5000 mAh es como tener un tanque de gasolina grande: te asegura salir de casa por la mañana y regresar en la noche con batería de sobra sin buscar cargadores.",
        salesExample: {
          client: "¿Me va a durar la batería todo el día?",
          seller: "Con sus 5000 mAh está diseñado para darle más de un día completo de uso continuo entre redes sociales, llamadas y videos."
        },
        microQuiz: {
          question: "¿Qué representa una cifra como '5000 mAh'?",
          options: [
            "La velocidad de la conexión a internet",
            "La capacidad y duración que tendrá la batería",
            "La cantidad de fotos que caben en el equipo"
          ],
          correctIndex: 1,
          feedback: "¡Muy bien! mAh = tamaño del tanque de energía."
        }
      },
      {
        id: "carga-rapida",
        term: "Carga Rápida (Watts)",
        badge: "Velocidad",
        technical: "Potencia de entrega eléctrica (W = V x A) gestionada mediante protocolos inteligentes de disipación térmica.",
        clientExplanation: "Una carga rápida de 33W o 67W te da horas de batería con solo conectarlo 15 o 20 minutos mientras te bañas o tomas un café antes de salir.",
        salesExample: {
          client: "Siempre se me olvida cargar el celular en la noche.",
          seller: "Con este cargador de 67W incluido, en los 25 minutos que tarda en desayunar el teléfono ya recuperó más del 70% de su batería."
        },
        microQuiz: {
          question: "Si el cliente tiene poco tiempo en casa antes de salir a trabajar, ¿qué argumento es ganador?",
          options: [
            "Decirle que no use el teléfono",
            "Explicarle que con la carga rápida obtiene horas de uso en solo 15 minutos",
            "Ofrecerle un teléfono con pantalla más pequeña"
          ],
          correctIndex: 1,
          feedback: "¡Exacto! El ahorro de tiempo es una solución de gran impacto."
        }
      }
    ]
  },
  {
    id: "camara",
    title: "Cámaras y Megapíxeles",
    icon: "camera",
    color: "#FF2D55",
    description: "Lentes, fotos con poca luz y retratos.",
    items: [
      {
        id: "megapixeles-calidad",
        term: "Megapíxeles (MP) y Sensores",
        badge: "Detalle",
        technical: "Resolución del sensor en millones de píxeles combinada con apertura focal (f/1.8) y estabilización óptica (OIS).",
        clientExplanation: "Más megapíxeles te permiten hacer zoom o recortar una foto sin que se vea borrosa. Pero el sensor avanzado es el que logra que tus fotos salgan iluminadas y claras incluso de noche.",
        salesExample: {
          client: "¿Este de 108 MP toma mejores fotos que uno de 50 MP?",
          seller: "Los megapíxeles le dan mucho detalle para imprimir o recortar, pero lo mejor de este equipo es su estabilizador que evita que las fotos salgan movidas cuando los niños o mascotas no se quedan quietos."
        },
        microQuiz: {
          question: "¿Tener más megapíxeles garantiza por sí solo mejores fotos de noche?",
          options: [
            "Sí, los megapíxeles lo resuelven todo por arte de magia",
            "No, también importa el tamaño del sensor, la luz y la estabilización",
            "Solo importa el color de la carcasa"
          ],
          correctIndex: 1,
          feedback: "¡Brillante! Enseñar que la calidad depende del conjunto del sensor y no solo del número comercial."
        }
      }
    ]
  },
  {
    id: "seguridad-resistencia",
    title: "Seguridad y Protección IP",
    icon: "shield",
    color: "#AF52DE",
    description: "Biometría y resistencia al agua y polvo.",
    items: [
      {
        id: "biometria",
        term: "Huella y Reconocimiento Facial",
        badge: "Acceso Seguro",
        technical: "Sensores biométricos capacitivos/ópticos y mapeo facial mediante algoritmos seguros en hardware dedicado.",
        clientExplanation: "Desbloqueas tu celular al instante con solo mirarlo o poner tu dedo, manteniendo tus aplicaciones de banco y chats 100% protegidos contra curiosos.",
        salesExample: {
          client: "¿Es seguro usar mi huella para entrar a mi app del banco?",
          seller: "Es el método más seguro que existe: nadie puede duplicar su huella y le ahorra tener que escribir contraseñas largas en la calle frente a extraños."
        },
        microQuiz: {
          question: "¿Qué doble beneficio da la biometría al cliente?",
          options: [
            "Seguridad bancaria absoluta y rapidez de desbloqueo en un segundo",
            "Aumenta la señal del Wi-Fi",
            "Hace que las fotos pesen menos"
          ],
          correctIndex: 0,
          feedback: "¡Correcto! Comodidad extrema combinada con máxima seguridad."
        }
      },
      {
        id: "proteccion-ip",
        term: "Certificación IP (IP54 vs IP68)",
        badge: "Durabilidad",
        technical: "Ingress Protection. El primer dígito mide resistencia a sólidos/polvo (ej: 6) y el segundo a líquidos (ej: 8 = inmersión continua).",
        clientExplanation: "IP54 te protege contra salpicaduras de lluvia o sudor. IP68 significa que si el celular cae accidentalmente en la tina o alberca, resiste el agua sin dañarse.",
        salesExample: {
          client: "Trabajo en la calle y a veces me agarra la lluvia.",
          seller: "Este equipo cuenta con certificación de protección contra agua y polvo, así que puede responder llamadas bajo lluvia ligera sin temor a descomponerlo."
        },
        microQuiz: {
          question: "Si un cliente dice 'se me cayó el celular anterior al agua y murió', ¿qué característica le da paz mental?",
          options: [
            "Pantalla de 120 Hz",
            "Certificación de resistencia al agua IP68",
            "Conexión Bluetooth 5.3"
          ],
          correctIndex: 1,
          feedback: "¡Excelente! La certificación IP es la garantía contra accidentes con líquidos."
        }
      }
    ]
  }
];

export const SALES_SIMULATION = {
  title: "Simulador de Venta Real",
  scenario: "Cliente: Carlos (Padre de familia y comerciante)",
  steps: [
    {
      step: 1,
      customerMood: "Pensativo",
      customerMessage: "Hola, busco renovar mi teléfono. Mi celular actual ya se traba mucho cuando tengo WhatsApp abierto y quiero algo que me dure la batería todo el día porque trabajo fuera.",
      options: [
        {
          id: "opt-1",
          text: "Mire, llévese este que es el más caro de 108 Megapíxeles y 512 Gigabytes.",
          isBest: false,
          score: 1,
          feedback: "Ofreciste directo el más caro sin indagar en su presupuesto ni explicar cómo resuelve su problema de batería y lentitud."
        },
        {
          id: "opt-2",
          text: "¡Con gusto, Carlos! Para que nunca se le trabe necesita buena memoria RAM (mínimo 8GB) y una batería de 5000 mAh para aguantar toda su jornada. ¿Suele usar muchas fotos o aplicaciones pesadas?",
          isBest: true,
          score: 3,
          feedback: "¡Excelente! Conectaste sus dos dolores (lentitud -> RAM, duración -> 5000 mAh) e hiciste una pregunta de cierre para perfilarlo."
        },
        {
          id: "opt-3",
          text: "Tenemos varios. Déjeme mostrarle todos los folletos de la tienda para que los lea con calma.",
          isBest: false,
          score: 0,
          feedback: "El cliente no quiere leer folletos con datos técnicos; quiere tu asesoría humana y recomendaciones claras."
        }
      ]
    },
    {
      step: 2,
      customerMood: "Interesado",
      customerMessage: "Uso mucho WhatsApp para mandar fotos de mis productos a clientes y a veces veo videos en la noche. Pero no quiero pagar de golpe un dineral, ¿tienen pagos por semana o mes?",
      options: [
        {
          id: "opt-1",
          text: "Sí tenemos pagos en cuotas muy accesibles. Por ejemplo, el Nova X1 le queda en pagos semanales muy cómodos y le incluye pantalla fluida y 256GB para miles de fotos de su negocio.",
          isBest: true,
          score: 3,
          feedback: "¡Impecable! Vinculaste la facilidad de financiamiento con el beneficio comercial de su catálogo de productos (256 GB)."
        },
        {
          id: "opt-2",
          text: "Solo vendemos de contado aquí.",
          isBest: false,
          score: 0,
          feedback: "Perdiste una oportunidad de venta a crédito, que es el modelo más accesible para el cliente."
        },
        {
          id: "opt-3",
          text: "El precio de contado es $5,899. Si quiere cuotas tiene que ir a preguntar a la caja.",
          isBest: false,
          score: 1,
          feedback: "Como asesor tú debes dominar el simulador de cuotas para no enfriar la venta."
        }
      ]
    },
    {
      step: 3,
      customerMood: "Dudoso",
      customerMessage: "¿Y qué pasa si se me cae o se me moja con la lluvia cuando ando entregando pedidos?",
      options: [
        {
          id: "opt-1",
          text: "Si se le moja ya no hay garantía de nada.",
          isBest: false,
          score: 0,
          feedback: "Respuesta fría que genera desconfianza y miedo en el comprador."
        },
        {
          id: "opt-2",
          text: "Este equipo cuenta con protección IP contra salpicaduras y polvo, ideal para trabajo de campo, y le colocamos una mica de cristal templado de alta resistencia.",
          isBest: true,
          score: 3,
          feedback: "¡Perfecto! Explicaste la certificación IP en lenguaje práctico y ofreciste protección adicional."
        },
        {
          id: "opt-3",
          text: "Tiene 120 Hertzios de pantalla.",
          isBest: false,
          score: 0,
          feedback: "Confundiste la tasa de refresco con la resistencia física del equipo."
        }
      ]
    },
    {
      step: 4,
      customerMood: "Decidido",
      customerMessage: "Me convence mucho el Nova X1. ¿Qué necesito para llevármelo hoy mismo a cuotas?",
      options: [
        {
          id: "opt-1",
          text: "¡Excelente elección! Solo necesitamos su identificación oficial, definimos su enganche inicial con nuestro simulador y en 10 minutos sale estrenando su equipo con sus datos ya transferidos.",
          isBest: true,
          score: 3,
          feedback: "¡Cierre maestro! Trámite rápido, sin complicaciones y con propuesta de valor de servicio."
        },
        {
          id: "opt-2",
          text: "Vuelva mañana con muchos papeles y comprobantes.",
          isBest: false,
          score: 0,
          feedback: "Pusiste trabas burocráticas y perdiste la emoción del cierre inmediato."
        }
      ]
    }
  ]
};

export const COMPARATOR_CHALLENGES = [
  {
    id: "challenge-1",
    customerProfile: {
      name: "Valeria (Estudiante universitaria y creadora en TikTok)",
      need: "Paso todo el día grabando videos, editando en CapCut y subiendo historias. Necesito que la cámara frontal sea nítida, que tenga mucho espacio y que cargue súper rápido.",
      budget: "Busco calidad alta con pagos cómodos"
    },
    phoneA: "nova-x1",
    phoneB: "nova-x1-pro",
    correctPhoneId: "nova-x1-pro",
    explanation: "Para edición de video continua y creación de contenido en alta resolución, el Nova X1 Pro destaca con su cámara 4K, 512 GB de espacio para clips pesados y carga de 67W para no quedarse sin batería mientras graba.",
    keyPoints: ["512 GB para videos", "Cámara 108 MP + 4K Frontal", "Carga ultra rápida 67W"]
  },
  {
    id: "challenge-2",
    customerProfile: {
      name: "Don Roberto (Conductor de taxi / aplicación)",
      need: "Solo uso Waze, Uber y WhatsApp todo el día en el carro. Quiero una pantalla donde se lean bien las calles y que la batería dure sin sobrecalentarse.",
      budget: "Precio económico y rendidor"
    },
    phoneA: "nova-lite",
    phoneB: "nova-x1-pro",
    correctPhoneId: "nova-lite",
    explanation: "El Nova Lite cubre al 100% sus necesidades sin hacerle gastar de más: batería duradera de 5000 mAh, pantalla clara de 6.5 pulgadas y procesador eficiente para navegación GPS diaria.",
    keyPoints: ["Batería 5000 mAh de larga duración", "Excelente relación costo-beneficio", "Pantalla amplia para mapas"]
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
    { module: "Batería y Carga Rápida", completion: 95, status: "Dominado", color: "#34C759" },
    { module: "SIM, eSIM e IMEI", completion: 89, status: "Alto", color: "#34C759" },
    { module: "Rendimiento (RAM y CPU)", completion: 82, status: "Buen nivel", color: "#0071E3" },
    { module: "Cámaras y Megapíxeles", completion: 74, status: "En progreso", color: "#FF9500" },
    { module: "Pantalla y 120 Hz", completion: 62, status: "Refuerzo sugerido", color: "#FF3B30" },
    { module: "Simulación de Venta a Cuotas", completion: 68, status: "Práctica activa", color: "#AF52DE" }
  ],
  employees: [
    { name: "Andrea Méndez", store: "Sucursal Centro", progress: 96, score: "9.8/10", badge: "Asesora Estrella", status: "Certificada" },
    { name: "Carlos Quintana", store: "Sucursal Norte", progress: 88, score: "9.2/10", badge: "Avanzado", status: "Activo" },
    { name: "María Fernanda López", store: "Sucursal Plaza", progress: 84, score: "8.9/10", badge: "Avanzado", status: "Activo" },
    { name: "José Manuel Ruiz", store: "Sucursal Sur", progress: 72, score: "8.1/10", badge: "En progreso", status: "Activo" },
    { name: "Sofía Galindo", store: "Sucursal Centro", progress: 65, score: "7.8/10", badge: "En progreso", status: "Pendiente Ventas" },
    { name: "David Alarcón", store: "Sucursal Oriente", progress: 48, score: "7.0/10", badge: "Nuevo Ingreso", status: "Módulo 2" }
  ],
  insights: [
    {
      type: "alert",
      title: "Módulo con mayor duda: Pantalla y 120 Hz",
      description: "El 38% de los nuevos ingresos confunde la tasa de refresco (Hz) con la resolución de pantalla al explicárselo al cliente."
    },
    {
      type: "success",
      title: "Concepto mejor asimilado: Batería (mAh)",
      description: "El 95% de los colaboradores utiliza con éxito la analogía del 'tanque de gasolina' en sus simulaciones."
    },
    {
      type: "action",
      title: "Recomendación pedagógica semanal",
      description: "Lanzar un reto relámpago de 2 minutos sobre 'Cómo explicar 8GB vs 4GB de RAM a clientes indecisos'."
    }
  ]
};
