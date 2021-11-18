let queryStringObj = new URLSearchParams (location.search) 
let id = queryStringObj.get("id") 

//nos traemos la lista de generos devuelta y recorrerla
fetch ('https://api.themoviedb.org/3/discover/movie?api_key=7d087a83872914dbc8f7333f0f93e454&with_genres=27')