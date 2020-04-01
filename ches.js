const figurs = {
    black : {
        king: '&#9818',
        rook: '&#9820',
        bishop: '&#9821',
        queen: '&#9819',
        knight: '&#9822',
        pawn: '&#9823',
    },
    white : {
        king: '&#9812',
        rook: '&#9814',
        bishop: '&#9815',
        queen: '&#9813',
        knight: '&#9816',
        pawn: '&#9817',
    }    
}

function addSquares (extraClass) {
    const ches = document.querySelector('#chess');
    const square = document.createElement('div');
    square.classList.add('square');
   // square.innerHTML = figurs.black.rook;
    if (extraClass) square.classList.add(extraClass);

    chess.append(square);

}


const color = {
    one: 'light',
    two: 'dark'
}

for (let i = 0; i < 64; i++) {
    if (!(i%8)){
        color.one = (color.one === 'light') ? 'dark' : 'light';
        color.two = (color.two === 'light') ? 'dark' : 'light';
    }
    const colorClass = i%2 ? color.one : color.two;
  
    addSquares(colorClass);
}

let listOfSquares = document.querySelectorAll('square');
let squareArr = new Array;
for (i = 0; i < 64; i++){
    squareArr.push(listOfSquares[i]);
}



for (i = 0; i < 64; i++){
    let squareInfo = new Object;
    if ((i==0)||(i==7)) {
        squareInfo.position =   i;
        squareInfo.color = 'black';
        squareInfo.type = 'rook';
        squareArr[i] = squareInfo;
    }
    if ((i==1)||(i==6)){
        squareInfo.position =   i;
        squareInfo.color = 'black';
        squareInfo.type = 'knight';
        squareArr[i] = squareInfo; 
    }
    if ((i==2)||(i==5)){
        squareInfo.position =   i;
        squareInfo.color = 'black';
        squareInfo.type = 'bishop';
        squareArr[i] = squareInfo; 
    }
    if (i==3){
        squareInfo.position =   i;
        squareInfo.color = 'black';
        squareInfo.type = 'king';
        squareArr[i] = squareInfo; 
    }
    if (i==4){
        squareInfo.position =   i;
        squareInfo.color = 'black';
        squareInfo.type = 'queen';
        squareArr[i] = squareInfo; 
    }
    if ((i>7) && (i<16)){
        squareInfo.position =   i;
        squareInfo.color = 'black';
        squareInfo.type = 'pawn';
        squareArr[i] = squareInfo;
    }
    if ((i>55) && (i<64)){
        squareInfo.position =   i;
        squareInfo.color = 'white';
        squareInfo.type = 'pawn';
        squareArr[i] = squareInfo;
    }
}


console.log(squareArr);

for(let i = 0; i<64; i++){
    let square = document.querySelectorAll('.square');
    if(squareArr[i].type === 'pawn'){
        if(squareArr[i].color === 'black'){
            square[i].innerHTML = figurs.black.pawn;
        }
        if(squareArr[i].color === 'white'){
            square[i].innerHTML = figurs.white.pawn;
        }
    }
    if(squareArr[i].type === 'rook'){
        square[i].innerHTML = figurs.black.rook;
    }
    if(squareArr[i].type === 'queen'){
        square[i].innerHTML = figurs.black.queen;
    }
    if(squareArr[i].type === 'king'){
        square[i].innerHTML = figurs.black.king;
    }
    if(squareArr[i].type === 'knight'){
        square[i].innerHTML = figurs.black.knight;
    }
    if(squareArr[i].type === 'bishop'){
        square[i].innerHTML = figurs.black.bishop;
    }
}

