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


//     En el primer  .then() , se convierte la respuesta en formato JSON utilizando  response.json() .  
 
// En el segundo  .then() , se accede a la propiedad  results  del objeto JSON obtenido y se utiliza el método  map()  para crear un nuevo array con los títulos de las películas.  
 
// Finalmente, se muestra el array de títulos de películas en la consola utilizando  console.log() .  



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

















// Busca el personaje de Leia Organa y consigue que se muestre por consola la información del planet aen el que vivie: Alderaan....
// .................[este no va.. nose porque ]

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




async function apicafeAltura(){

    try{
        const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
        const data = await response.json();
        console.log(data)

    }catch(error){
        console.log(error);


    }
}
apicafeAltura()

// -----------------------------------------------------------------------------
const getFilmsLuke = async () => {
  try {
    const result = await fetch('https://swapi.dev/api/people');
    const data = await result.json();

    const characterLuke = data.results.find(character => character.name === "Luke Skywalker");

    const lukeFilmsUrls = characterLuke.films;
    const lukeFilmsData = await Promise.all(lukeFilmsUrls.map(async url => {
      const response = await fetch(url);
      const filmData = await response.json();
      return filmData;
    }));

    lukeFilmsData.forEach(filmData => {
      console.log(`Título: ${filmData.title}`);
      console.log(`Episodio: ${filmData.episode_id}`);
      console.log(`Director: ${filmData.director}`);
      console.log("---------------------");
    });

  } catch (error) {
    console.error(error);
  }
}

getFilmsLuke();

// En este código, se utiliza la sintaxis de 
// async/await
//  para simplificar el código y hacerlo más legible. La función 
// getFilmsLuke
//  utiliza la función  fetch
//  para obtener los datos de la API de la película. Luego, utiliza la función 
// find  para encontrar los datos del personaje de Luke Skywalker en los resultados de la búsqueda.

// Una vez que se encuentra los datos del personaje de Luke Skywalker, se obtienen los URLs de los episodios en los que aparece. Luego, se utiliza la función 
// Promise.all  para esperar a que se completen todas las solicitudes HTTP antes de continuar con la ejecución del código.

// Finalmente, se utiliza un bucle 
// forEach  para recorrer los datos de los episodios y mostrar información sobre cada uno en la consola del navegador.

// En resumen, este código utiliza la API de la película Star Wars: The Force Awakens para obtener información sobre los episodios de la película en los que aparece a Luke Skywalker y luego muestra esta información en la consola del navegador.

// Espero que esto te haya sido útil. Si tienes alguna otra pregunta, no dudes en preguntar.

// ----------------------------------------------------------------------------------------


const getPlanetLeia = () => {
  fetch('https://swapi.dev/api/people')
    .then(result => result.json())
    .then(data => {
      const characterLeia = data.results.find(character => character.name === "Leia Organa");
      const planetUrl = characterLeia.homeworld;
      return fetch(planetUrl);
    })
    .then(leiaPlanet => leiaPlanet.json())
    .then(leiaPlanetData => {
      console.log('Leia es del planeta:', leiaPlanetData.name);
      console.log('Con un diámetro de:', leiaPlanetData.diameter);
      console.log('Y con un clima de:', leiaPlanetData.climate);
    })
    .catch(error => {
      console.log(error);
    });
}
 getPlanetLeia();
// -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
const getPlanetLeiA = async () =>{
  const result = await fetch('https://swapi.dev/api/people')
  const data = await result.json()

  const characterLeia = data.results.find(character => character.name === "Leia Organa")

  const planetUrl = characterLeia.homeworld
  const leiaPlanet = await fetch(planetUrl)

  const leiaPlanetData =await leiaPlanet.json()
  console.log('Leia es del planeta:', leiaPlanetData.name);
  console.log('Con un diametro de:', leiaPlanetData.diameter);
  console.log('Y con un clima de:', leiaPlanetData.climate);
   
}

// En este código, se utiliza la sintaxis de 
// async/await
//  para simplificar el código y hacerlo más legible. La función 
// getPlanetLeia
//  utiliza la función  fetch
//  para obtener los datos de la API de la película. Luego, utiliza la función 
// find  para encontrar los datos del personaje de Leia Organa en los resultados de la búsqueda.

// Una vez que se encuentra los datos del personaje de Leia Organa, se obtiene el URL del planeta donde vive. Luego, se utiliza la función  fetch
//  para obtener los datos del planeta utilizando el URL obtenido.

// Finalmente, se utiliza la función 
// json  para convertir los datos del planeta en un objeto JavaScript y se muestra información sobre el planeta en la consola del navegador.

// En resumen, este código utiliza la API de la película Star Wars: The Force Awakens para obtener información sobre la planeta donde vive y es posible que Leia Organa y luego muestra esta información en la consola del navegador.

// ---------------------------------------------------------------------------------------------
async function fetchCharacterData() {
    
      
  const charactersResponse = await fetch('https://swapi.dev/api/people/');
  const charactersData = await charactersResponse.json();
  
  
  const c3poData = charactersData.results.find(character => character.name === 'C-3PO');
  const c3poFilmsUrls = c3poData.films;

  
  const c3poFilmsData = await Promise.all(c3poFilmsUrls.map(url => fetch(url).then(response => response.json())));


  c3poFilmsData.forEach(filmData => {
    console.log(`Título: ${filmData.title}`);
    console.log(`Episodio:, ${filmData.episode_id}`);
    console.log(`Director:, ${filmData.director}`);
    console.log("---------------------");
  });
  }
  fetchCharacterData()

  // Este código utiliza la API de la película Star Wars: The Force Awakens para obtener información sobre los episodios de la película en los que aparece a C-3PO.

  // La función  fetchCharacterData  utiliza la función 
  // fetch
  //  para obtener los datos de la API de la película. Luego, utiliza la función  find
  //  para encontrar los datos del personaje de C-3PO en los resultados de la búsqueda.
  
  // Una vez que se encuentra los datos del personaje de C-3PO, se obtienen los URLs de los episodios en los que aparece. Luego, se utiliza la función 
  // Promise.all  para esperar a que se completen todas las solicitudes HTTP antes de continuar con la ejecución del código.
  
  // Finalmente, se utiliza un bucle  forEach
  //  para recorrer los datos de los episodios y mostrar información sobre cada uno en la consola del navegador.
  
  // En resumen, este código utiliza la API de la película Star Wars: The Force Awakens para obtener información sobre los episodios de la película en los que aparece a C-3PO y luego muestra esta información en la consola del navegador


