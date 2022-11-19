//pido al usuario ingresar la palabra para adivinar
let palabra = prompt("Ingrese palabra");
let numIntentos = palabra.length * 2;
let adivinar = new Array(palabra.length);
adivinar.fill("_");
while(adivinar.join("") != palabra){
    alert(`Su numero de intentos es de: ${numIntentos}\nPalabra a encontrar: ${adivinar.join(".")}`);
    let letra = prompt("Ingrese letra");
    let comp = palabra.indexOf(letra);
    if(comp == -1){
        alert(`La letra "${letra}" NO se encuentra en la palabra`);
        numIntentos--;
    }else{
        alert(`La letra "${letra}" Si se encuentra en la palabra`);
        adivinar[comp] = palabra[comp];
        numIntentos--;
    }
    if(numIntentos == 0){
        alert("Usted ha superado el numero de intentos... ha perdido :(");
        break;
    }
    if(adivinar.join("") == palabra) alert(`Felicidades!! Usted ha ganado, la palabra era "${palabra}"`);
}
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
