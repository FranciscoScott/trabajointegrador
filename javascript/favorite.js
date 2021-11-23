const apiKey = "7d087a83872914dbc8f7333f0f93e454" ;

let favoritos = localStorage.getItem('pelisFavoritas');

/*
 * { peliculas: [1, 2, 3] }
 */
favoritos = JSON.parse(favoritos) // conviertede texto a objeto; .stringify es la inversa

let peliculasPopulares = document.getElementById("favoritesContent-peliculas")
let favsHTMLPelis = '';

let seriesPopulares = document.getElementById("favoritesContent-series")
let favsHTMLSeries = '';

function removeFromFav(id) {
  let favoritos = localStorage.getItem('pelisFavoritas');
  favoritos = JSON.parse(favoritos) // conviertede texto a objeto; .stringify es la inversa

  favoritos.peliculas = favoritos.peliculas.filter(e => e != id);
  let cardPelicula = document.getElementById(`card-movie-${id}`);
  cardPelicula.parentNode.removeChild(cardPelicula); 

  let favoritosString = JSON.stringify(favoritos);
  localStorage.setItem('pelisFavoritas', favoritosString);
}

function removeSeriesFromFav(id) {
  let favoritos = localStorage.getItem('pelisFavoritas');
  favoritos = JSON.parse(favoritos) // conviertede texto a objeto; .stringify es la inversa

  favoritos.series = favoritos.series.filter(e => e != id);
  let cardSeries = document.getElementById(`card-series-${id}`);
  cardSeries.parentNode.removeChild(cardSeries); 

  let favoritosString = JSON.stringify(favoritos);
  localStorage.setItem('pelisFavoritas', favoritosString);
}

// [1, 56, 12].length = 3
function cargarFav(peliculas) {
  if (peliculas.length == 0) {
    peliculasPopulares.innerHTML += favsHTMLPelis; 
    return;
  }
  let url = (`https://api.themoviedb.org/3/movie/${peliculas[0]}?api_key=${apiKey}`)
  fetch(url)
    .then( function(respuesta) {
      return respuesta.json();
    })
    .then( function(respuesta) {
    favsHTMLPelis = `${favsHTMLPelis}
        <article class="articlecontenedor" id="card-movie-${peliculas[0]}">
            <div>
              <img class="imageneshome"
                src="https://image.tmdb.org/t/p/w342/${respuesta.poster_path}"  alt="${respuesta.title} "> 
            </div>
            <h3 class="titulofav">${respuesta.title}</h3>
            <p class="fechas">${respuesta.release_date}</p>
            <a class="fechas" href="detail-movie.html?id=${peliculas[0]}"> Más información </a> 
            <button onClick="removeFromFav(${peliculas[0]})"> - </button>
        </article>
        `;
      cargarFav(peliculas.splice(1));
  });
}

function cargarFavSeries(series) {
  if (series.length == 0) {
    seriesPopulares.innerHTML += favsHTMLSeries; 
    return;
  }

  // let serieTitle = document.getElementById("tituloSerieFav");
  // serieTitle.style.display = 'block';

  let url = (`https://api.themoviedb.org/3/tv/${series[0]}?api_key=${apiKey}`)
  fetch(url)
    .then( function(respuesta) {
      return respuesta.json();
    })
    .then( function(respuesta) {
    favsHTMLSeries = `${favsHTMLSeries}
        <article class="articlecontenedor" id="card-series-${series[0]}">
            <div>
              <img class="imageneshome"
                src="https://image.tmdb.org/t/p/w342/${respuesta.poster_path}"  alt="${respuesta.title} "> 
            </div>
            <h3 class="titulofav">${respuesta.name}</h3>
            <p class="fechas">${respuesta.first_air_date}</p>
            <a class="fechas" href="detail-movie.html?id=${series[0]}"> Más información </a> 
            <button onClick="removeSeriesFromFav(${series[0]})"> - </button>
        </article>
        `;
      cargarFavSeries(series.splice(1));
  });
}

cargarFav(favoritos.peliculas);
cargarFavSeries(favoritos.series);
