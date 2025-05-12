import { emitirExcluirDocumento, emitirNomeDoDocumentoSelecionado, emitirTextoDoEditor } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDoDocumento = parametros.get("nome");

const tituloDoDocumento = document.getElementById("titulo-documento");
tituloDoDocumento.textContent = nomeDoDocumento || "Documento sem título";

emitirNomeDoDocumentoSelecionado(nomeDoDocumento);

const botaoExcluir = document.getElementById("excluir-documento");

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDoDocumento);
});

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

function alertarERedirecionar(nome) {
    if (nome === nomeDoDocumento){
        alert(`O documento ${nome} foi deletado!`);
        window.location.href = "/";
    }
}

export { atualizaTextoDoEditor, alertarERedirecionar }