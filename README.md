# Fecth_Asyn
vamos a ver lo que es Asincronia, y un par de metodos, syn y fech y wait



En programación, una distinción fundamental es la que se da entre sincronía y asincronía temporal. Se entiende por sincronía cuando el código espera a que se resuelva una operación antes de pasar a la siguiente. Esto es lo que ha venido ocurriendo hasta ahora durante estas últimas semanas. Veamos un ejemplo obvio:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);  // 15
En este fragmento de código, cuando se lee la tercera línea (la línea que contiene el console.log(sum)), el reduce ya ha acabado y ha producido un resultado, por eso el console.log(sum) nos devuelve 15, y no undefined, error u otro resultado. La variable sum está llena porque el reduce ha termiando y la ha llenado con su resultado. Esto, que parece obvio, no siempre es el caso en JavaScript. Veamos el siguiente ejemplo:

Fetch
Podemos utilizar una URL para adquirir datos. A esa página de la que cogemos datos es a lo que llamamos API. La información que dará la Api siempre será un objeto

const pokemons = fetch("https://pokeapi.co/api/v2/pokemon");
console.log(pokemons);