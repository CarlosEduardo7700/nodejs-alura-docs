import express from "express"
import path from "path";
import url from "url";
import http from "http";
import { Server } from "socket.io";

import "./dbConnect.js";

const app = express();
const port = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(port, () => console.log(`Servidor escutando na porta ${port}`))

const io = new Server(servidorHttp);

export default io;