let contenido = [];

contenido.push('Colita de Cuadril');
contenido.push('Kg de Asado');
contenido.push('Kg de vacío');

let messageWA = 'https://wa.me/541131736969?text=';

messageWA += encodeURI('Hola, te hago un pedido.')

const recorrer = contenido.forEach(item=>{
  console.log(item);
	item = encodeURI(item);
  messageWA += `${item}%0D%0A`;
});

let mensajeFinal = encodeURI(messageWA);

console.table(contenido)
console.log(messageWA)