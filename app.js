// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

        function agregarNombre() {
            let input = document.getElementById("nombre");
            let nombre = input.value.trim();
            if (nombre) {
                nombres.push(nombre);
                let lista = document.getElementById("listaNombres");
                let li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
                input.value = "";
            } else {
                alert("Por favor, escribe un nombre.");
            }
        }

        function escogerAmigo() {
            if (nombres.length > 0) {
                let indiceAleatorio = Math.floor(Math.random() * nombres.length);
                let amigoEscogido = nombres[indiceAleatorio];
                document.getElementById("resultado").textContent = "El amigo escogido es: " + amigoEscogido;
            } else {
                alert("Agrega nombres antes de escoger uno.");
            }
        }