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
  {text: "Videos", url: "/videos"},
  {text: "Test", url: "/chat?feature=test"},
];

const hero =
  {
  title: "¡La manera interactiva de aprender inglés, potenciada con inteligencia artificial!",
  body: "Bienvenido a una experiencia de aprendizaje de inglés como ninguna otra. English Partner esta hecho a tu medida, se adapta a tus gustos, necesidades de aprendizaje y hace que aprender inglés sea interesante, emocionante e interactivo. Descubre como la Inteligencia Artificial puede ser tu aliado para perfeccionar tu inglés",
  button: {url: "/home", text: "Comienza Ahora"}};

const featuresLandingTitle =
  {
  title: "¡Potencia Tu Aprendizaje de Inglés!",
  body: "Explora nuestras emocionantes características diseñadas para hacerte dominar el inglés de manera rápida y entretenida. Desde conversaciones interactivas hasta historias personalizadas, tenemos todo lo que necesitas para alcanzar la fluidez en inglés."
  };

  const featuresLanding = [
    {
      title: "Chat Interactivo",
      body: `Sumérgete en conversaciones fluidas y dinámicas con nuestra IA.
        Practica, aprende y mejora tu inglés de manera natural`,
      src: "/chat.svg",
      link: {url: "/chat", text: "Comenzar a charlar"}
    },
    {
      title: "Historias Personalizadas",
      body: `Descubre cuentos generados especialmente para ti, adaptados a tu nivel.
        Aprende y diviértete mientras expandes tu vocabulario con relatos de ficción.`,
      src: "/story.svg",
      link: {url: "/chat?feature=story", text: "Crear un cuento"}
    },
    {
      title: "Vocabulario a Medida",
      body: `¿Quieres hablar de viajes, negocios o amor?
      Nuestra IA te ofrecerá palabras y frases específicas de la situación que elijas.
      Amplía tu léxico de forma efectiva.`,
      src: "/vocabulary.svg",
      link: {url: "/chat?feature=vocabulary", text: "Aprender vocabulario"}
    },
    {
      title: "Evalúa Tu Progreso",
      body: `Descubre dónde estás y a dónde puedes llegar.
      Nuestro bot te brindará pruebas que no solo evalúan,
      sino que también revelan áreas específicas para mejorar.`,
      src: "/test.svg",
      link: {url: "/chat?feature=test", text: "Comenzar un test"}
    }
  ];
export { features, headerMenuItems, hero, featuresLandingTitle, featuresLanding };
