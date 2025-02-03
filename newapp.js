let boxes = document.querySelectorAll(".button");
let display = document.querySelector("#display");
let turn ="O";
let reset= document.getElementById("reset");


let winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function tieCheck(){
    let count =0;
    boxes.forEach((box) => {
        if(box.innerHTML!= ""){
            count++;
        }
    });
    if(count == 9){
        display.innerHTML = "It's a tie!";
        boxes.forEach((box) => {
            box.disabled=true;
        });
    }
 
}




let wincheck =() => {
    for(win of winPatterns){ {
        let box1= boxes[win[0]];
        let box2= boxes[win[1]];
        let box3= boxes[win[2]];
        
        
        if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML && box1.innerHTML != ""){
            display.innerHTML = box1.innerHTML + "  wins! the game";
            boxes.forEach((box) => {
                box.disabled=true;
            });
        }else{
            tieCheck();
        }
    }

    
}}
boxes.forEach((box)  => {
    box.onclick = () => {
        box.innerHTML = turn;
        if(turn == "O"){
            turn = "X";
        }else{
            turn = "O";
        }
        box.disabled=true;
        wincheck();
    }
    
});

reset.onclick = () => {
    boxes.forEach((box) =>{
        box.innerHTML = "";
        display.innerHTML = "";
        box.disabled=false;
    })
}
