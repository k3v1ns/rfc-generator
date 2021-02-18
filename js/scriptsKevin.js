console.log("Mi primer script");

/*
    Este escript debera calcular el RFC de una persona dada su informacion personal. 
    Rules: 
        1.- Primer Vocal del apellido Paterno   OK 
        2.- Primera letra del apellido Materno  OK 
        3.- Primera letra el primer Nombre
            3.1.- Debera conciderar las excepciones de JOSE y de MARIA.     OK
        4.- Debera Colocar la fecha de nacimiento en formato 'aaMMdd'.      OK
        5.- DEBERA COLOCAR UNA X si el acronimo formula las siguiente palabras FY  
            - PENE
            - CULO 
            - CACA
            - PITO
            - PUTO
            - PUTA

 */

let primerNombre = "jose";
let segundoNombre = "ana";
let apellidoPaterno = "puerta";
let apellidoMaterno = "torres";
let fechaNacimiento = "01/11/2002"; 

///
/// esta variable sirve para almacenar el valor del RFC final 
///
let rfcCalculado;

///
///  esta variable sirve como auxiliar para la regal 3.1 
/// 
let nombreFinal;

///
/// esta variable usa las primeras cuatro letras del RFC
///
let inicioRfc;

///
///  esta condicion sirve para saber si el primer nombre es jose 
///  
if (primerNombre.toUpperCase() == "JOSE") {
    
    nombreFinal = segundoNombre; 
    
} 
///   
///  si no es jose pero si es maria 
/// 
else if(primerNombre.toUpperCase() == "MARIA") {
  
  nombreFinal = segundoNombre;
} 
///
///   si no es jose ni maria si sigue usando el primer nombre 
///
else {
    nombreFinal = primerNombre;
}

inicioRfc = apellidoPaterno.substr(0,2)
            + apellidoMaterno.substr(0,1) 
            + nombreFinal.substr(0,1);

if(inicioRfc.toUpperCase() ==  "PENE"){

    inicioRfc = "PENX";
}
else if(inicioRfc.toUpperCase() == "CULO"){

    inicioRfc = "CULX";
}

else if(inicioRfc.toUpperCase() == "CACA"){

   inicioRfc = "CACX";
}

else if(inicioRfc.toUpperCase() == "PITO"){

    inicioRfc = "PITX";
}

else if(inicioRfc.toUpperCase() == "PUTO"){

    inicioRfc = "PUTX";

}

else if(inicioRfc.toUpperCase() == "PUTA"){

    inicioRfc = "PUTX";
}

///
///  Se extrajeron y concatenaron caracteres de los datos para hacer un RFC   
///
rfcCalculado = inicioRfc
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





















