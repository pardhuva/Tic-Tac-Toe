



let boxes=document.querySelectorAll(".b1");
let resetbutton=document.querySelector(".re");
let newgamebt=document.querySelector(".newbt");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector(".msg");

let turnO=true;  //playerX,playerO
let count=0;
let iswinner=false;
const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [2, 4, 5],
    [6, 7, 8],
];

const resetgame =() =>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
         iswinner=checkwinner();
        
        if(count=== 9 && !iswinner){
            gamedraw();
        }
    });
});
const gamedraw =()=>{
    msg.innerText= `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes =()=>{
   for(box of boxes){
      box.disabled=true;
   }
};
const enableBoxes =()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner) =>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner =() => {
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                showwinner(pos1);
                return true;
            }
        }
    }
};



newgamebt.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);


