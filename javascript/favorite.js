let api = `https://api.themoviedb.org/3/movie/`;
let api_key = `7d087a83872914dbc8f7333f0f93e454`;

	let tracks= window.localStorage.getItem("tracks")

    if(tracks){
        tracks=  tracks.split(',');
    }else{
        tracks=  [];
    }

    for(i = 0; i < tracks.length; i++){
        let url = `https://api.themoviedb.org/3/movie/${tracks[i]}`;
                
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then (function(datos){
               
                let playlists = document.getElementById("favs");
             
                playlists.innerHTML +=` `; 
                
            })
            .catch(function(error){
                console.log("el error es:" + error)
            });
    }
   		



