function comprobarRespuesta() {
  // Respuestas correctas (se asignan según tus criterios)
  const respuestasCorrectas = {
    q1: '2',  // Pregunta 1, opción 2 correcta
    q2: '3',  // Pregunta 2, opción 3 correcta
    q3: '3',  // Pregunta 3, opción 3 correcta
    q4: '2',  // Pregunta 4, opción 2 correcta
    q5: '2',
    q6: '1',
    q7: '3',
    q8: '2',
    q9: '2',
    q10: '4',
    q11: '2',
    q12: '2',
    q13: '4',
    q14: '2',
    q15: '1',
    q16: '2',
    q17: '3',
    q18: '2',
    q19: '1',
    q20: '4',
    q21: '1',
    q22: '1',
    q23: '2',
    q24: '3',
    q25: '2',
    q26: '2',
    q27: '1',
    q28: '2',
    q29: '1',
    q30: '3',
    q31: '2',
    q32: '1',
    q33: '2',
    q34: '1',
    q35: '3',
    q36: '1',
    q37: '3',
    q38: '2',
    q39: '1',
    q40: '3',
    q41: '1',
    q42: '3',
    q43: '3',
    q44: '1',
    q45: '3',
    q46: '3',
    q47: '1',
    q48: '2',
    q49: '3',
    q50: '4',
    q51: '2',
    q52: '3',
    q53: '1',
    q54: '2',
    q55: '1',
    q56: '1',
    q57: '3',
    q58: '2',
    q59: '4',
    q60: '2',  // Pregunta 60, opción 2 correcta
  };

  // Iterar sobre cada pregunta (q1, q2, q3, ...)
  for (let pregunta in respuestasCorrectas) {
    // Obtener todas las opciones (radio buttons) de la pregunta
    let opciones = document.getElementsByName(pregunta);

    // Iterar sobre las opciones para encontrar cuál está seleccionada
    for (let i = 0; i < opciones.length; i++) {
      let label = opciones[i].parentNode; // Obtiene el <label> que contiene el texto

      // Verificar si la opción está seleccionada
      if (opciones[i].checked) {
        // Comprobar si la respuesta seleccionada es correcta
        if (opciones[i].value === respuestasCorrectas[pregunta]) {
          // Cambiar el color del texto de la respuesta correcta a verde
          label.style.color = "green";
        } else {
          // Cambiar el color del texto de la respuesta incorrecta a rojo
          label.style.color = "red";
        }
      } else {
        // Restaurar el color por defecto (negro) de las opciones no seleccionadas
        label.style.color = "white";
      }
    }
  }
}
