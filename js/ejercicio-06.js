// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla. La fórmula del perímetro  es p = 2*(a +b)

let ladoA = prompt("Ingrese un valor");
let ladoB = prompt("Ingrese un segundo valor");
ladoA = parseInt(ladoA);
ladoB = parseInt(ladoB);

document.write("<h2>Perímetro del rectángulo.</h2>");
function perimetro(a, b) {
  let resultado = 2 * (a + b);
  document.write(`<p>El cálculo del perímetro es igual a ${resultado}.</p>`);
}

perimetro(ladoA, ladoB);
