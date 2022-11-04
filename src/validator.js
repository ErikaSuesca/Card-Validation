const validator = {

  // Función para mostrar los 4 últimos dígitos y ocultar el restante con el caracter #
  maskify (digitos){ 
    let acumulador = ""; // Esta variable es la que se muestra en el gráfico de la tarjeta de crédito
    for (let index = 0; index < digitos.length ; index ++) {
      if (index > digitos.length - 5) {
        acumulador += digitos [index]; // Concatena los números a la tarjeta de crédito
      } else {
        acumulador += "#";// Concatena el simbolo número para ocultar los dígitos
      }
    }
    return acumulador;
  },

  // Algoritmo de lunh
  isValid (digitos){
    
    let esImpar = true; // Esta variable funciona como suiche para saber cuadno una posición es par o impar
    let sumaImpar = 0;
    let sumaPar = 0;

    if(digitos === ''){
      alert("El campo esta vacío");
      return false;
    }
    //2. Esta función me permnite colocar los números de la tarjeta de crédito de derecha a izquierda - convertir en un arrray
    const arrayDigitosReverse = digitos.split('').reverse();            
    
    //3.Esta función se encarga de convertir cada elemento del array que está al revés en tipo entero
    let convertirAnumero = arrayDigitosReverse.map((elemento) => parseInt(elemento));

    //
    for (let index = 0; index < convertirAnumero.length; index++) {
      //Toma el elemento del array convertiranumero que está en esa posición index A=[4,5,6] -> A[1] = 5  
      let digito = convertirAnumero[index];

      if(esImpar) {
        sumaImpar += digito
      } else {
        digito = digito * 2;
        if (digito >= 10) {

          const digitosSeparados = digito.toString().split(""); // 14 => ["1", "4"];
          const convertirDigitosSeparadosAnumero= digitosSeparados.map((digito) => parseInt(digito)); // ["1", "4"] => [1, 4];
          // Suma los digitos del número: [1, 4] => 5

          let sumadigitos = convertirDigitosSeparadosAnumero.reduce((a, b) => a + b);
          digito = sumadigitos;
        }
        sumaPar += digito;
      }
      //Swiche
      esImpar = !esImpar
    }

    // Valida el resultado del módulo para saber si es valido o no
    if((sumaImpar+sumaPar)%10 === 0){
      return true
    } else {
      return false;
    }

  }
};

export default validator;
