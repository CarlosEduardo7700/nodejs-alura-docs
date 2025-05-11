import { colecaoDeDocumentos } from "./dbConnect.js";
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

    socket.on("texto_do_editor", ({textoDoEditor, nomeDoDocumento}) => {
        // socket.broadcast.emit("texto_do_editor", texto);
        const documento = encontrarDocumento(nomeDoDocumento);

        if (documento) {
            documento.texto = textoDoEditor;
            
            socket.to(nomeDoDocumento).emit("texto_do_editor", textoDoEditor);
        }
    });

});

function encontrarDocumento(nomeDoDocumento) {
    const documento = colecaoDeDocumentos.findOne({
        nome: nomeDoDocumento,
    });

    return documento;
}