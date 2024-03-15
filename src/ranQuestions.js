const curiosQuestions = [
  "¿Cuál es el animal más rápido del mundo?",
  "¿Cuál es el país más pequeño del mundo?",
  "¿Cuál es el metal más ligero?",
  "¿Cuántos huesos tiene el cuerpo humano?",
  "¿Cuál es la montaña más alta del mundo?",
  "¿Qué animal puede vivir sin cerebro?",
  "¿Cuál es la flor más grande del mundo?",
  "¿Cuántos ojos tiene una abeja?",
  "¿Cuál es la capital más antigua del mundo?",
  "¿Cuál es el idioma más hablado del mundo?",
  "¿Cuántos continentes hay en la Tierra?",
  "¿Qué animal tiene el corazón más grande?",
  "¿Cuál es el río más largo del mundo?",
  "¿Cuál es la fruta más grande del mundo?",
  "¿Cuántas especies de arañas existen?",
  "¿Cuál es el órgano más grande del cuerpo humano?",
  "¿Qué animal tiene la lengua más larga?",
  "¿Cuál es el país con más islas en el mundo?",
  "¿Cuál es el árbol más alto del mundo?",
  "¿Cuánto tarda la luz del Sol en llegar a la Tierra?",
  "¿Cuál es la temperatura más fría registrada en la Tierra?",
  "¿Cuál es el objeto más alto construido por el hombre?",
  "¿Cuánto pesa el corazón humano?",
  "¿Qué animal tiene los ojos más grandes del reino animal?",
  "¿Cuál es el animal más venenoso del mundo?",
  "¿Cuál es el elemento más abundante en la Tierra?",
  "¿Qué animal puede girar su cabeza 270 grados?",
  "¿Cuántos músculos hay en el cuerpo humano?",
  "¿Cuál es el país más poblado del mundo?",
  "¿Cuál es la velocidad del sonido en el aire?",
];

const randomCuriousQuestion = () => {
  return  curiosQuestions[Math.floor(Math.random()* curiosQuestions.length)]
}

export default randomCuriousQuestion;