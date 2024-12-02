function comprobarRespuesta() {
  // Respuestas correctas a las preguntas
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
    q44: ['1', '3'], // Respuesta múltiple (1 y 3 son correctas)
    q45: ['1', '3'], // Respuesta múltiple (1 y 3 son correctas)
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

// LET es usado para los bloques, una forma moderna de var
  //No se puede volver a declarar pero sí actualizada

  // Iterar sobre cada pregunta (q1, q2, q3, ...)
  for (let pregunta in respuestasCorrectas) {
    let opciones = document.getElementsByName(pregunta); //Opciones pilla el objeto bajo el nombre "PREGUNTA"

    // Comprobar si es una pregunta de respuesta múltiple
    if (Array.isArray(respuestasCorrectas[pregunta])) {
      let respuestasUsuario = []; // respuestas introducidas por el usuario
      
      // Recorrer las opciones y guardar las seleccionadas
      for (let i = 0; i < opciones.length; i++) { //opciones.length debido a let opciones que se encuentra arriba que pilla todas las preguntas
        let label = opciones[i].parentNode;
        
        if (opciones[i].checked) { //Si opción esta check
          respuestasUsuario.push(opciones[i].value); // Las respuestas se añaden a opciones
        }
        
        // Restablece el color de las label a blanco
        label.style.color = "white";
      }

      
      //Comprueba si las respuestas seleccionadas por el usuario coinciden con las respuestas correctas indicadas arriba
      if (respuestasUsuario.sort().toString() === respuestasCorrectas[pregunta].sort().toString()) { //el apartado sort ordena las respuestas del usuario
        // Si es correcto cambia a color verde
        for (let i = 0; i < opciones.length; i++) {
          if (opciones[i].checked) {
            opciones[i].parentNode.style.color = "green";
          }
        }                 //Ambas opciones arriba y abajo es solo aplicable al texto en cuestión
      } else {
        // Incorrecto cambia a color  en rojo
        for (let i = 0; i < opciones.length; i++) {
          if (opciones[i].checked) {
            opciones[i].parentNode.style.color = "red";
          }
        }
      }
    } else {
      // A partir de aqui es solo para respuestas normales
      for (let i = 0; i < opciones.length; i++) {
        let label = opciones[i].parentNode;

        if (opciones[i].checked) {
          if (opciones[i].value === respuestasCorrectas[pregunta]) {
            label.style.color = "green";  // Correcta
          } else {
            label.style.color = "red";    // Incorrecta
          }
        } else {
          label.style.color = "white";    // No seleccionada
        }
      }
    }
  }
}
