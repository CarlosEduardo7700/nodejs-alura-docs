import { colecaoDeDocumentos } from "./database/dbConnect.js";

function obterDocumentos() {
    const documentos = colecaoDeDocumentos.find().toArray();

    return documentos;
}

function adicionarDocumento(nomeDoDocumento) {
    const resultado = colecaoDeDocumentos.insertOne({
        nome: nomeDoDocumento,
        texto: "",
    });

    return resultado;
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

function excluirDocumento(nomeDoDocumento) {
    const resultado = colecaoDeDocumentos.deleteOne({
        nome: nomeDoDocumento,
    })

    return resultado;
}

export { encontrarDocumento, atualizarDocumento, obterDocumentos, adicionarDocumento, excluirDocumento }