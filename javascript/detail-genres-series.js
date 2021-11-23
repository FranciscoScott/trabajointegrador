let queryStringObj = new URLSearchParams(location.search)
let id = queryStringObj.get("id")

fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=7d087a83872914dbc8f7333f0f93e454&language=en-US')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let contenedorGeneral = document.querySelector("main")
        for (let i = 0; i < data.genres.length; i++) {
            if (data.genres[i].id == id) {
                contenedorGeneral.innerHTML = `
                <h2 id="accion" class="titulosgeneros">${data.genres[i].name}</h2>
                <section class="seriesgeneros">
                </section>
                `
            }
        }
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=7d087a83872914dbc8f7333f0f93e454&with_genres=' + id) // para buscar las peliculas del genero que quiera

            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                let detallesGenerosSeries = document.querySelector(".seriesgeneros")
                for (let i = 0; i < datos.results.length; i++) {
                    detallesGenerosSeries.innerHTML += `
            <article>
            <div><img class="imagenesgeneros" src="https://image.tmdb.org/t/p/w342/${datos.results[i].poster_path}" alt="${datos.results[i].name}"></div>
            <h3><a href="detail-serie.html?id=${datos.results[i].id}">${datos.results[i].name}</a></h3>
            </article>
            `
                }
            })
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
