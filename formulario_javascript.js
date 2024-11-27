function comprobarRespuesta() {
    // Respuestas correctas (se asignan según tus criterios)
    const respuestasCorrectas = {
      q1: '1',  // Pregunta 1, opción 1 correcta
      q2: '2',  // Pregunta 2, opción 2 correcta
      q3: '3',  // Pregunta 3, opción 3 correcta
      q4: '2'   // Pregunta 4, opción 2 correcta
    };
  
    let respuestasCorrectasContadas = 0;
  
    // Iterar sobre cada pregunta (q1, q2, q3, q4)
    for (let pregunta in respuestasCorrectas) {
      // Obtener las opciones de radio para cada pregunta
      let opciones = document.getElementsByName(pregunta);
      let seleccionada = null;
  
      // Buscar la opción seleccionada
      for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
          seleccionada = opciones[i].value;
          break;
        }
      }
  
      // Comprobar si la respuesta seleccionada es la correcta
      if (seleccionada === respuestasCorrectas[pregunta]) {
        respuestasCorrectasContadas++;
      }
    }
  
    // Mostrar el resultado
    alert(`Respuestas correctas: ${respuestasCorrectasContadas} de 4`);

     // Reiniciar opciones seleccionadas
  for (let pregunta in respuestasCorrectas) {
    let opciones = document.getElementsByName(pregunta);
    // Desmarcar todas las opciones de radio para cada pregunta
    for (let i = 0; i < opciones.length; i++) {
      opciones[i].checked = false;
        }
    } 
  }
