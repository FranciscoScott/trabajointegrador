let queryStringObj = new URLSearchParams(location.search) // trae lo que este despues del ? (crea una variable)
let id = queryStringObj.get("id") // del queriStringObj agarramos ID (que es lo que nos estamos guardando)

fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=7d087a83872914dbc8f7333f0f93e454')

    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {

        let infoPeliculas = document.querySelector('main')
        infoPeliculas.innerHTML =
            `
    <h1 id="batman" class="titulos2"> ${datos.title} </h1>
    <article class="detalles">
        <img class="imagenesdetail" src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}">
        <ul class="detallespeliculas">
            <li>Fecha de estreno: ${datos.release_date}</li>
            <li>Género: ${datos.genres}</li>
            <li>Duración: ${datos.runtime}</li>
            <li>Calificación: ${datos.vote_average}</li>
            <li>Sinópsis: ${datos.overview} </li>
        </ul>
    </article>


    `
    })