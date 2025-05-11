import { atualizaTextoDoEditor } from "./documento.js";

const socket = io();

function emitirNomeDoDocumentoSelecionado(nomeDoDocumento) {
    socket.emit("documento_selecionado", nomeDoDocumento, (texto) => {
        atualizaTextoDoEditor(texto);
    });
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

export { emitirTextoDoEditor, emitirNomeDoDocumentoSelecionado };