// almacenar.js

// Selecciona los elementos del DOM
const itemInput = document.getElementById('item');
const addButton = document.getElementById('agregar');
const clearButton = document.getElementById('limpiar');
const itemList = document.getElementById('contenedor');

// Función para cargar los ítems desde el almacenamiento local
function loadItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item'; // Agrega la clase Bootstrap
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Función para guardar los ítems en el almacenamiento local
function saveItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

// Función para manejar el evento de agregar ítem
function handleAddItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(newItem);
        saveItems(items);
        loadItems();
        itemInput.value = '';
    }
}

// Función para manejar el evento de limpiar la lista
function handleClearList() {
    localStorage.removeItem('items');
    loadItems();
}

// Configura los eventos de los botones
addButton.addEventListener('click', handleAddItem);
clearButton.addEventListener('click', handleClearList);

// Carga los ítems al iniciar la página
window.addEventListener('load', loadItems);
