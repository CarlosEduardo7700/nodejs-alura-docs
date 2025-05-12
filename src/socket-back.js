import { adicionarDocumento, atualizarDocumento, encontrarDocumento, obterDocumentos } from "./documentosDB.js";
import io from "./server.js";

io.on("connection", (socket) => {
    socket.on("obter_documentos", async (devolverDocumentos) => {
        const documentos = await obterDocumentos();

        devolverDocumentos(documentos);
    });

    socket.on("adicionar_documento", async (nomeDoDocumento) => {
        const documentoJaExiste = (await encontrarDocumento(nomeDoDocumento)) !== null;

        if (documentoJaExiste) {
            socket.emit("documento_ja_existe", nomeDoDocumento)
        } else {
            const resultado = await adicionarDocumento(nomeDoDocumento);
    
            if (resultado.acknowledged) {
                io.emit("adicionar_documento_na_interface", nomeDoDocumento);
            }
        }
    });
    
    socket.on("documento_selecionado", async (nomeDoDocumento, devolverTexto) => {
        socket.join(nomeDoDocumento);

        const documento = await encontrarDocumento(nomeDoDocumento);

        if (documento) {
            // socket.emit("texto_documento", documento.texto);
            devolverTexto(documento.texto)
        }
    });

    socket.on("texto_do_editor", async ({textoDoEditor, nomeDoDocumento}) => {
        // socket.broadcast.emit("texto_do_editor", texto);
        const dadosDaAtualizacao = await atualizarDocumento(nomeDoDocumento, textoDoEditor);
        
        if (dadosDaAtualizacao.modifiedCount) {
            socket.to(nomeDoDocumento).emit("texto_do_editor", textoDoEditor);
        }
    });

});
