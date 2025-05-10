import { emitirNomeDoDocumentoSelecionado, emitirTextoDoEditor } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDoDocumento = parametros.get("nome");

const tituloDoDocumento = document.getElementById("titulo-documento");
tituloDoDocumento.textContent = nomeDoDocumento || "Documento sem título";

emitirNomeDoDocumentoSelecionado(nomeDoDocumento);

const editorDeTexto = document.getElementById("editor-texto");

editorDeTexto.addEventListener("keyup", () => {
    emitirTextoDoEditor({
        textoDoEditor: editorDeTexto.value, 
        nomeDoDocumento: nomeDoDocumento
    });
});

function atualizaTextoDoEditor(texto) {
    editorDeTexto.value = texto;
}

export { atualizaTextoDoEditor }