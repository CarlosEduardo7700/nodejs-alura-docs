import "../../socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");

function inserirLinkDoDocumento(nomeDoDocumento) {
    listaDocumentos.innerHTML += `
        <a href="documentos/documento.html?nome=${nomeDoDocumento}" class="list-group-item list-group-item-action">
            ${nomeDoDocumento}
        </a>
    `
}

export { inserirLinkDoDocumento };

