import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputNomeDoDocumento = document.getElementById("input-documento");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    emitirAdicionarDocumento(inputNomeDoDocumento.value);

    inputNomeDoDocumento.value = "";
})

function inserirLinkDoDocumento(nomeDoDocumento) {
    listaDocumentos.innerHTML += `
        <a href="documentos/documento.html?nome=${nomeDoDocumento}" class="list-group-item list-group-item-action">
            ${nomeDoDocumento}
        </a>
    `
}

export { inserirLinkDoDocumento };

