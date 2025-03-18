console.log("Ejecutando el sistema")

let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    listaAmigos.push(nombre);
    actualizarListaAmigos();
    document.getElementById('amigo').value = "";
}

function actualizarListaAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";
    listaAmigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}