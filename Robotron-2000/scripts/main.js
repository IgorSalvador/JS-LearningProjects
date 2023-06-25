const control = document.querySelectorAll("[data-control]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control.forEach((element) => {
    element.addEventListener("click", (event) => {
        chanceData(event.target.dataset.control, event.target.parentNode);
        updateStatistics(event.target.dataset.control, event.target.dataset.peca)
    });
});

function chanceData(operation, control){
    let item = control.querySelector("[data-counter]");

    if(operation === "+"){
        item.value = parseInt(item.value) + 1;
    }
    else{
        item.value = parseInt(item.value) - 1;
    }
}

function updateStatistics(operation, peca){
    estatisticas.forEach((element) => {
        if(operation === "+"){
            element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
        }
        else{
            element.textContent = parseInt(element.textContent) - pecas[peca][element.dataset.estatistica];
        }
    });
}