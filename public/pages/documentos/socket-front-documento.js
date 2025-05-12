import { alertarERedirecionar, atualizaTextoDoEditor } from "./documento.js";

const socket = io();

function emitirNomeDoDocumentoSelecionado(nomeDoDocumento) {
    socket.emit("documento_selecionado", nomeDoDocumento, (texto) => {
        atualizaTextoDoEditor(texto);
    });
}

function emitirExcluirDocumento(nomeDoDocumento) {
    socket.emit("excluir_documento", nomeDoDocumento);
}

function emitirTextoDoEditor(dados) {
    socket.emit("texto_do_editor", dados);
}

// socket.on("texto_documento", (texto) => {
//     atualizaTextoDoEditor(texto);
// });

socket.on("texto_do_editor", (texto) => {
    atualizaTextoDoEditor(texto);
});

socket.on("excluir_documento_alert", (nomeDoDocumento) => {
    alertarERedirecionar(nomeDoDocumento);
})

export { emitirTextoDoEditor, emitirNomeDoDocumentoSelecionado, emitirExcluirDocumento };