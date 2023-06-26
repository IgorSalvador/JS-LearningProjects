const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => {
    newElement(element);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nome = event.target.elements["nome"];
    let quantidade = event.target.elements["quantidade"];

    let exist = itens.find(element => element.nome === nome.value);

    let itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value 
    };

    if(exist) {
        itemAtual.id = exist.id;
        updateElement(itemAtual);
        itens[itens.findIndex(element => element.id === exist.id)] = itemAtual;
    } 
    else {
        itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
        newElement(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

function newElement(item){
    const newItem = document.createElement("li");
    newItem.classList.add("item");

    const itemNumber = document.createElement("strong");
    itemNumber.innerHTML = item.quantidade;
    itemNumber.dataset.id = item.id;
    newItem.appendChild(itemNumber);
    newItem.innerHTML += item.nome;
    newItem.appendChild(removeButton(item.id));

    lista.appendChild(newItem);
}

function updateElement(item){
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
}

function removeElement(element, id){
    element.remove();

    //Remove o elemento da lista conforme o id que eh buscado na lista de elementos para remove-lo
    itens.splice(itens.findIndex(element => element.id === id), 1);

    localStorage.setItem("itens", JSON.stringify(itens));
}

function removeButton(id){
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "X";

    buttonElement.addEventListener("click", function() {
        removeElement(this.parentNode, id);
    });
    
    return buttonElement;
}