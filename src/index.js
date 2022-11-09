import validator from './validator.js';

// Identifica el campo que ingresa el número de la tarjeta
let inputNumero = document.getElementById("inputNumero");
inputNumero.addEventListener('input',actualizarValor);

//Identifica el botón para guardar
let  botonValidar = document.getElementById('boton-validar');
botonValidar.addEventListener('click', mostrarSiEsValido);
//botonValidar.addEventListener('click',actualizarValor)

//Campo para mostrar el número de la tarjeta con los datos ocultos
let parrafoNumeroTdc = document.getElementById("NumeroTdc");

// Funcion para mostrar en el html si el número es valido, aplica algoritmo de Lunh
function mostrarSiEsValido(){
	if(validator.isValid(document.getElementById('inputNumero').value)){
		alert('Número de tarjeta VÁLIDO');
		alert('Gracias por sumarte al cuidado del medio ambiente');
	}else{
		alert('Número de tarjeta INVÁLIDO');
	}
}
// Función para actualizar el valor del número en la tarjeta de crédito mostrando unicamente los 4 últimos digitos
function actualizarValor(){
	parrafoNumeroTdc.innerText = validator.maskify(document.getElementById('inputNumero').value);
}
console.log(validator);

 