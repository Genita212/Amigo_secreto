// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let imgAmigo= document.getElementById("amigoimg")
let buttonLimpiar= document.getElementById("nuevo")
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado")
let inputAmigo = document.getElementById("amigo");

formatoInicial();

function formatoInicial(){
    nombres=[] 
    inputAmigo.value = "";
    buttonLimpiar.style.display="none";
    imgAmigo.setAttribute("src", "https://definicion.de/wp-content/uploads/2014/05/silencio.png");
    resultado.textContent = "";
    lista.textContent="";
}

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
    if (nombre) {
        nombres.push(nombre);
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
        inputAmigo.value = "";
    } else {
        alert("Por favor, escribe un nombre.");
    }
}

function sortearAmigo() {
    if (nombres.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let amigoEscogido = nombres[indiceAleatorio];
        imgAmigo.setAttribute("src","https://images.emojiterra.com/google/android-oreo/512px/1f44d.png")
        resultado.textContent = "El amigo escogido es: " + amigoEscogido;
        buttonLimpiar.style.display="block"
    } else {
        alert("Agrega nombres antes de escoger uno.");
    }
}