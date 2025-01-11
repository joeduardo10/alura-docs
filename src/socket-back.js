import io from "./servidor.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript...",
    },
    {
        nome: "Node",
        texto: " texto de Node...",
    },
    {
        nome: "Socket.io",
        texto: "texto de socket.io...",
    },
];
io.on("connection", (socket) => {
    console.log("usuário conectado ID", socket.id);
    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);

        const documento = encontrarDocumento(nomeDocumento);

        if (documento) {
            // socket.emit("texto_documento", documento.texto);
            devolverTexto(documento.texto);
        }
        
    })
    // socket.on("disconnect", (motivo) => {
    //     console.log(`Cliente "${socket.id}" desconectado!
    //     Motivo: ${motivo}`);
    // });
    socket.on("Texto_Editor", ({texto,nomeDocumento}) => {
        const documento = encontrarDocumento(nomeDocumento);
        if(documento){
            documento.texto = texto;
            socket.to(nomeDocumento).emit("Texto_Editor_Clientes", texto);
        }
    });
});

function encontrarDocumento(nome){
    const documento = documentos.find((documento) =>{
        return documento.nome === nome;
    });
    return documento;

}
