//La solución para la moda y los formatos abreviados para mediana y media
//los he obtenido de Coding Journey en el vídeo
//https://www.youtube.com/watch?v=KCnw7Gd8sWk

let numeros = [];

//entrada de datos por teclado

/* for(let i=0; i<10; i++) {
    n = parseInt(prompt('Introduce un número entre 0 y 100' + ' - número ' + (i+1) + ' de 10'));
    numeros.push(n);
} */

//Array de números dados
numeros = [1, 20, -5, 15, 15, 16, 16, 26, 17, 170];

//Array generado de forma automática
/* let i=0;
do {
    numeros.push(Math.floor(Math.random()*100));
    i++;
}while (i < 10); */



console.log(`El valor de numeros es: ${numeros}`);

//Se ordena el array
numeros.sort((a,b) => a-b);
console.log(`El valor de numeros ordenado es: ${numeros}`);

//se valida que el array tenga los números dentro del rango
//sino se elimina el número del array
for (let i=0; i<numeros.length; i++ ){
    if((numeros[i]<0 || numeros[i]>100)){
        numeros.splice(i, 1);
    }
}

console.log(`El nuevo valor de numeros es: ${numeros}`);

/* Zona de funciones */

function media(arr) {

    //con el método reduce(), calculamos la suma del array
    //como segundo parámetro se le da valor 0 que es el valorInicial
    let suma = arr.reduce((a,b) => a+b,0);

    console.log(`ahora reduce vale:  ${suma}`);
    //Rellenamos el html con el resultado.
    let texto = document.getElementById("ventana").innerHTML = `
        <p>Los números usados del array son: ${arr}</p>
        <p>La media aritmética es: ${suma/arr.length} </p>`;

    return texto;
}

function moda(arr) {
    //creamos frequencyTable como objeto vacio que recogerá los elementos del array
    //como un array asociativo.
    const frequencyTable = {};

    //Se rrellena el frequencyTable. Donde la clave es el valor que se coge para
    //el cálculo de la moda y el valor es el número de veces que se repite.
    //Si la clave no existe el valor es uno, si existe le suma 1 más.
    arr.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);

    let moda =  []; //array donde se incluiran los elementos que más se repiten
    let maxFrequency = 0; //Para establecer lo que más se repite
    //Con el bucle a través de la clave se valora si el valor de una determinada
    //clave es mayor que la frecuencia máxima establecida o no.
    //Si lo es, 
    for(const key in frequencyTable) {
        if(frequencyTable[key] > maxFrequency){
            moda = [Number(key)]; //asígno la clave al array moda.
            maxFrequency = frequencyTable[key]; //fijo la nueva frecuencia máxima
        } else if(frequencyTable[key] === maxFrequency) { //Si estricto
            moda.push(Number(key)); //añado el nuevo valor al array.
        }
    }


    //Si el array moda[] tiene la misma longitud que el objeto frequencytAble
    //el array moda, se establece como vacio.
    if(moda.length === Object.keys(frequencyTable).length) moda = [];
    
    let texto = document.getElementById("ventana").innerHTML = `
        <p>Los números del array son: ${arr}</p>
        <p>La moda es: ${moda.length > 0 ? moda : "No existe la moda"} </p>`;

    return texto;
}


function mediana(arr) {

    let texto = document.getElementById("ventana").innerHTML = `
        <p>Los números del array son: ${arr}</p>
        <p>La mediana es: ${arr.length % 2 === 0 ? (arr[arr.length/2-1] + arr[arr.length/2])/2 : arr[Math.floor(arr.length/2)]} </p>`;

    return texto;
}