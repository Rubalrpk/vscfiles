let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,7],
    [2,4,6],
    [3,4,6],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText="O";
            turnO = false;
        } else {
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
        }
    };
        newGameBtn.addEventListener("click",resetGame);
        resetBtn.addEventListener("click",resetGame);
        