//Explicación de los Cambios
Selección de Elementos:

itemInput: Selecciona el campo de entrada para nuevos ítems.

addButton: Selecciona el botón "Agregar".

clearButton: Selecciona el botón "Limpiar".

itemList: Selecciona el contenedor de la lista.

Funciones:

loadItems(): Carga y muestra los ítems desde el almacenamiento local en la lista. Se usa la clase list-group-item para que los ítems se muestren correctamente con el estilo de Bootstrap.

saveItems(items): Guarda los ítems en el almacenamiento local.

handleAddItem(): Agrega un nuevo ítem a la lista y actualiza la vista. También limpia el campo de entrada.

handleClearList(): Limpia el almacenamiento local y la vista de la lista.
Eventos:

Botón "Agregar": Añade un ítem al hacer clic.

Botón "Limpiar": Limpia la lista y el almacenamiento local al hacer clic.

Cargar ítems al iniciar la página: La función loadItems() se llama cuando se carga la página para asegurarse de que la lista esté actualizada con los ítems almacenados.