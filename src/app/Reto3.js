let scanf = require('scanf');

console.log("Digita nombre a buscar");

let nombre = scanf('%s');

const personas = ["Pedro","Felipe","Alberto","Miguel","Pablo"];

let busqueda = personas.find((persona) => persona.toLowerCase() == nombre.toLowerCase()); 

busqueda ?  console.log(`Elemento encontrado ${busqueda}`) :  console.log("Elemento no encontrado");