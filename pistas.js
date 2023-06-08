class Pistas{

    constructor(pistas, duracionPistas){
        this.pistas = pistas;
        this.duracionPistas = duracionPistas;
    }

    mostrar(){
        const li = document.createElement("li");
        li.innerText = `Canción: ${this.pistas} / Duración: `;

        const span = document.createElement("span");
        span.innerText = `${this.duracionPistas} Seg.`;
        if(this.duracionPistas > 180){
            span.classList.add("altaDuracion");
        }
        else{
            span.classList.add("bajaDuracion");
        }

        li.append(span);
        return li;
    }
}