function saludar() {
    console.log("¡Hola estudiantes!");
}

function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado);
} 

function pedirYRetornarEntero()
{
	let numeroIngresado=parseInt(prompt("ingrese numero"));	
	return  numeroIngresado;
}

function pedirYRetornarEnteroMensaje(parametroMensaje)
{
	let numeroIngresado=parseInt(prompt(parametroMensaje));	
	return  numeroIngresado;
}

function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}



//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}

function sumarRetornar(a, b) {
    return a + b;
}

//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}
