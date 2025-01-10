import { atualizarTextoEditor } from "./documento.js";

const socket = io();

function selecionardocumento(nome){
    socket.emit("selecionar_documento", nome);
}

function emitirTextoEditor(dados){ 
    socket.emit("Texto_Editor", dados);
}

socket.on("Texto_Editor_Clientes", (texto) => {
    atualizarTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
    Motivo: ${motivo}`);
  });

export { emitirTextoEditor, selecionardocumento };