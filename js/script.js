// const ListaDeNumeros=[2,3,5,7,11];
// console.log(ListaDeNumeros[0]);
// console.log(ListaDeNumeros[4]);

// let numerosInpares =[1, 3, 5, 7];
// cantidad =numerosInpares.length;
// console.log("primera forma:")
// for(i = 0; cantidad > i; i++){
//     console.log(numerosInpares[i]);
// }
// console.log("segunda forma:")
// for(const valor of numerosInpares){
//     console.log(valor);
// }
const listaDeNumeros= [2, 3, 5, 7, 11];
listaDeNumeros[2] = 13;
console.log(listaDeNumeros[2]);

// listaDeNumeros = [];
// console.log(listaDeNumeros.length);muestra el tamaño del
// listaDeNumeros[0] = 100;
// console.log(listaDeNumeros[0]);
// listaDeNumeros[1] = 102;
// console.log( listaDeNumeros[1]);
// listaDeNumeros[2] = 10;
// console.log(listaDeNumeros[2]);
// listaDeNumeros[3] = 23;
// console.log(listaDeNumeros[3]);
//  listaDeNumeros[4] = -3;
//  console.log(listaDeNumeros[4]);
const mixedArray = [3,'hola mundo' , 3627.5];
cantidad = mixedArray.length;
for(i =0; cantidad > i; i++){
    console.log(mixedArray[i]);
}

let questions =[
    ['¿cual es la capital de peru?' , 'lima'],
    ['¿cuantos millones de peruanos somos?' , 33],
    ['¿cual es la moneda de peru?' , 'soles'],
];
console.log(questions[0][0]);
console.log(questions[0][1]);
console.log(questions[1][0]);
console.log(questions[1][1]);
console.log(questions[2][0]);
console.log(questions[2][1]);


