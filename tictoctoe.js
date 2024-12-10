let boxes = document.querySelectorAll('#box');
let reset = document.querySelector('#resetbtn');
let newgamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;

const winpattens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [1,4,8],
    [2,4,6],

];

const newgame = ()=>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText = "X";
            turn0 = false;
        } else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner =(winner)=>{
      msg.innerText = `Congratulations, winner is ${winner}`;
      msgcontainer.classList.remove("hide");
      disableBoxes();
}

const checkwinner = () =>{
    for(let patten of winpattens){
        let pos1val = boxes[patten[0]].innerText;
        let pos2val = boxes[patten[1]].innerText;
        let pos3val = boxes[patten[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val );
                showwinner (pos1val);
            }
        }
        }
}

newgamebtn.addEventListener("click", newgame);
reset.addEventListener("click", newgame);