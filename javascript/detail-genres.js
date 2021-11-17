let queryStringObj = new URLSearchParams (location.search) // trae lo que este despues del ? (crea una variable)
let id = queryStringObj.get("id") // del queriStringObj agarramos ID (que es lo que nos estamos guardando)

/* Peliculas*/
fetch('https://api.themoviedb.org/3/genre/movie/list'+id+'?api_key=7d087a83872914dbc8f7333f0f93e454')

.then (function(respuesta){
    return respuesta.json();
})
.then(function(datos){

    let detallesGeneros = document.querySelector('main')
    detallesGeneros.innerHTML =
    `
    <h1 class="titulos2"> ${datos.name} </h1> `
})

/* Series*/
fetch('https://api.themoviedb.org/3/genre/tv/list'+id+'?api_key=7d087a83872914dbc8f7333f0f93e454')

.then (function(respuesta){
    return respuesta.json();
})
.then(function(datos){

    let detallesGeneSeries = document.querySelector('main')
    detallesGeneSeries.innerHTML =
    `
    <h1 class="titulos2"> ${datos.name} </h1> `
})


