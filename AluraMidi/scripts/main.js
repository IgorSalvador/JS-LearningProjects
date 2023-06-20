const keyList = document.querySelectorAll('.tecla');

function playSound(audioSelectorId){
    const element = document.querySelector(audioSelectorId);


    if(element != null && element.localName === "audio"){
        element.play();
    }
    else{
        console.log("Element not found or is not an audio element to be played!.");
    }
}

for(let i = 0; i < keyList.length; i++){

    const key = keyList[i];
    const instrument = key.classList[1];
    // Template string for audio key ID
    const audioId = `#som_${instrument}`

    key.onclick = function(){
        playSound(audioId)
    }

    key.onkeydown = function(event){
        if(event.code === "Space" || event.code === "Enter"){
            key.classList.add("ativa");
        }
    }

    key.onkeyup = function(event){
        if(event.code === "Space" || event.code === "Enter"){
            key.classList.remove("ativa");
        }
    }
}