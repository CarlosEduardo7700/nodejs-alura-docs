import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);
    
    socket.on("documento_selecionado", (nomeDoDocumento) => {
        socket.join(nomeDoDocumento);
    });

    socket.on("texto_do_editor", ({textoDoEditor, nomeDoDocumento}) => {
        // socket.broadcast.emit("texto_do_editor", texto);
        socket.to(nomeDoDocumento).emit("texto_do_editor", textoDoEditor);
    });

});