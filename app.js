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

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    let nombreSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    asignarTextoElemento('#resultado', `El amigo secreto es: ${nombreSecreto}`);
    document.getElementById('listaAmigos').innerHTML = "";
    listaAmigos = [];
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}