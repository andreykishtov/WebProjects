'use strict'


function newTTTGame(params) {

    function newGame() { // creats new Board and Waits For Move

        function create_board() {
            var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            // 1 2 3
            // 4 5 6
            // 7 8 9  
            return board;
        }
        return create_board();
    }
    //  1 == X, 2 == O ///////////////////////////////////////////////////////
    function playgame(firstMoveNumber, board) { //gets first move from user.
        var X = "X";
        var O = "O";
        var won = checkWin(board);
        board[firstMoveNumber] = X; //First Move
        board[computerAnswerEasy()] = O; //First Move 8 Variations
        board[computerAnswerEasy()] = X; //Second move
        var secondNumber = check2Full(board)[0];
        if (secondNumber != undefined) // Second MOve Computer
        {
            board[secondNumber] = O;
        } else {
            board[computerAnswerEasy()] = O;
        }
        board[computerAnswerEasy()] = X; //Player Third Move
        // if (won() == "X") { return "X"; }
        var thirdnumber = check2Full(board)[0];
        if (thirdnumber != undefined) // third MOve Computer
        {
            board[thirdnumber] = O;
        } else {
            board[computerAnswerEasy()] = O;
        }
        board[computerAnswerEasy()] = X; // Forth Move User
        var forthnumber = check2Full(board)[0];
        if (forthnumber != undefined) // third MOve Computer
        {
            board[forthnumber] = O;
        } else {
            board[computerAnswerEasy()] = O;
        }
        board[computerAnswerEasy()] = X; // Last Move User

        /////////////////////////////////////////////////////////////////////////////////
        function computerAnswerEasy() { // Find First Spot in Array
            var options = [];
            var j = 0;
            for (var i = 0; i < board.length; ++i) {
                if (!board[i]) {
                    options[j++] = i;
                }
            }
            j--;
            1
            return options[Math.round(Math.random() * j)];
        }
        //////////////////////////////////////////////////////////
        function check2Full(board) {
            var indexy;
            var indexx;
            var whereFree = [];
            var check = "123,147,159,258,369,357,456,789";
            check = check.split(",");
            var countO;
            var countX;
            var k = 0;
            var flag;
            for (var i = 0; i < board.length - 1; ++i) {
                countX = 0;
                countO = 0;
                flag = 0
                for (var j = 0; j < 3; ++j) {
                    if (board[check[i][j] - 1] == "X") {
                        countX++;
                    } else if (board[check[i][j] - 1] == "0") {
                        flag = 1;
                        indexx = check[i][j] - 1;
                    }
                }
                if (countX == 2 && flag) {
                    whereFree[k++] = indexx;
                }
            }
            return whereFree;
        }


        ////////////////////////////////////////////////////////////
        function checkWin(board) {
            var check = "123,147,159,258,369,357,456,789";
            check = check.split(",");
            var countO;
            var countX;
            for (var i = 0; i < board.length - 1; ++i) {
                countX = 0;
                countO = 0;
                for (var j = 0; j <= 2; ++j) {
                    if (board[check[i][j] - 1] == "X") {
                        countX++;
                        if (countX == 3) {
                            return "X";
                        }
                    }
                    if (board[check[i][j] - 1] == "O") {
                        countO++;
                        if (countO == 3) {
                            return "O";
                        }
                    }
                }
            }
        }
        ////////////////////////////////////////////////////////////Send To User.
    }
    var game = {}; //create functions for UI
    game.newGame = newGame;
    game.playGame = playgame;
    return game;


}

function tTT_UI(params) { //UI Game
    var game = newTTTGame();
    var board = game.newGame();
    game.playGame(6, board);


    console.log(board[0] + "   |   " + board[1] + "   |   " + board[2]);
    console.log("-----------------");
    console.log(board[3] + "   |   " + board[4] + "   |   " + board[5]);
    console.log("-----------------");
    console.log(board[6] + "   |   " + board[7] + "   |   " + board[8]);


}



tTT_UI();



/*

                    if (board[check[i][j] - 1] == "X") {
                        if (countX == 1) {
                            countX++;
                            for (var k = 0; k < 3; ++k) {
                                if (board[check[i][k] - 1] != "X")
                                    whereFree[index++] = check[i][k]; // Returns one That is not X
                            }
                        }
                    }
                    if (board[check[i][j] - 1] == "O") {
                        if (countO == 2) {
                            countO++;
                            for (var k = 0; k < 3; ++k) {
                                if (board[check[i][k] - 1] != "X")
                                    whereFree[index++] = check[i][k]; // Sends One Thats Free
                            }
                        }
                    } */


/*    Old Before User Choice
function tTT_UI(params) { //UI Game
    var game = newTTTGame();
    var board = game.newGame(); //Creates New board
    var stateOfGame = game.playGame(6, board); //stateOfGame
  //  userInput();
    stateOfGame = game.playGame(stateOfGame[1][0], board);
    stateOfGame = game.playGame(stateOfGame[1][0], board);
    stateOfGame = game.playGame(stateOfGame[1][0], board);
    console.log(stateOfGame);

//////////////////////////////////////
    function userInput() {
        printBoard();

        var readlineSync = require('readline-sync');
        var Choice = readlineSync.question('Enter Choice:');
    }*/