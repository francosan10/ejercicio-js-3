// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function mayusMinus (texto) {
    if (!isNaN(texto)) {
        document.write(`<p>Ingresaste un valor no valido.</p>`);
    } else if (texto === texto.toUpperCase()) {
        document.write(`<p>La cadena de texto (${texto}) está en mayúsculas.</p>`);
    } else if (texto === texto.toLowerCase()) {
        document.write(`<p>La cadena de texto (${texto}) está en minúsculas.</p>`);
    } else {
        document.write(`<p>La cadena de texto (${texto}) está combinada.</p>`);
    }
}

let Ingresarcadena = prompt('Ingrese un texto');
mayusMinus(Ingresarcadena);