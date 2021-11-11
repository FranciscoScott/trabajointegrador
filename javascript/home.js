window.onload = function() {

const apiKey = "ce6192ca048843364a3b46473fb16087" ;

//Formulario del header

//Pagina Home de WeStream

//Peliculas Populares en We Stream

let url = (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)

let peliculasPopulares = document.querySelector(".sectioncontenedora")

fetch (url)

.then (function(respuesta){
    return respuesta.json();
})
.then(function(informacion){ 
    for (let i = 0; i <= 5; i++){ 
    console.log(informacion.results[i]);
    
    //Comenzamos con la estructura de nuestra pagina a partir de innerHTML

        peliculasPopulares.innerHTML += `


           
        `
}
})
.catch(function (error) {
    console.log('el error fue ' + error);
})

//Series Populares en We Stream

//Lo más visto en Peliculas de WeStream

}
