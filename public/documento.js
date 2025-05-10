const socket = io();

const editorDeTexto = document.getElementById("editor-texto");

editorDeTexto.addEventListener("keyup", () => {
    socket.emit("texto_do_editor", editorDeTexto.value);
});

socket.on("texto_do_editor_dos_clientes", (texto) => {
    editorDeTexto.value = texto;
});