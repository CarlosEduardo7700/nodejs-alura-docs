import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://cadu0077:admin123@paraestudos.klgex.mongodb.net/?retryWrites=true&w=majority&appName=ParaEstudos");

let colecaoDeDocumentos;

try {
    await cliente.connect();

    const database = cliente.db("alura-websockets");
    colecaoDeDocumentos = database.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");

} catch(error) {
    console.log(error);
}

export { colecaoDeDocumentos };