const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

// Cria o labirinto
for( let i = 0 ; i < map.length ; i++) {
    let linha = document.createElement("div");
    linha.classList.add("linha")
    document.body.appendChild(linha);
    for ( let j = 0 ; j < map[i].length ; j++){
        if ( map[i][j]=== "W") {
            let cedula = document.createElement("div");
            cedula.classList = "parede"
            linha.appendChild(cedula);
        } else if (map[i][j] === "S"){
            cedula = document.createElement("div");
            cedula.classList.add("inicio");
            linha.appendChild(cedula);
   
        } else {
            cedula = document.createElement("div");
            cedula.classList.add("blank" + i +"and"+ j);
            linha.appendChild(cedula);
        }
    }
   
}
// Cria o jogador 

let inicio = document.querySelector(".inicio");
let jogador = document.createElement("img");
jogador.src = 'guy.png'
jogador.id = "jogador";
inicio.appendChild(jogador);

let positionI = 9;
let positionJ = 0;
document.addEventListener("keydown" , (event) => {
    const keyName = event.key;
    
    // Vai pra direita
    if (keyName === "ArrowRight") {
        positionJ++;
        let newPosition = document.querySelector(".blank" + positionI + "and" +positionJ);
        
        if(newPosition !== null) {
            newPosition.appendChild(jogador); 
            
        } else {
            positionJ--;
        }
    }
    // Vai pra esquerda
    else if (keyName === "ArrowLeft") {
        positionJ--;
        let newPosition = document.querySelector(".blank" + positionI + "and" + positionJ);
        if(newPosition !== null) {
            newPosition.appendChild(jogador);
        } else {
            positionJ++;
        }
    }
     // Vai pra cima
    else if (keyName === "ArrowUp") {
        positionI--;
        let newPosition = document.querySelector(".blank" + positionI + "and" +positionJ);
        if(newPosition !== null) {
            newPosition.appendChild(jogador);
        } else {
            positionI++;
        }
   
    }
    // Vai pra baixo
    else if (keyName === "ArrowDown") {
        positionI++;
        let newPosition = document.querySelector(".blank" + positionI + "and" + positionJ);
        if(newPosition !== null) {
            newPosition.appendChild(jogador);
        } else {
            positionI--;
        }
     }
     if (positionI === 8 && positionJ === 20){
         const vitoria = document.getElementById("vitoria");
         vitoria.textContent = "Parabéns você venceu!";
     }
})
