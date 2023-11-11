// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

let ciudades = [];

while (true) {
    let ciudad = prompt('Ingrese el nombre de una ciudad');
    
    if (ciudad === null || ciudad === '') {
        break;
    }
    ciudades.push(ciudad);
}
// Mostrar la longitud del arreglo.
document.write(`<p>La longitud del arreglo es ${ciudades.length}</p>`);
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`<p>Los items de las posiciones son: <br><b>Primerer</b> elemento: ${ciudades[0]} <br><b>Segundodo</b> elemento: ${ciudades[2]} <br><b>Ultimo</b> elemento: ${ciudades[ciudades.length -1]}</p>`);
// Añade en última posición la ciudad de París.
ciudades.push('París');
document.write(`<p>La última posicion contiene a: ${ciudades[ciudades.length -1]}</p>`);
// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`El elemento que ocupa la segunda posición es ${ciudades[1]}`);
// Arreglo de ciudades
document.write('<h1>Ciudades elegidas</h1>');

document.write('<ul>');
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write('</ul>');
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1,1,'Barcelona');

document.write('<h2>Ciudades elegidas (con la ciudad de "Barcelona")</h2>');

document.write('<ul>');
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write('</ul>');