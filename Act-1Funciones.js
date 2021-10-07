let array = [];
let arrayOk = [];

array[0] = 6;
array[1] = 66;
array[2] = 66;
array[3] = -8;
array[4] = 111;
array[5] = 20;
array[6] = 8.5;
array[7] = 66;
array[8] = 18;
array[9] = 123;

function verArray(){
    console.log(array);
    //console.log(array[4]);
    //console.log(array.length);
    for(let numero of array){
        console.log(`Los número del array son: ${numero}`);
    }
}

function sumar(){
    let suma = 0;
    let contador = 0;
    
    for(let numero of array){
        if (numero >= 0 && numero <=100){
            console.log(`El ${numero} está entre 0 y 100`);
            suma += numero;
            //arrayOk[contador] = numero;
            //contador ++;
        } else {
            console.log(`El ${numero} **** NO ESTÁ **** entre 0 y 100`)
        }
    } 
    console.log(arrayOk)
    
    console.log(`Los números válidos son: ${arrayOk.length}`); // también puedo poner la variable contador
    console.log(`La SUMA de los número comprendidos entre 0 y 100 es = ${suma}`)
}

function calculaMedia(){
    var suma = 0;
    var contador = 0;
    
    for(let numero of array){
        if (numero >= 0 && numero <=100){
            suma += numero;
            arrayOk[contador] = numero;
            contador ++;
        }
    }
    let media = suma/contador;
    console.log(`La MEDIA de los número comprendidos entre 0 y 100 es = ${media.toFixed(2)}`)
}

function ordenaArray(){
    arrayOk.sort();
    // console.log("************** ORDENADO ALFABETICAMENTE **************");
    // console.log(arrayOk);
    console.log();
    console.log("************** ORDENADO DE MENOR A MAYOR **************");
    arrayOk.sort((a, b)=> a - b);
    console.log(arrayOk);
}

function calculaMediana(){
    if (arrayOk.length%2 == 0){
        console.log("************** MEDIANA PAR **************");
        let num1 = arrayOk.length/2 -1;
        let num2 = arrayOk.length/2;
        console.log(`${arrayOk[num1]} y ${arrayOk[num2]}`);
        let mediana = (arrayOk[num1] + arrayOk[num2]) /2;
        console.log(`La MEDIANA del array par completo es = ${mediana}`);
    } else {
        console.log("************** MEDIANA IMPAR **************");
        let mediana = Math.floor(arrayOk.length/2);
        console.log(`La MEDIANA del array impar es = ${arrayOk[mediana]}`);
    }
}

let moda = [];
function calculaModa(){
    contador = 0;
    for(let i = 0; i < arrayOk.length - 1; i++){
        if (arrayOk[i] == arrayOk[i+1]){
            moda[contador] = arrayOk[i];
            contador ++;
            moda[contador] = arrayOk[i];
            // contador ++;
        }
    }
    console.log(moda);
}