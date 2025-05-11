import { atualizarDocumento, encontrarDocumento } from "./documentosDB.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);
    
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
