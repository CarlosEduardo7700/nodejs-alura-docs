import io from "./server.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "Texto de JavaScript..."
    },
    {
        nome: "Node",
        texto: "Texto de Node..."
    },
    {
        nome: "Socket.io",
        texto: "Texto de Socket.io..."
    },
];

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);
    
    socket.on("documento_selecionado", (nomeDoDocumento, devolverTexto) => {
        socket.join(nomeDoDocumento);

        const documento = encontrarDocumento(nomeDoDocumento);

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
    const documento = documentos.find((documento) => {
        return documento.nome === nomeDoDocumento;
    })

    return documento;
}