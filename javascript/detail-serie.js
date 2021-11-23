let queryStringObj2 = new URLSearchParams(location.search); // trae lo que este despues del ? (crea una variable)
let id2 = queryStringObj2.get("id"); // del queriStringObj agarramos ID (que es lo que nos estamos guardando)

function addSerieToFav(id) {
    let favoritos = localStorage.getItem('pelisFavoritas');
    if (!favoritos) {
      favoritos = '{}';
    }
    favoritos = JSON.parse(favoritos) // conviertede texto a objeto; .stringify es la inversa
  if (!favoritos.series) {
    favoritos.series = [];
    }
  favoritos.series.push(id);
  
    let favoritosString = JSON.stringify(favoritos);
    localStorage.setItem('pelisFavoritas', favoritosString);
    alert("Se ha agregado la pelicula a tu lista de favoritos")
  }

fetch(`https://api.themoviedb.org/3/tv/${id2}?api_key=7d087a83872914dbc8f7333f0f93e454`)

    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
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
            <button onClick="addSerieToFav(${id2})"> Agregar a favoritos </button></id>
        </ul>
    </article>

    `
    })