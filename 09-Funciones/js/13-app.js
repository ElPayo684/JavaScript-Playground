var playlist;

const reproductor = {
    song: '',
    reproducir: (artist, song) => console.log(`Reproduciendo: '${song}' de ${artist}`),
    pausar: () => console.log('Pausando...'),
    create: playlistName => playlist = playlistName,
    delete: () => console.log('Borrando cancion...'),
    play: playlist => console.log(`Reproduciendo la playlist: ${playlist}`),

    set newSong(song){
        this.song = song; // this es para buscar dentro del objeto
        console.log(`Añadiendo: ${song}`);
    },
    get findingSong(){
        console.log(`Reproduciendo: ${this.song}`)
    }
}

reproductor.newSong = 'Clika Nostra';
reproductor.findingSong;

reproductor.reproducir('Chistian Nodal & Peso Pluma', 'La Intención');
reproductor.pausar()
reproductor.reproducir('Cartel de Santa', 'Desde Cuando');
reproductor.reproducir('Calvin Harris', 'Feel So Close');
reproductor.delete();
reproductor.create('2024 Vibes');
reproductor.play(playlist);