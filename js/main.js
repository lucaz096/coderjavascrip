
let ingreseNombre

function solicitarNombre(){
    let cliente;

    let bienvenida;

    bienvenida = cliente + "!!! bienvenido a Moda NR ";

    console.log(bienvenida);
    let ingreseNombre = prompt("Ingresar su nombre");
    console.log("Su nombre es: " + ingreseNombre);
    return ingreseNombre; 
} 
function solicitarEmail(){
    let ingreseEmail = prompt("Ingrese su Email");
    console.log("Su mail es: " + ingreseEmail);
    return ingreseEmail;
}
function ropaTemporada(){
let invierno;
let verano;
opciones = parseInt(prompt("1-verano/n2-invierno/n3-Salir"));
while (opciones != "3") {
        switch(opciones) {
            case 1:
                console.log(`invierno`);
                break;

            case 2:
                console.log(`verano`);
                break;

             case 3:
                console.log("Salir");
                break;
    
            default:
                console.log("Ingrese por favor un numero de la lista");
          
}
opciones = parseInt(prompt("1-verano/n2-invierno/n3-Salir"));
}

}
function probarCodigo(){

    let opciones;

    let buzo = 1500, campera = 1100, pantalones = 1300, remeras = 1000, camisas = 1100;

    opciones = parseInt(prompt("Ahora podras ver nuestro catalogo\n1-buzo\n2-campera\n3-pantalones\n4. Salir"));


while (opciones != "4") {
        switch (opciones) {
            case 1:
                console.log(`buzo ${buzo}`);
                break;

            case 2:
                console.log(`camisas ${camisas}`);
                break;

            case 3:
                console.log(`pantalones ${pantalones}`);
                break;
                
            case 4:
                console.log("Salir");
                break;

            default:
                console.log("Ingrese por favor un numero de la lista");
        }
        opciones = parseInt(prompt("1-pantalones\n2-campera\n3-buzo\n4-Salir"));
    }

  }