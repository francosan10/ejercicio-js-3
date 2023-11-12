// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = prompt('Ingrese su número');
numero = parseInt(numero);

function tabla(numero) {

    document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`);

    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    for (let index = 1; index <= 10; index++) {
        multiplicacion = numero * index;
        document.write(`${numero} X ${index} es igual a: ${multiplicacion}.<br>`);
    }
}

tabla(numero);
