function sayHekllo(nombre){
    console.log(`welcome ${nombre}`);
}
sayHekllo("oscar")
// --------------------------------------------------


// Haz una petición a la API y consigue una lista de los personajes de Stars Wars.
const list = fetch("https://swapi.dev/api/people/")
.then(response => response.json())
.then(personaje => console.log(personaje));
//.Then() para manejar la respuesta exitosa de la Api. o solicitud
// --------------------------------------------------
// --------------------------------------------------






// Busca cómo conseguir hacer una petición para que te llegue sólo la información de Darth Vader, y muéstrala por consola.

const darthVader = fetch('https://swapi.dev/api/people/4/')

 .then(response => response.json())
 .then(data => console.log(data));


console.log("🚀 ~ file: script.js:19 ~ darthVader:", darthVader)







// Muestra por consola la lista de películas en las que aparece el personaje de Luke Skywalker.
const films = fetch('https://swapi.dev/api/films/')

.then(response => response.json())

 .then(data => console.log(data));

console.log("🚀 ~ file: script.js:25 ~ films:", films)












// ------------------------------------------------------------------------------
// -------------Pelis en las que aprece luke!!-----------------------------------------------------------------
// -------------Este esta por titulos y me devulve el objeto conb todos los titulos------------------------------------------------------

fetch('https://swapi.dev/api/films/')

  .then(response => response.json())


  .then(luke => {


    const movies = luke.results.map(film => film.title);




    console.log(movies);



  })
  .catch(error => {
    console.log(error);
  });
// .catch(error => console.error(error));



// --------Encontrar a like skyWalker------------------------------------------------------
async function getLuke(){

    try {
        const response = await fetch('https://swapi.dev/api/people/1/');

        const lukeSkywalker = await response.json();

        console.log(lukeSkywalker);





    } catch (error) {
        console.log(error);
    }
    
}
getLuke()
// -----------------Aqui no lo encontre  luke---------------------------------------------
async function getMovies() {
    try {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const luke = await response.json();
      const movies = luke.films.map(film => film.title);
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  }
  
  getMovies();

// -------------------------------------------------------------------------------
async function getMoviesOfLukeSkywalker() {


    try {
      const response = await fetch('https://swapi.dev/api/people/1/');
       
// fetch() para realizar una solicitud HTTP GET a la URL "https://swapi.dev/api/people/1/".
// La palabra clave await
// se utiliza para esperar a que se complete la solicitud y se devuelva la respuesta.
      const lukeSkywalker = await response.json();
      //Esta línea obtiene un array con los URLs de las películas en las que aparece Luke Skywalker.
      const moviesUrls = lukeSkywalker.films;
      
        /*
        Esta línea utiliza el método Promise.all()
 para esperar a que se completen todas las solicitudes HTTP GET de las películas y crear un nuevo array con los títulos de las películas. La función map() se utiliza para crear un nuevo array con los URLs de las películas y la función async se utiliza para definir una función asíncrona que realiza una solicitud HTTP GET a cada URL y devuelve el título de la película.
 */
       const movies = await Promise.all(moviesUrls.map(async (url) => {

        const movieResponse = await fetch(url);

        const movie = await movieResponse.json();

        return movie.title;
      }));
       console.log("Películas de Luke Skywalker:", movies);
    } catch (error) {
      console.log(error);
    }
  }
   getMoviesOfLukeSkywalker();










// Busca el personaje de Leia Organa y consigue que se muestre por consola la información del planet aen el que vivie: Alderaan.....................[este no va.. nose porque ]
async function LeiaOrgan() {
    try {
      const leiA = await fetch('https://swapi.dev/api/people/5/');
      const leiB = await leiA.json();

      const homeworldResponse = await fetch(leiB.homeworld);

      const homeworld = await homeworldResponse.json();

      console.log("Planeta de Leia Organa:", homeworld.name);

    } catch (error) {
      console.log(error);
    }
  }
  LeiaOrgan();
// -----[leia Organ]----------[este si va]-----------------------------------------------------
        // async function LeiaOrgan() {
        //     try {
        //       const leiA = await fetch('https://swapi.dev/api/people/5/');

        //       const leiB = await leiA.json();

        //       const homeworldResponse = await fetch(leiB.homeworld);

        //       const homeworld = await homeworldResponse.json();

        //       console.log("Planeta de Leia Organa:", homeworld.name);

        //     } catch (error) {
        //       console.log(error);
        //     }
        //   }
        //    LeiaOrgan();
// -----------------------------------------------------------------------------------
function LeiaOrgan() {
    fetch('https://swapi.dev/api/people/5/')
      .then(response => response.json())
      .then(leiB => {
        fetch(leiB.homeworld)

          .then(homeworldResponse => homeworldResponse.json())

          .then(homeworld => {
            console.log("Planeta de Leia Organa:", homeworld.name);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
   LeiaOrgan();
//    ---------------------------------------------------------------------------

// En este ejercicio, debes conseguir el resultado final encadenando varias peticiones a la API.

// Obtén la lista completa de personajes, y filtra el resultado para guaradar la url de C-3PO.

// Haz una petición para C-3PO usando dicha información y encuentra las películas en las que aparece, guardándolas en una variable.

// Haz una petición por cada película para mostrar por consola su información.
// Una vez hayas terminado los ejercicios, prueba a realizar una carta de personaje como la de la foto. Tendréis que usar DOM para crearla. La estructura será:













