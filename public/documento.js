import { emitirTextoDoEditor } from "./socket-front-documento.js";

const editorDeTexto = document.getElementById("editor-texto");

editorDeTexto.addEventListener("keyup", () => {
    emitirTextoDoEditor(editorDeTexto.value);
});

function atualizaTextoDoEditor(texto) {
    editorDeTexto.value = texto;
}

export { atualizaTextoDoEditor }