const features = [
  {
    title: "Chat Interactivo",
    body: `Sumérgete en conversaciones fluidas y dinámicas con nuestra IA.
      Practica, aprende y mejora tu inglés de manera natural`,
    button: {url: "/chat", text: "Comenzar a charlar"}
  },
  {
    title: "Historias Personalizadas",
    body: `Descubre cuentos generados especialmente para ti, adaptados a tu nivel.
      Aprende y diviértete mientras expandes tu vocabulario con relatos de ficción.`,
    button: {url: "/chat?feature=story", text: "Crear un cuento"}
  },
  {
    title: "Vocabulario a Medida",
    body: `¿Quieres hablar de viajes, negocios o amor?
      Nuestra IA te ofrecerá palabras y frases específicas de la situación que elijas.
      Amplía tu léxico de forma efectiva.`,
    button: {url: "/chat?feature=vocabulary", text: "Aprender vocabulario"}
  },
  {
    title: "Evalúa Tu Progreso",
    body: `Descubre dónde estás y a dónde puedes llegar.
      Nuestro bot te brindará pruebas que no solo evalúan,
      sino que también revelan áreas específicas para mejorar.`,
    button: {url: "/chat?feature=test", text: "Comenzar un test"}
  },
]

const headerMenuItems = [
  {text: "Chat", url: "/chat"},
  {text: "Historias", url: "/chat?feature=story"},
  {text: "Vocabulario", url: "/chat?feature=vocabulary"},
  {text: "Test", url: "/chat?feature=test"},
];

export { features, headerMenuItems };
