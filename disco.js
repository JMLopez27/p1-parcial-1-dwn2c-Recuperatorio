class Disco {

    constructor(nombreDisco, autor, codigo){
    this.nombreDisco = nombreDisco;
    this.autor = autor;
    this.codigo = codigo;
    this.pistas = [];
    }

    agregarPistas(pistas){
        this.pistas.push(pistas);
    }

    mostrar(){
        const section = document.createElement("section");
        const h2 = document.createElement("h2");
        h2.innerText = `Disco: ${this.nombreDisco}`;

        const h3 = document.createElement("h3");
        h3.innerText = `Banda/Autor: ${this.autor}`;

        const h3codigo = document.createElement("h3");
        h3codigo.innerText = `Código: ${this.codigo}`;

        const ol = document.createElement("ol");
        this.pistas.forEach(pistas=>ol.append(pistas.mostrar()));

        section.append(h2, h3, h3codigo, ol);

        return section;
    }
}