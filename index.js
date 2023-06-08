//crear una clase con un molde
let discos = [];

//validacion de el nombre del disco
function validarString(msg){
    let str;
    do{
        str = prompt(msg);
        if(str !== null){
            str = str.trim();
        if(str === ""){
            alert("No dejar el campo incompleto. Vuelva a intentarlo.")
        }
        }
        //validar que no sea numero, que no quede vacío.
    }while (!isNaN(str) || str === "" || str === null);
    return str;
}
//validacion para numeros
function validarCodigo(){
    let codigo;
    let valido;
    do{
        valido = true;
        codigo = parseInt(prompt("Ingrese el código ID del disco (Entre 1 y 999)"));
        if(isNaN(codigo)){
            alert("El código que ingreso no es numerico.");
        }
        else if(codigo < 1 || codigo > 999){
        valido = false;
        alert("El código ingresado no esta dentro del rango (1 - 999)");
        }
        else if(repetirCodigo(codigo)){
            valido = false;
            alert("El código ingresado ya existe.");
        }
    }while(valido === false);
    return codigo;
}

//validacion para duracion de pistas
function validarNumberPistas(msg){
    let duracion;
    let valido;
    do{
        valido = true;
        duracion = parseInt(prompt("Ingrese la duración de la pista en segundos (1 a 7200)"));
        if(isNaN(duracion)){
            valido = false;
            alert("La duración ingresada no es numerica.");
        }
        else if(duracion < 1 || duracion > 7200){
            valido = false;
            alert("La duración ingresada esta fuera del rango permitido. (1 a 7200)");
        }
    }while(valido === false);
    return duracion;
}

function repetirCodigo(codigo){
    for(let disco of discos){
        if(disco.codigo === codigo){
            return true;
        }
    }
    return false;
}

function cargarDisco(){

    let nombreDisco = validarString("Ingrese el nombre del disco");
    let autor = validarString("Ingrese el nombre de la banda o autor");
    let codigo = validarCodigo();
    let disco = new Disco(nombreDisco, autor, codigo);

    do{
        pistas = validarString("Ingrese el nombre de la pista");
        duracionPistas = validarNumberPistas();
  
        disco.agregarPistas(new Pistas(pistas, duracionPistas));
    }while(confirm("¿Desea cargar más pistas?"));
    discos.push(disco);
}

function mostrar(){
    const info = document.querySelector("#estructura")
    info.innerHTML = "";
    discos.forEach(disco=> {
        info.append(disco.mostrar());
    });
};