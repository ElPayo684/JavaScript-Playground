var playlist;

const reproductor = {
    reproducir: function(artist, song){ //Métodos de propiedad
        console.log(`Reproduciendo: '${song}' de ${artist}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    create: function(playlistName){
        playlist = playlistName;
    }
}

reproductor.reproducir('Chistian Nodal & Peso Pluma', 'La Intención');
reproductor.pausar()
reproductor.reproducir('Cartel de Santa', 'Desde Cuando');
reproductor.reproducir('Calvin Harris', 'Feel So Close');

reproductor.delete = function(){
    console.log('Borrando cancion...');
}

reproductor.delete();
reproductor.create('2024 Vibes');

reproductor.play = function(playlist){
    console.log(`Reproduciendo la playlist: ${playlist}`);
}

reproductor.play(playlist);