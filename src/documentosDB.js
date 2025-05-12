import { colecaoDeDocumentos } from "./database/dbConnect.js";

function obterDocumentos() {
    const documentos = colecaoDeDocumentos.find().toArray();

    return documentos;
}

function encontrarDocumento(nomeDoDocumento) {
    const documento = colecaoDeDocumentos.findOne({
        nome: nomeDoDocumento,
    });

    return documento;
}

function atualizarDocumento(nomeDoDocumento, textoDoDocumento) {
    const dadosDaAtualizacao = colecaoDeDocumentos.updateOne({
        nome: nomeDoDocumento,
    }, {
        $set: {
            texto: textoDoDocumento,
        }
    });

    return dadosDaAtualizacao;
}

export { encontrarDocumento, atualizarDocumento, obterDocumentos }