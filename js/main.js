`use strict`
const btnGenerator = document.getElementById("btn-generator");
const boardContainer = document.querySelector(".board");
const cpuNumber = getRndInteger(1, 100);
console.log(cpuNumber, 'Numero CPU');
    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;     
    }
    
btnGenerator.addEventListener('click', function(){
    const level = document.getElementById("difficolta").value;
    if(level === "hard"){
        boardContainer.innerHTML = "";
        for( let i = 1; i <= 100; i++){
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;          
            boardCell.classList.add("board__number");
            boardCell.addEventListener("click", function(){
                console.log(this.innerHTML, 'Numero giocatore');
                boardCell.classList.add("lightblue");
            })
            boardContainer.append(boardCell);
        }
        }else if(level === "medium"){
            boardContainer.innerHTML = "";
            for( let i = 1; i <= 81; i++){
                const boardCell = document.createElement("div");
                boardCell.innerHTML = i;
                boardCell.classList.add("medium-level");
                boardCell.addEventListener("click", function(){
                    console.log(this.innerHTML);
                    boardCell.classList.add("lightblue");
                })
                boardContainer.append(boardCell);
            } 
        }else if(level === "easy"){
            boardContainer.innerHTML="";
            for(let i = 1; i<=49; i ++){
                const boardCell = document.createElement("div");
                boardCell.innerHTML=i;
                boardCell.classList.add("easy-level");
                boardCell.addEventListener("click", function(){
                console.log(this.innerHTML);
                boardCell.classList.add("lightblue");
            })
            boardContainer.append(boardCell);
        } 
    }   
})

/* Creo un numero minimo e massimo della cpu */
