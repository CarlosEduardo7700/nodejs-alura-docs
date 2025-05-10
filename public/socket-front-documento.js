import { atualizaTextoDoEditor } from "./documento.js";

const socket = io();

function emitirTextoDoEditor(textoDoEditor) {
    socket.emit("texto_do_editor", textoDoEditor);
}

socket.on("texto_do_editor", (texto) => {
    atualizaTextoDoEditor(texto);
});

export { emitirTextoDoEditor };