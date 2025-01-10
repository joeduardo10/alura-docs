import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log("usuário conectado ID", socket.id);
    socket.on("selecionar_documento", (nomeDocumento) => {
        socket.join(nomeDocumento);
    })
    // socket.on("disconnect", (motivo) => {
    //     console.log(`Cliente "${socket.id}" desconectado!
    //     Motivo: ${motivo}`);
    // });
    socket.on("Texto_Editor", ({texto,nomeDocumento}) => {
        socket.to(nomeDocumento).emit("Texto_Editor_Clientes", texto);
    });
});