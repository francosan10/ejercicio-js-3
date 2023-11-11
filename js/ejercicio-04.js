// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function parImpar(numero) {
    
    if (isNaN(numero) || numero == null || numero == "") {
        document.write("Por favor, introduce un número válido.");
    } else if (numero % 2 === 0) {
        document.write(`<p>El número ${numero} es par.</p>`);
    } else {
        document.write(`<p>El número ${numero} es impar.</p>`);
    }
}

let numeroEvaluado = prompt('Ingrese un numero');
parImpar(numeroEvaluado);