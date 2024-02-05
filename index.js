let player1='X';
let player2='O';
let currPlayer=player1;
let nextPlayer= player2;
let move= currPlayer;
let btns= document.querySelectorAll('.box');
let finish = false;
let heading= document.querySelector('h1');
let start= false;
let button= document.querySelector('button');
button.addEventListener('click', restart);
document.addEventListener('keydown', function(){
    if(start== false){
        start= true;
        flash();
        for(let i=0; i<btns.length; i++){
            if(true){
                btns[i].addEventListener('click', function(){
                    if(finish== false && start==true){
                        
                        if(btns[i].innerText==''){
                            btns[i].innerText=move;
                            if(checkWin()){
                                console.log(`${move} won the game`);
                                finish= true;
                                heading.innerText=`${move} Won the game`;
                                start= false;
                                setTimeout(restart, 4000);
                                return;
                            }
                            if(checkdraw()){
                                console.log("Game is draw");
                                finish= true;
                                heading.innerText= `The game is drawn`;
                                start= false;
                                setTimeout(restart, 4000);
                                return;
                            }
                            changeplayer();
                        }
                    }
                })
            }
        }
    }
});
function startgame(){
    flash();
}
function changeplayer(){
    if(move==currPlayer){
        move= nextPlayer;
    }
    else{
        move= currPlayer;
    }
}
function checkWin(){
    let array=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(let i=0; i<array.length; i++){
        const [pos1, pos2, pos3]= array[i];
        if(btns[pos1].innerText==btns[pos2].innerText && btns[pos1].innerText==btns[pos3].innerText && (btns[pos1].innerText=='X' || btns[pos1].innerText=='O')){
            console.log('Win');
            return true;
        }
    }
    return false;
}
function checkdraw(){
    let empty=0;
    for(let i=0; i<btns.length; i++){
        if(btns[i].innerText==''){
            empty++;
        }
    }
    return empty==0 && checkWin()==false;
}
function restart(){
    for(let i=0; i<btns.length; i++){
        btns[i].innerText='';
    }
    heading.innerText="Let's play Tic-Tac-Toe Game press any to start the game";
    finish= false;
    start = false;
}
let body= document.querySelector('body');
function flash(){
    body.classList.add('big');
    setTimeout(function(){
        body.classList.remove('big')
    }, 1000);
    setTimeout(function(){
        heading.innerText="Game has started"
    } , 1000)
};