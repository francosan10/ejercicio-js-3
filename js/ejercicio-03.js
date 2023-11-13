// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let resultados = [];

for (let i = 0; i < 11; i++) {
  resultados[i] = 0;
}
// lanzamiento de dos dados 50 veces
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let suma = dado1 + dado2;
  // Aumenta el contador de la suma en el array
  resultados[suma - 2]++;
}

document.write("<div>");
document.write("<table>");
document.write("<thead>");
document.write("<tr>");
document.write("<th><h3>Suma 🎲🎲</h3></th>");
document.write("<th><h3>Apariciones</h3></th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");

for (let i = 2; i <= 12; i++) {
  //document.write("Suma " + i + ": " + resultados[i - 2] + " veces <br>");
  document.write("<tr>");
  document.write(`<th>${i}</th>`);
  document.write(`<th>${resultados[i - 2]}</th>`);
  document.write("</tr>");
}

document.write("</tbody>");
document.write("</table>");
document.write("</div>");
