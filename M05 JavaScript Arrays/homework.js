/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map((array) => {
      return array+1;
   });
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        var cont = 1;
        return true;
      }
    }
    if (cont != 1) {
      return false;
    }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var valorInicial = 0;
   var sumArray = arrayOfNums.reduce(
     (acumulador, valorActual) => acumulador + valorActual,
     valorInicial
   );
  return sumArray;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedioNotas = 0;
   var sumaNotas = 0;
   for (var i = 0; i < resultadosTest.length; i++) {
     sumaNotas += resultadosTest[i];
   }
   promedioNotas = sumaNotas/resultadosTest.length;
   return promedioNotas;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var masGrande = arrayOfNums[0];
   
  for (var i = 0; i < arrayOfNums.length; i++) {
    for (var j = 0; j < arrayOfNums.length; j++) {
      if (arrayOfNums[i] > arrayOfNums[j] && arrayOfNums[i] >= masGrande) {
        masGrande = arrayOfNums[i];
        }
      }
    }
  return masGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
  var multiplicarArgumento = [arguments[0]];

  if (arguments.length === 0) {
    return 0;
  }

  if (arguments.length === 1) {
    return arguments[0];
  }

  for (var i = 1; i < arguments.length; i++) {
    multiplicarArgumento = multiplicarArgumento * arguments[i];
  }
  return multiplicarArgumento;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var mayorQue18 = 0;
   for (var i = 0; i < array.length; i++) {
     if (array[i] > 18) {
       mayorQue18++;
     }
   }
  return mayorQue18
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch(numeroDeDia) {
      case 1:
        return "Es fin de semana"
        break;
      case 2:
        return "Es dia laboral"
        break;
      case 3:
        return "Es dia laboral"
        break;
      case 4:
        return "Es dia laboral"
        break;
      case 5:
        return "Es dia laboral"
        break;
      case 6:
        return "Es dia laboral"
        break;
      case 7:
        return "Es fin de semana"
        break;
    }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numeroString = num.toString();
   var numeroSeparado = numeroString.split("");
   if (numeroSeparado[0] == 9) {
     return true;
   }
   else {
     return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var contadorIguales = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[0] === array[i]) {
      contadorIguales++;
    }
  }
  if (contadorIguales == array.length-1){
    return true;
  }
  else {
    return false;
  }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArreglo = [];
  var contador = 0;
   
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArreglo.push(array[i]);
      contador++;
    }
  }
  if (contador === 3) {
     return nuevoArreglo;
   }
   else {
     return "No se encontraron los meses pedidos";
   }
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var resultadoTablaDelSeis = [];

  for (var i = 0; i <= 10; i++) {
    resultadoTablaDelSeis.push(6 * i);
  }
  return resultadoTablaDelSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arregloMayoresACien = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      arregloMayoresACien.push(array[i]);
    }
  }
  return arregloMayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arregloValor = [];
   for (var i = 0; i < 10; i++) {
     num = num + 2;
     arregloValor.push(num);
      if (num === i) {
        return "Se interrumpió la ejecución";
        break;
      }
   }
   return (arregloValor);
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arregloValor = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    num = num + 2;
    arregloValor.push(num);
   }
   return (arregloValor);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
