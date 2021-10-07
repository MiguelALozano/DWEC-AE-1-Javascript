// ELEMENTOS A MANIPULAR DEL DOM:
const todosInputs = document.querySelectorAll('.input_numero');
const contenedorBotones = document.querySelector('.contenedor_botones');
const outputs = document.querySelectorAll('.output');
const outputValidos = document.querySelector('.output_validos');
const outputOrdenados = document.querySelector('.output_ordenados');
const outputMedia = document.querySelector('.output_media');
const outputModa = document.querySelector('.output_moda');
const outputMediana = document.querySelector('.output_mediana');
const filaMedia = document.querySelector('.fila_media');
const filaModa = document.querySelector('.fila_moda');
const filaMediana = document.querySelector('.fila_mediana');
//=====================================================================
let numeros = [];
//=====================================================================

contenedorBotones.addEventListener('click', function(event) {
    const target = event.target;
    
    if(target.classList.contains('boton')) {
        crearArray();
    }

    if(target.classList.contains('boton_todas')) {
        mostrarTodas();
    } else if(target.classList.contains('boton_media')) {
        mostrarMedia();
    } else if(target.classList.contains('boton_moda')) {
        mostrarModa();
    } else if(target.classList.contains('boton_mediana')) {
        mostrarMediana();
    } else if(target.classList.contains('boton_borrar')) {
        todosInputs.forEach(function(input) {
            input.value = "";
        });
        borrarOutput();
    }
});

//=====================================================================

function crearArray() {
    mostrarFilas();
    borrarOutput();
    numeros = [];
    todosInputs.forEach(function(input) {
        const valor = Number(input.value);
        if(valor >= 0 && valor <= 100) {
            numeros.push(valor);    
        }
    });
    mostrarValidos(numeros);
}

//=====================================================================

function mostrarValidos(numeros) {
    outputValidos.textContent = numeros.join(', ');
    outputOrdenados.textContent = ordenarArray(numeros).join(', ');
}

//=====================================================================

function mostrarFilas() {
    filaModa.style.display = "table-row";
    filaMediana.style.display = "table-row";
    filaMedia.style.display = "table-row";
}

//=====================================================================

function mostrarTodas() {
    calculaMedia(numeros);
    moda(numeros);
    calcularMediana(numeros);
}

//=====================================================================

function mostrarMedia() {
    calculaMedia(numeros);
    filaModa.style.display = "none";
    filaMediana.style.display = "none";

    
}

//=====================================================================

function mostrarModa() {
    moda(numeros);
    filaMedia.style.display = "none";
    filaMediana.style.display = "none";
}

//=====================================================================

function mostrarMediana() {
    calcularMediana(numeros);
    filaMedia.style.display = "none";
    filaModa.style.display = "none";
}

//=====================================================================

function borrarOutput() {
    outputs.forEach(function(output) {
        output.textContent = "";
    });
}

//=====================================================================

function calculaMedia(numeros) {
    //Variable que recoge la suma de los números del array
    var suma = 0;

    //Bucle para realizar la suma
    for(let numero of numeros) {
        suma +=numero
    }

    //Calculo de la media que recogemos en la variable media
    //redondeada a dos decimales
    let media = (suma / numeros.length).toFixed(2);
    //Resultado que se muestra en el td de la tabla por del DOM
    outputMedia.textContent = media;
    //Resultado mostrado por consola.
    console.log(`La MEDIA de los número comprendidos entre 0 y 100 es = ${media}`);
}

//=====================================================================

function moda(numeros) {
    //Objeto vacio que se rellena con las frecuencias de números repetidos
    let frecuencyTable = {};
    // Numero maximo de repeticiones de un numero en sortedNumbers
    let maxRepetitions = 0; 
    // Array asociativo. Contiene los numero mas repetidos junto a su numero de repeticiones
    let moda=[]; 
    //ordenamos el array
    let sortedNumbers = ordenarArray(numeros);
     
    //Se rrellena el frequencyTable. Donde la clave es el valor que se coge para
    //el cálculo de la moda y el valor es el número de veces que se repite.
    //Si la clave no existe el valor es uno, si existe le suma 1 más.
    sortedNumbers.forEach(elem => frecuencyTable[elem] = frecuencyTable[elem] + 1 || 1);

    //Con el bucle a través de la clave se valora si el valor de una determinada
    //clave es mayor que la frecuencia máxima establecida o no.
    for (const index in frecuencyTable){
        if (frecuencyTable[index] > maxRepetitions){
            moda = [Number(index)];
            maxRepetitions = frecuencyTable[index];
        }else if(frecuencyTable[index] === maxRepetitions){
            moda.push(Number(index));
        }
    }
    //Si el length de moda es igual al length del objeto frecuencyTable, 
    //el array de moda se fija a vacio.
    if(moda.length === Object.keys(frecuencyTable).length) moda = [];

    //Se muestra por consola
    console.log(`La moda es: ${moda}`);

    //Se muestra por html
    moda = moda.length <= 1?moda:moda.join(', ');
    outputModa.textContent = moda;
}

//=====================================================================

function calcularMediana(numeros) {
    const medio = Math.floor(numeros.length / 2);
    // Ordenamos de menor a mayor:
    const arrOrdenado = ordenarArray(numeros);
    const mediana = numeros.length % 2 !== 0 ? 
        arrOrdenado[medio] : ((arrOrdenado[medio-1] + arrOrdenado[medio]) / 2);
    
    //Para mostrar por Html
    outputMediana.textContent = mediana;
    console.log(`La mediana del array es: ${mediana}`);
}

//=====================================================================
function ordenarArray(numeros) {
    //recogemos el array ordenado en una variable que retornamos
    let arrayOrdenado = numeros.sort((a,b) => a-b);

    return arrayOrdenado;
}
//=====================================================================