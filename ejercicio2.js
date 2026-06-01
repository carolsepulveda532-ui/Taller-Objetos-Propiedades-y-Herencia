class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha() {
        return `Titulo: ${this.titulo} | Genero: ${this.genero} | Año: ${this.anio}`;
    }

    retirar() {
        this.disponible = false;
        return `${this.titulo} fue retirado`;
    }

    estado() {
        if (this.disponible) {
            return `${this.titulo} esta disponible`;
        }
        return `${this.titulo} esta retirado`;
    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        let horas = Math.floor(this.duracion / 60);
        let minutos = this.duracion % 60;
        return `${horas}h ${minutos}min`;
    }

    ficha() {
        return `${super.ficha()} | Duracion: ${this.duracionFormateada()}`;
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
        return this.episodiosPorTemporada;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return `${super.ficha()} | Temporadas: ${this.temporadas} | Total episodios: ${this.totalEpisodios()}`;
    }
}

const pelicula1 = new Pelicula("Matrix", "Accion", 1999, 136);
const pelicula2 = new Pelicula("Avatar", "Ciencia Ficcion", 2009, 162);
const pelicula3 = new Pelicula("Titanic", "Drama", 1997, 194);

const serie1 = new Serie("Dark", "Misterio", 2017, 3);
const serie2 = new Serie("Breaking Bad", "Drama", 2008, 5);
const serie3 = new Serie("Stranger Things", "Ciencia Ficcion", 2016, 4);

serie1.registrarEpisodios(10);
serie2.registrarEpisodios(13);
serie3.registrarEpisodios(8);

const catalogo = [
    pelicula1,
    pelicula2,
    pelicula3,
    serie1,
    serie2,
    serie3
];

console.log("CATALOGO");

for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].ficha());
}

console.log("\nRETIROS");

pelicula2.retirar();
serie1.retirar();

console.log(pelicula2.estado());
console.log(serie1.estado());

let disponibles = 0;

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible === true) {
        disponibles++;
    }
}

console.log("\nDisponibles:", disponibles);