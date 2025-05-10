const socket = io();

const editorDeTexto = document.getElementById("editor-texto");

editorDeTexto.addEventListener("keyup", () => {
    socket.emit("texto_do_editor", editorDeTexto.value);
});