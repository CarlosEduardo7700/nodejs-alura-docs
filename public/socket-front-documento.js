import { atualizaTextoDoEditor } from "./documento.js";

const socket = io();

function emitirTextoDoEditor(textoDoEditor) {
    socket.emit("texto_do_editor", textoDoEditor);
}

socket.on("texto_do_editor_dos_clientes", (texto) => {
    atualizaTextoDoEditor(texto);
});

export { emitirTextoDoEditor };