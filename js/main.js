`use strict`
const btnGenerator = document.getElementById("btn-generator");
const boardContainer = document.querySelector(".board");
let bombs = [];
let numberCell = 0;
let pointsDown = document.getElementById("points");

    function getRndInteger(min, numCell) {
        bombs = [];
        let bombNumber = 0;
        while(bombs.length < 16){
         bombNumber = Math.floor(Math.random() * (numCell - min + 1) ) + min; 
         if(!(bombs.includes(bombNumber))){
            bombs.push(bombNumber);
         }           
        }         
    }

    function tab(numCell, element){
        element.innerHTML = "";
        let points = 0;
        pointsDown.innerHTML = `Questo è il tuo punteggio: ${points}`;
        for( let i = 1; i <= numCell; i++){
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i; 
            if(numCell === 100){         
                boardCell.classList.add("board__number");
            }else if(numCell === 81){
                boardCell.classList.add("medium-level");  
            }else{
                boardCell.classList.add("easy-level");
            }
            boardCell.addEventListener("click", function(){
                console.log(this.innerHTML, 'Numero giocatore');
                if(!(bombs.includes(Number(this.innerHTML)))){
                    points = points + 1;
                    boardCell.classList.add("lightblue");
                    pointsDown.innerHTML = `Questo è il tuo punteggio: ${points}`;
                    if(points === numberCell - bombs.length){
                        alert("Hai vinto!");
                    }
                }else{
                    boardCell.classList.add("red");
                    alert("Hai perso! Ricarica la pagina.");   
                }
                                
            })
            element.append(boardCell);
        } 
    }

    


btnGenerator.addEventListener('click', function(){
    const level = document.getElementById("difficolta").value;
    if(level === "hard"){
        numberCell = 100;
    }else if(level === "medium"){
            numberCell = 81;
    }else if(level === "easy"){
            numberCell = 49;
    } 
    getRndInteger(1, numberCell);
    console.log(bombs, 'Numero CPU');
    tab(numberCell, boardContainer);   
})

