import express from "express"
import path from "path";
import url from "url";

const app = express();
const port = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

app.listen(port, () => console.log(`Servidor escutando na porta ${port}`))