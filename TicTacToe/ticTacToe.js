let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgameBtn= document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true; //playerx and playerO

// 2d array
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//reset game
const resetGame =()=>{
    turn0 =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Your code to be executed when a box is clicked
        console.log("Box clicked!");
        if(turn0){
            box.innerText="O";
            box.style.color ="#6bf178";    
            turn0 =false;
        }else{
            box.innerText="X";
            box.style.color ="#ff6700";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

//when winner is find out then disabled the boxes
const disableBoxes =()=>{
    for(box of boxes){
        box.disabled=true;
    }
    
}
//enable boxes to reset the game
const enableBoxes =()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}

const showWinner =(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();


}

const checkWinner =()=>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
           
        }
    }
}

newgameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

