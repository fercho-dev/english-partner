import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export function FAQAccordion() {
  const questions = [
    {
      title: "¿Qué es English Partner y cómo me puede ayudar a aprender inglés?",
      content: `Es una plataforma en línea diseñada para ayudar a personas de todos los niveles
        a aprender y mejorar su inglés. A través de nuestro sitio, puedes interactuar con una inteligencia
        artificial avanzada que te guiará en tu proceso de aprendizaje. Ofrecemos diversas herramientas
        como un chat en tiempo real con el asistente, historias cortas personalizadas para practicar
        vocabulario, lecciones sobre sinónimos y antónimos, corrección de textos, explicaciones gramaticales
        detalladas, y mucho más. Ya sea que estés comenzando desde cero o buscando perfeccionar tus habilidades
        lingüísticas, encontrarás los recursos y el apoyo necesario para alcanzar tus objetivos
        de manera efectiva y divertida.`,
    },
    {
      title: "¿Puede English Partner entender y responder a todas mis preguntas sobre inglés?",
      content: `El chat usa el modelo de lenguaje gpt creado por OpenAI. Se trata de una inteligencia
        artificial avanzada que comprende y aborda una amplia variedad de temas relacionados con el inglés.
        Desde cuestiones gramaticales, vocabulario, hasta consejos de aprendizaje. Sin embargo, aunque
        es sumamente avanzado, puede haber ocasiones en las que responde cosas inadecuadas. Si alguna vez
        te encuentras con una respuesta que no es suficientemente clara o satisfactoria, te animamos a que la reformules
        o busques apoyo adicional, pero en la gran mayoría de los casos, ¡nuestro chat será capaz
        de ayudarte!`,
    },
    {
      title: "¿Puedo seleccionar el nivel de dificultad?",
      content: `La inteligencia artificial está diseñada para adaptarse y responder a tu nivel de habilidad
        en inglés. A medida que interactúas más con el chat y participas en diferentes actividades, el sistema
        evalúa tu desempeño y ajusta el nivel de dificultad de forma dinámica. Esto significa que siempre
        recibirás contenido y preguntas adecuados para tu nivel actual, permitiéndote progresar de forma
        efectiva.`,
    },
    {
      title: "¿De qué se trata la sección de examenes y test?",
      content: `La sección de exámenes y test está diseñada para evaluar tus habilidades.
        Se te harán una serie de preguntas sobre gramática, vocabulario, y comprensión de lectura.
        Al final obtendrás un resultado que te indicará tu nivel de inglés actual. Además, podrás
        conocer los conceptos y aspectos que necesitas mejorar para alcanzar el siguiente nivel.`,
    },
    {
      title: "¿Puedo personalizar los temas o áreas del idioma que quiero estudiar más detalladamente?",
      content: `¡Sí! En la sección de tener un chat con el asistente, tienes la libertad de explicarle
        que es lo que quieres aprender. Puedes pedirle que te explique un tema en específico, o que te
        ayude a practicar un área del idioma que consideres que necesitas mejorar. El asistente te
        responderá con una explicación detallada y te dará la oportunidad de practicar con ejercicios.
        `,
    },
  ]

  return (
    <Accordion isCompact>
      {questions.map((question, i) => (
        <AccordionItem key={i} aria-label={question.title} title={question.title}>
          <p className="text-sm text-gray-500">{question.content}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
