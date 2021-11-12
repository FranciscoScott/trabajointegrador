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
    
    //estructura de nuestra pagina a partir de innerHTML

        peliculasPopulares.innerHTML += `
        <article>
    <a href= "./javascript/detail-movie.js?id=${datos.results[i].id}" class= "titulos2"> ${datos.results[i].title} </a>

    <div> <a href="./detail-movie.html?id=${datos.results[i].id}"> <img src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].title}" class="imagenesdetail"> </a> </div>

    <p>Fecha de Estreno: ${datos.results[i].release_date}</p>
    </article>  
        `
}
})
.catch(function (error) {
    console.log('el error fue ' + error);
})

//Series Populares en We Stream

//Lo más visto en Peliculas de WeStream

}
