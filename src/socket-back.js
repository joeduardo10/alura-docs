import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log("usuário conectado ID", socket.id);
    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });
    socket.on("Texto_Editor", (texto) => {
        socket.broadcast.emit("Texto_Editor_Clientes", texto);
    });

});