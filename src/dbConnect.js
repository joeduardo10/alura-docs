import { MongoClient } from 'mongodb';

const cliente = new MongoClient("mongodb+srv://joeduardoj3:pToxKgYJNmtKPDPZ@cluster0.3oxkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

let documentosColecao
try{
    await cliente.connect();
    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    console.log("conectado com sucesso !!!");

}catch(erro){
    console.log(erro);
}

export {documentosColecao};

//pToxKgYJNmtKPDPZ

// mongodb+srv://joeduardoj3:pToxKgYJNmtKPDPZ@cluster0.3oxkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0