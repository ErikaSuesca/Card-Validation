const validator = {

  // Función para mostrar los 4 últimos dígitos y ocultar el restante con el caracter #
  maskify (digitos){ 
    let acumulador = "";
    for (let index = 0; index < digitos.length ; index ++) {
      if (index > digitos.length - 5) {
        acumulador = acumulador + digitos [index];
      } else {
        acumulador = acumulador + "#";
      }
    }
    return acumulador;
  },

  // Algoritmo de lunh
  isValid (digitos){
    
    let esImpar = true;
    let sumaImpar = 0;
    let sumaPar = 0;

    //Esta función me permnite colocar los números de la tarjeta de crédito de derecha a izquierda - cambia orden
    const arrayDigitosReverse = digitos.split('').reverse();
    let convertirAnumero = arrayDigitosReverse.map((digito) => parseInt(digito));

    for (let index = 0; index < convertirAnumero.length; index++) {
      
      let digito = convertirAnumero[index];
      if(esImpar == true) {
        sumaImpar += digito
      } else {
        digito = digito * 2;
        if (digito >= 10) {

          const digitosCadena = digito.toString().split(""); // 14 => ["1", "4"];
          const digitosEnNumeros = digitosCadena.map((digito) => parseInt(digito)); // ["1", "4"] => [1, 4];
          // Suma los digitos del número: [1, 4] => 5
          let sumadigitos = digitosEnNumeros.reduce((a, b) => a + b);
          digito = sumadigitos;
        }
        sumaPar += digito;
        digito = 0;
      }
      esImpar = !esImpar
    }
    if((sumaImpar+sumaPar)%10 === 0){
      return true
    } else {
      return false;
    }
      
    }

    
     
  /*
    if((sumaImpar + sumaPar) % 10 == 0) {
      return true
    } 
    return false*/


    // Esta función permite cambiar cada elemento del array a número, previamente estaba en string de forma automática
    //let convertirAnumero = arrayNumerosReverse.map((numero) => parseInt(numero));
    //console.log("El array de números en Enteros es: " + arrayNumerosReverse);
    /*
  }
  */
};

export default validator;
