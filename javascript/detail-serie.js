
let queryStringObj2 = new URLSearchParams (location.search); // trae lo que este despues del ? (crea una variable)
let id2 = queryStringObj2.get("id"); // del queriStringObj agarramos ID (que es lo que nos estamos guardando)


fetch(`https://api.themoviedb.org/3/tv/${id2}?api_key=7d087a83872914dbc8f7333f0f93e454`)

.then (function(respuesta){
    return respuesta.json();
})
.then(function(datos){
    console.log(datos);

    let infoSeries = document.querySelector('main')
    infoSeries.innerHTML =
    `
    <h1 id="breaking" class="titulos2">${datos.name}</h1>
    
    <article class="detalles">
        <img class="imagenesdetail" src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.name}">
        <ul class="detallespeliculas">
            <li>Fecha de estreno:${datos.first_air_date}</li>
            <li>Género: </li>
            <li>Duración: ${datos.number_of_episodes}</li>
            <li>Calificación: ${datos.vote_average}</li>
            <li>Sinópsis: ${datos.overview}</li>
        </ul>
    </article>

    `
})