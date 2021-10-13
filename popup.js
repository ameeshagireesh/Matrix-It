if (document.querySelector(".popup")){
    const button = document.querySelector(".button")
    const circle = document.querySelector(".circle")
    
    let buttonOn = false;
    button.addEventListener("click", ()=>{
        if(!buttonOn){
            buttonOn = true;
            circle.style.animation = "moveCircleRight 2s forwards";
            button.style.animation = "backgroundRed 2s forwards";
            chrome.tabs.executeScript({
                file: "appOn.js"
            })
        }
        else{
            buttonOn = false;
            circle.style.animation = "moveCircleLeft 2s forwards";
            button.style.animation = "backgroundGreen 2s forwards";
            chrome.tabs.executeScript({
                file: "appOff.js"
            })
        }
    })
}
