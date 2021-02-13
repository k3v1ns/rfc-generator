console.log("Mi primer script");

/*
    Este escript debera calcular el RFC de una persona dada su informacion personal. 
    Rules: 
        1.- Primer Vocal del apellido Paterno   OK 
        2.- Primera letra del apellido Materno  OK 
        3.- Primera letra el primer Nombre
            3.1.- Debera conciderar las excepciones de JOSE y de MARIA.     IN PROGRESS
        4.- Debera Colocar la fecha de nacimiento en formato 'aaMMdd'.      TO DO
        5.- DEBERA COLOCAR UNA X si el acronimo formula las siguiente palabras 
            - PENE
            - CULO 
            - CACA
 */

let primerNombre = "MAria";
let segundoNombre = "Kevin";
let apellidoPaterno = "Gasca";
let apellidoMaterno = "Pérez";
let fechaNacimiento = "01/11/2002"; 
const rfcEsperado = "GAPK021101"


let nombreFinal;

if (primerNombre.toUpperCase() == "JOSE") {
    
    nombreFinal = segundoNombre; 
    
} else if(primerNombre.toUpperCase() == "MARIA") {
  
  nombreFinal = segundoNombre;
} else {
    nombreFinal = primerNombre;
}

///
///  Se extrajeron y concatenaron caracteres de los datos para hacer un RFC   
///
let rfcCalculado = apellidoPaterno.substr(0,2)
                    + apellidoMaterno.substr(0,1) 
                    + nombreFinal.substr(0,1)
                    + fechaNacimiento.substr(8,2)
                    + fechaNacimiento.substr(3,2)
                    + fechaNacimiento.substr(0,2);

///
///   se utiliza la función .toUpperCase para convertir todo en mayusculas 
///   
rfcCalculado = rfcCalculado.toUpperCase();

///  
///   en el primer console.log imprime el rfc calculado con los datos que tienes
///   en el segundo console.log imprime el rfcEsperado 
///   En el tercer console.log compara los resultados y te dice si esta bien 
console.log("RFC calculado: " + rfcCalculado);
console.log("RFC user: " + rfcEsperado);
console.log(rfcCalculado == rfcEsperado);

















let concatenarUno = primerNombre + " " + segundoNombre;
let concatenarDos =  `Mi RFC es: ${primerNombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno}`;
let concatenarTres  =  concatenarUno + concatenarDos;



// console.log("(1,2): "    + apellidoPaterno.substr(0,2));  
// console.log("(1,2): "    + apellidoMaterno.substr(0,1));  
// console.log("(1,2): "    + primerNombre.substr(0,1));   

// console.log("(1,2): "    + fechaNacimiento.substr(8,2));   
  
// console.log("(5,7): "    + fechaNacimiento.substr(3,2));   
// console.log("(1,4): "    + fechaNacimiento.substr(0,2));   