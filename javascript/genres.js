// Generos de peliculas
fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=7d087a83872914dbc8f7333f0f93e454&language=en-US')
//primer .then (transformo JSON a objeto literal)
.then (function (response) {
    return response.json();
})
//segundo .then 
.then (function (data){
    for (let i = 0; i < 19; i++) {
    console.log(data.genres[i]);

    document.querySelector(".generos").innerHTML +=
    `
    <article>
        <a href="detail-genres.html">
        <div>
        <h3 class="titulos2">${data.genres[i].name}</h3>
        </a>
    </article>
    `
}
})

// Generos de series
fetch ('https://api.themoviedb.org/3/genre/tv/list?api_key=7d087a83872914dbc8f7333f0f93e454&language=en-US')
//primer .then (transformo JSON a objeto literal)
.then (function (response) {
    return response.json();
})
//segundo .then 
.then (function (data){
    for (let i = 0; i < 16; i++) {
    console.log(data.genres[i]);

    document.querySelector(".generosseries").innerHTML +=
    `
    <article>
        <a href="detail-genres.html">
        <div>
        <h3 class="titulos2">${data.genres[i].name}</h3>
        </a>
    </article>
    `
}
})