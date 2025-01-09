import { atualizarTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
    socket.emit("Texto_Editor", texto);
}

socket.on("Texto_Editor_Clientes", (texto) => {
    atualizarTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
    Motivo: ${motivo}`);
  });

export { emitirTextoEditor };