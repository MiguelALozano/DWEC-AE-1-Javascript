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
    outputOrdenados.textContent = numeros.sort((a, b) => a - b).join(', ');
}

//=====================================================================

function mostrarFilas() {
    filaModa.style.display = "table-row";
    filaMediana.style.display = "table-row";
    filaMedia.style.display = "table-row";
}

//=====================================================================

function mostrarTodas() {
    calcularMedia(numeros);
    calcularModa(numeros);
    calcularMediana(numeros);
}

//=====================================================================

function mostrarMedia() {
    calcularMedia(numeros);
    filaModa.style.display = "none";
    filaMediana.style.display = "none";

    
}

//=====================================================================

function mostrarModa() {
    calcularModa(numeros);
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

function calcularMedia(numeros) {
    const suma = numeros.reduce(function(accum, actual) {
        return accum + actual;
    }, 0);
    const media = (suma / numeros.length).toFixed(1);
    outputMedia.textContent = media;
    console.log(`Media: ${media}`);
}

//=====================================================================

function calcularModa(numeros) {
    const frecuencias = {};     // tendrá ->  "keys": valorNumero , "values": frecuencia // ej:  1: 2, 2: 1, 3: 1, 4: 2
    let modas = [];             // array vacío para modas
    let frecuenciaMaxima = 0;   // frecuenciaMaxima comienza siendo 0
    
    numeros.forEach(function(num) {
        // para cada numero, creamos una propiedad con el valor de ese número en el objeto "frecuencias" (si no existe)
        // aumentamos el valor de la propiedad en 1, PERO si es la primera ocurrencia, como daría undefined => 1
        frecuencias[num] = frecuencias[num] + 1 || 1;
    });

    // iteramos sobre el objeto de frecuencias
    for(const key in frecuencias) {
        // si el valor de la llave es superior al de la frecuenciaMaxima -> asignamos al array de modas el valor pasado a número
        if(frecuencias[key] > frecuenciaMaxima) {
            modas = [Number(key)];  
            frecuenciaMaxima = frecuencias[key];
        } else if(frecuencias[key] === frecuenciaMaxima) {
            modas.push(Number(key));
        }
    }

    // si todos los valores aparecen con la misma frecuencia -> no hay moda (array vacío)
    if(modas.length === Object.keys(frecuencias).length) {
        modas = [];
    }

    const moda = modas.join(', ');
    outputModa.textContent = moda;
    console.log(`Moda: ${moda}`);
}

//=====================================================================

function calcularMediana(numeros) {
    const medio = Math.floor(numeros.length / 2);
    // Ordenamos de menor a mayor:
    const arrOrdenado = numeros.sort((a, b) => a - b);
    const mediana = numeros.length % 2 !== 0 ? 
        arrOrdenado[medio] : ((arrOrdenado[medio-1] + arrOrdenado[medio]) / 2);
    
    outputMediana.textContent = mediana;
    console.log(`Mediana: ${mediana}`);
}

//=====================================================================