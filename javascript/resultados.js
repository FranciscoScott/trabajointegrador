let queryStringObj = new URLSearchParams(location.search)

let busqueda = queryStringObj.get("busqueda")

fetch(`https://api.themoviedb.org/3/search/movie?api_key=7d087a83872914dbc8f7333f0f93e454&language=en-US&query=${busqueda}&page=1&include_adult=false`)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        console.log(datos)

        let contenedor = document.querySelector(".sectioncontenedora")
        for (let i = 0; i < datos.results.length; i++) {
            const element = datos.results[i];


            contenedor.innerHTML += `
        
        <article class= articlecontenedor>
                <img class="imageneshome" src="https://image.tmdb.org/t/p/w342/${element.poster_path}" alt="${element.title}">
                <h3 class="titulofav"><a href="">${element.title}</a></h3>
                <a class="fechas" href="detail-movie.html?id=${datos.results[i].id}"> Más información </a> 

            </article>
        
        `

        }
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
    })

