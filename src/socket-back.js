import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);

    socket.on("texto_do_editor", (texto) => {
        socket.broadcast.emit("texto_do_editor_dos_clientes", texto);
    });
});