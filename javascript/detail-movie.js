let queryStringObj = new URLSearchParams(location.search) // trae lo que este despues del ? (crea una variable)
let id = queryStringObj.get("id") // del queriStringObj agarramos ID (que es lo que nos estamos guardando)

function addMovieToFav(id) {
    let favoritos = localStorage.getItem('pelisFavoritas');
    if (!favoritos) {
      favoritos = '{}';
    }
    favoritos = JSON.parse(favoritos) // conviertede texto a objeto; .stringify es la inversa
    if (!favoritos.peliculas) {
      favoritos.peliculas = [];
    }
    favoritos.peliculas.push(id);
  
    let favoritosString = JSON.stringify(favoritos);
    localStorage.setItem('pelisFavoritas', favoritosString);
    alert("Se ha agregado la pelicula a tu lista de favoritos")
  }
  
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
            <li>Género: <a href="detail-genres-peliculas.html?id=${datos.genres[0].id}"> ${datos.genres[0].name}</a></li>
            <li>Duración: ${datos.runtime}</li>
            <li>Calificación: ${datos.vote_average}</li>
            <li>Sinópsis: ${datos.overview} </li>
            <button onClick="addMovieToFav(${id})"> Agregar a favoritos </button></id>
        </ul>
       
    </article>

    `
    })

    document.getElementById("buscador").addEventListener("submit", function (e) {
      e.preventDefault();
      let textoBuscado = document.getElementById("busqueda-text").value;
      let tieneErrores = false;

      if (textoBuscado == "") {
          alert("Debes escribir algo!");
          tieneErrores = true;
      } else if (textoBuscado.length <= 3) {
          tieneErrores = true;
          alert("Debes escribir al menos tres caracteres!");
      }

      if (!tieneErrores) {
          this.submit();
      }

  });

