
const apiKey = "7d087a83872914dbc8f7333f0f93e454" ;

//Formulario del header

//Pagina Home de WeStream

//Peliculas Populares en We Stream

let url = (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
let peliculasPopulares = document.querySelector(".sectioncontenedora")

fetch (url)

.then (function(respuesta){
    return respuesta.json();
})
.then(function(datos){ 
    for (let i = 0; i <= 5; i++){ 
    console.log(datos.results[i]);
    
    //estructura de nuestra pagina a partir de innerHTML

        peliculasPopulares.innerHTML += `
        <article class="articlecontenedor">
            <div>
                    <img class="imageneshome" src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}"  alt="${datos.results[i].title} "> 
            </div>
            <h3 class="titulofav">${datos.results[i].title}</h3>
            <p class="fechas">${datos.results[i].release_date}</p>
           
            <a class="fechas" href="detail-movie.html?id=${datos.results[i].id}"> Más información </a> 
        <article/>
        `
}
})

//Series Populares en We Stream

let url2 = (`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
let seriesPopulares = document.querySelector(".sectioncontenedora2")

fetch (url2)

.then(function (respuesta) {
    return respuesta.json()
})

.then(function (datos) {
    for (let i = 0; i <= 5; i++) {
        console.log(datos.results[i]);

    //estructura de nuestra pagina a partir de innerHTML
    seriesPopulares.innerHTML += `
    <article class="articlecontenedor">
        <div>
                <img class="imageneshome" src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}"  alt="${datos.results[i].name} "> 
        </div>
        <h3 class="titulofav">${datos.results[i].name}</h3>
        <p class="fechas">${datos.results[i].first_air_date}</p>
       
        <a class="fechas" href="detail-serie.html?id=${datos.results[i].id}"> Más información </a> 
    <article/>
    `
}
})
//Lo más visto en Peliculas de WeStream

let url3 = (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
let masVisto = document.querySelector(".sectioncontenedora3")

fetch (url3)

.then(function (respuesta) {
    return respuesta.json()
})

.then(function (datos) {
    for (let i = 0; i <= 5; i++) {
        console.log(datos.results[i]);

 //estructura de nuestra pagina a partir de innerHTML

 masVisto.innerHTML += `
 <article class="articlecontenedor">
     <div>
             <img class="imageneshome" src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}"  alt="${datos.results[i].title} "> 
     </div>
     <h3 class="titulofav">${datos.results[i].title}</h3>
     <p class="fechas">${datos.results[i].release_date}</p>
    
     <a class="fechas" href="detail-movie.html?id=${datos.results[i].id}"> Más información </a> 
 <article/>
 `
}
})
 
