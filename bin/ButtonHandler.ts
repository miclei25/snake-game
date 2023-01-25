(document.querySelector("#start") as HTMLElement).addEventListener("click",launchGame);
(document.querySelector("#pause") as HTMLElement).addEventListener("click",pauseGame);

function launchGame(){
    (document.querySelector("#start") as HTMLElement).remove();
}

function pauseGame(){
    (document.querySelector("#pause") as HTMLElement).remove();
}