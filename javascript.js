function comprobarRespuesta() {
  // Respuestas correctas a las preguntas
  const respuestasCorrectas = {
    q1: '2',  // Pregunta 1, opción 2 correcta
    q2: '3',  // Pregunta 2, opción 3 correcta
    q3: '3',  // Pregunta 3, opción 3 correcta
    q4: '2',  // Pregunta 4, opción 2 correcta
    q5: '2',
    q6: '1',
    q7: '2',
    q8: '2',
    q9: '2',
    q10: '1',
    q11: '2',
    q12: '3',
    q13: '2',
    q14: '2',
    q15: '3',
    q16: '2',
    q17: '2',
    q18: '1',
    q19: '2',
    q20: '1',
    q21: '2',
    q22: '1',
    q23: '2',
    q24: '1',
    q25: '3',
    q26: '2',
    q27: '1',
    q28: '3',
    q29: '1',
    q30: '2',
    q31: '1',
    q32: '3',
    q33: '4',
    q34: '1',
    q35: '2',
    q36: '3',
    q37: '1',
    q38: '3',
    q39: '2',
    q40: '1',
    q41: '3',
    q42: '1',
    q43: '3',
    q44: '3',
    q45: ['1','3'], // Respuesta múltiple (1 y 3 son correctas)
    q46: ['1','4'], // Respuesta múltiple (1 y 4 son correctas)
    q47: '2',
    q48: '3',
    q49: '4',
    q50: '2',
    q51: '2',
    q52: '1',
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
