let numbers=[]; //guarda los numeros que introduce el usuario
let sortedNumbers=[]; //guarda los numeros validos (del 0 al 100) ordenados de menor a mayor
function insertNumbers(){    
    let counter=1;
    let number;
    do{
        //¿Como controlo que no meta uno o varios espacios o enter si numero?
        number=Number(prompt('Número ' + counter));
        if(!isNaN(number)){
            numbers[counter]=number;
            counter++;
        } else{
            console.log('No has introducido un número, intentalo de nuevo');
        }
    }while (counter<=10)
    console.log('Numeros recogidos');
    console.log(numbers);
}

//Me quedo los numeros del 0 al 100 y los ordeno de menor a mayor. 
function orderValidNumbers(){
    
    //guardo los numeros validos (0 al 100)
    for (let number of numbers){
        if(number >= 0 && number <=100){
            sortedNumbers.push(number);
        }
    }

    //ordeno de menor a mayor los numeros validos
    let aux;
    for (let i=0; i<sortedNumbers.length-1;i++){
        for (let j=0;j<sortedNumbers.length-1-i;j++){
            if (sortedNumbers[j]>sortedNumbers[j+1]){
                aux=sortedNumbers[j];
                sortedNumbers[j]=sortedNumbers[j+1];
                sortedNumbers[j+1]=aux;
            }
        }

    }

    //sortedNumbers.sort(compareFunction);
    console.log('Numeros en array numbers')
    console.log(numbers);
    console.log('Numeros validos ordenados')
    console.log(sortedNumbers);
}



//La funcion compareFunction tiene el criterio de ordenacion para la funcion sort

function compareFunction(a,b){
    return a-b;
}


function media(){
    let suma=0;
    let media;
    for(let number of sortedNumbers){
            suma += number;
    }
    console.log('La media es ' + suma/sortedNumbers.length);
}
//La mediana es el valor que se encuentra en el centro de una sucesion ordenada
//si el numero de elementos es par se cogen los 2 elementos centrales se suman y
//se divide entre 2
function mediana(){
    let mediana;
    //calculo la posicion media del array ordenado, si hay un numero impar de elementos ese puntos contiene la mediana
    //si el numero de elementos es par calculo la mediana con la suma de los 2 elementos centrales /2
    let mitadSortedNumbers=Math.floor(sortedNumbers.length/2);
    mediana = (sortedNumbers.length % 2 == 1 ? sortedNumbers[mitadSortedNumbers] : (sortedNumbers[mitadSortedNumbers-1] + sortedNumbers[mitadSortedNumbers])/2)
    console.log('La mediana es ' + mediana);
}

function moda(){
    let frecuencyTable = []; //Array asociativo. Numeros de sortedNumbers junto al numero de veces que se repite
    let timesRepeated; //Numero de veces que se repite un numero
    let maxRepetitions = 0; // Numero maximo de repeticiones de un numero en sortedNumbers
    let moda=[]; // Array asociativo. Contiene los numero mas repetidos junto a su numero de repeticiones
    
    //Recorro sortedNumbers y creo frecuencyTable (numeros en sortedNumbers junto a las veces que se repiten)
    for (let numbers of sortedNumbers){
        timesRepeated = 0;
        for (let number of sortedNumbers){
            if(numbers == number){
                timesRepeated++;
            }
        }
        frecuencyTable[numbers] = timesRepeated;
    }
    console.log('Tabla de frecuencias');
    console.log(frecuencyTable);
    
    //En frecuencyTable busco el mayor numero de repeticiones de un numero

    for (let index in frecuencyTable){
        if(frecuencyTable[index] > maxRepetitions){
            maxRepetitions = frecuencyTable[index];
        }
    }
    console.log('Mayor numero de repeticiones ' + maxRepetitions);

    //Guardo en moda todos los numeros que se repiten el numero maximo de repeticiones

    for (let index in frecuencyTable){
        if (frecuencyTable[index] == maxRepetitions){
            moda[index] = frecuencyTable[index];
        }
    }
    console.log('Array Moda');
    console.log(moda);
    console.log('Otra forma de mostrar la moda');
    for (let index in moda){
        console.log(index);
    }
    
}
