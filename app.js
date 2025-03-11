// Aqui estamos criando um array vazio para armazenar os nomes dos amigos adicionados.
const listaAmigos = [];

// Esta função adiciona um amigo à lista quando o usuário digita um nome e clica no botão.
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    const listaElement = document.getElementById("listaAmigos");
    
    // Verifica se o campo de entrada está vazio. Se estiver, exibe um alerta e impede a adição de um nome inválido.
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    // Adiciona o nome do amigo à lista de amigos.
    listaAmigos.push(nomeAmigo);
    
    // Cria um novo item de lista (li) e adiciona o nome do amigo.
    const listItem = document.createElement("li");
    listItem.textContent = nomeAmigo;
    listaElement.appendChild(listItem);
    
    // Limpa o campo de entrada após adicionar um nome.
    inputAmigo.value = "";
}

// Esta função sorteia aleatoriamente um amigo da lista e remove o nome sorteado.
function sortearAmigo() {
    // Verifica se a lista de amigos está vazia antes de sortear.
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }
    
    // Gera um número aleatório para selecionar um amigo da lista.
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    
    // Remove o amigo sorteado da lista para que ele não possa ser sorteado novamente.
    const amigoSorteado = listaAmigos.splice(indiceSorteado, 1)[0];
    
    // Exibe o nome do amigo sorteado na tela.
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    
    const listItem = document.createElement("li");
    listItem.textContent = `🎉 O amigo sorteado é: ${amigoSorteado}! 🎉`;
    resultadoElement.appendChild(listItem);
    
    // Atualiza a lista de amigos exibida na tela.
    atualizarListaAmigos();
}

// Esta função atualiza a lista visível de amigos, removendo os que já foram sorteados.
function atualizarListaAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    // Percorre a lista de amigos e recria os elementos da lista exibida.
    listaAmigos.forEach(amigo => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaElement.appendChild(listItem);
    });
}
