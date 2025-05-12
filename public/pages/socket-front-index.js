import { inserirLinkDoDocumento, removerLinkDoDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach((documento) => {
        inserirLinkDoDocumento(documento.nome);
    });
});

function emitirAdicionarDocumento(nomeDoDocumento) {
    socket.emit("adicionar_documento", nomeDoDocumento);
}

socket.on("adicionar_documento_na_interface", (nomeDoDocumento) => {
    inserirLinkDoDocumento(nomeDoDocumento);
});

socket.on("documento_ja_existe", (nomeDoDocumento) => {
    alert(`O documento ${nomeDoDocumento} já existe!`);
});

socket.on("excluir_documento_alert", (nomeDoDocumento) => {
    removerLinkDoDocumento(nomeDoDocumento);
})

export { emitirAdicionarDocumento };