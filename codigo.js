// Este sistema es un simulador de calculadora simple

const suma = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const mult = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const div = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2:Resta, 3: Multiplicación, 4: División");

if (operacion == 1) {
    let numero1 = prompt("Primer número a sumar");
    let numero2 = prompt("Segundo número a sumar");
    resultado = suma(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

if (operacion == 2) {
    let numero1 = prompt("Primer número a restar");
    let numero2 = prompt("Segundo número a restar");
    resultado = resta(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

if (operacion == 3) {
    let numero1 = prompt("Primer número a multiplicar");
    let numero2 = prompt("Segundo número a multiplicar");
    resultado = mult(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

if (operacion == 4) {
    let numero1 = prompt("Primer número a dividir");
    let numero2 = prompt("Segundo número a dividir");
    resultado = div(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
