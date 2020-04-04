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

const board = [
    {color: 'dark', figure: figurs.black.rook, active: false, chessColor: 'black'}, {color: 'light', figure: figurs.black.knight, active: false, chessColor: 'black'}, { color: 'dark', figure: figurs.black.bishop, active: false, chessColor: 'black'}, {color: 'light', figure: figurs.black.king, active: false, chessColor: 'black'}, { color: 'dark', figure: figurs.black.queen, active: false, chessColor: 'black'}, {color: 'light', figure: figurs.black.bishop, active: false, chessColor: 'black'}, { color: 'dark', figure: figurs.black.knight, active: false, chessColor: 'black'}, {color: 'light', figure: figurs.black.rook, active: false, chessColor: 'black'},
    {color: 'light', figure: figurs.black.pawn, active: false, chessColor: 'black'}, {color: 'dark', figure: figurs.black.pawn, active: false, chessColor: 'black'}, {color: 'light', figure: figurs.black.pawn, active: false, chessColor: 'black'}, { color: 'dark', figure: figurs.black.pawn, active: false, chessColor: 'black'}, {color: 'light', figure: figurs.black.pawn, active: false, chessColor: 'black'}, { color: 'dark', figure: figurs.black.pawn, active: false, chessColor: 'black'}, {color: 'light', figure: figurs.black.pawn, active: false, chessColor: 'black'}, { color: 'dark', figure: figurs.black.pawn, active: false, chessColor: 'black'},
    {color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false}, {color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, { color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false}, { color: 'dark', figure: null, active: false}, {color: 'light', figure: null, active: false},
    {color: 'light', figure: null, active: false, chessColor: null}, {color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null},
    {color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, {color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null},
    {color: 'light', figure: null, active: false, chessColor: null}, {color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null}, {color: 'light', figure: null, active: false, chessColor: null}, { color: 'dark', figure: null, active: false, chessColor: null},
    {color: 'dark', figure: figurs.white.pawn, active: false, chessColor: 'white'}, {color: 'light', figure: figurs.white.pawn, active: false, chessColor: 'white'}, { color: 'dark', figure: figurs.white.pawn, active: false, chessColor: 'white'}, {color: 'light', figure: figurs.white.pawn, active: false, chessColor: 'white'}, { color: 'dark', figure: figurs.white.pawn, active: false, chessColor: 'white'}, {color: 'light', figure: figurs.white.pawn, active: false, chessColor: 'white'}, { color: 'dark', figure: figurs.white.pawn, active: false, chessColor: 'white'}, {color: 'light', figure: figurs.white.pawn, active: false, chessColor: 'white'},
    {color: 'light', figure: figurs.white.rook, active: false, chessColor: 'white'}, {color: 'dark', figure: figurs.white.knight, active: false, chessColor: 'white'}, {color: 'light', figure: figurs.white.bishop, active: false, chessColor: 'white'}, { color: 'dark', figure: figurs.white.king, active: false, chessColor: 'white'}, {color: 'light', figure: figurs.white.queen, active: false, chessColor: 'white'}, { color: 'dark', figure: figurs.white.bishop, active: false, chessColor: 'white'}, {color: 'light', figure: figurs.white.knight, active: false, chessColor: 'white'}, { color: 'dark', figure: figurs.white.rook, active: false, chessColor: 'white'},
];



function getChessBoard () {
    board.forEach(function(item, index){
        const options = {
            color: item.color,
            figure: item.figure,
            index: index,
            active: item.active,
            };
            addSquares(options);
        });
};

function addSquares (options) {
    const {
        color,
        figure,
        index,
        active,
    } = options;
    const ches = document.querySelector('#chess');
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', () => eventMove(index));
   
    if (figure) square.innerHTML = figure;
    if (color) square.classList.add(color);
    if (active) square.classList.add('active');
    chess.append(square);
};

function eventMove(index){
    let currentActiveIndex;
    const isActiveCell = board.filter(function(item, inndexActiveSquare){
        if (item.active) currentActiveIndex = inndexActiveSquare;
        return item.active;
    });


    if(!isActiveCell[0] && board[index].figure) {
        board[index].active = true;
        
    }

    if(isActiveCell[0]) {
        if(board[index].chessColor === board[currentActiveIndex].chessColor) {
            alert('error');
        } else {
            board[index].figure = board[currentActiveIndex].figure;
            board[index].chessColor = board[currentActiveIndex].chessColor;
            board[currentActiveIndex].figure = null;
            board[currentActiveIndex].chessColor = null;
            board[currentActiveIndex].active = false; 
            };
    };
    //console.log(board);
    let history = new Array;
    if(board[index].active = true){
        let activeTurn = {
            Figure: board[index].figure,
            Color: board[index].chessColor,
            from: board[index],
            to: board[currentActiveIndex],
        }
        history.push(activeTurn);
    }
   redrawBoard();
   console.log(history); 
   
};

function redrawBoard (){ //перерисовывает клетку по клику
    let chess = document.querySelector('#chess');
    chess.innerHTML = '';
    getChessBoard();
};

getChessBoard();

