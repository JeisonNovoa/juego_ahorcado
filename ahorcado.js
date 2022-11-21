//pido al usuario ingresar la palabra para adivinar
let palabra = prompt("Ingrese palabra");
//el numero de intentos es igual a la longitud de la palabra * 2
let numIntentos = palabra.length * 2;
//creo un arreglo del tamaño de la palabra
let adivinar = new Array(palabra.length);
//relleno todo el arreglo con '_'
adivinar.fill("_");
//mientras el arreglo convertido en string sea diferente a la palabra se va a ejecutar el ciclo
while(adivinar.join("") != palabra){
    alert(`Su numero de intentos es de: ${numIntentos}\nPalabra a encontrar: ${adivinar.join(".")}`);
    //pido la letra a buscar en la palabra
    let letra = prompt("Ingrese letra");
    //verifico si la letra se encuentra en la palabra con el metodo indexOf
    let comp = palabra.indexOf(letra);
    if(comp == -1){
        alert(`La letra "${letra}" NO se encuentra en la palabra`);
        numIntentos--;
    }else{
        alert(`La letra "${letra}" Si se encuentra en la palabra`);
        adivinar[comp] = palabra[comp];
        numIntentos--;
    }
    //si los intento llegaron a 0 y ademas el arreglo convertido a string sigue siendo diferente de la palabra ya perdio el juego
    if(numIntentos == 0 && adivinar.join("") != palabra){
        alert("Usted ha superado el numero de intentos... ha perdido :(");
        break;
    }
    //si el arreglo convertido a string es igual a la palabra, gana el juego
    if(adivinar.join("") == palabra) alert(`Felicidades!! Usted ha ganado, la palabra era "${palabra}"`);
}
///////////////////////////Este es otra forma de hacerlo sin el metodo indexOf//////////////////////
// while(adivinar.join("") != palabra){
//     alert(`Su numero de intentos es de: ${numIntentos}\nPalabra a encontrar: ${adivinar.join(".")}`);
//     let letra = prompt("Ingrese letra");
//     while(adivinar.join("") != palabra){
//         if(letra != palabra[i]){
//             i++;
//             if(i == palabra.length){
//                 alert(`La letra "${letra}" NO se encuentra en la palabra`);
//                 i = 0;
//                 numIntentos--;
//                 break;
//             }
//         }else{
//             adivinar[i] = palabra[i];
//             alert(`La letra "${letra}" Si se encuentra en la palabra`);
//             i = 0;
//             numIntentos--;
//             break;
//         }
//     }
//     if(numIntentos == 0){
//         alert("Usted ha superado el numero de intentos... ha perdido :(");
//         break;
//     }
//     if(adivinar.join("") == palabra){
//         alert(`Felicidades!! Usted ha ganado, la palabra era "${palabra}"`);
//     }
// }
//haaaaaaaaaaaaaaaa
