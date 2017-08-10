'use strict'
/////////////////////////////////////////Function Creates new game function that adds board to game
///////////and play game function that work in repeat gets usermove and a board state and returns
//////////////////state of game and how many moves left.
function newTTTGame(params) {
    //////////////////////////////////////////////////////////////////
    function newGame() { // creats new Board for Gmae
        ////////////////////////////////////////////////create New Board
        function create_board() {
            var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            // 1 2 3
            // 4 5 6
            // 7 8 9  
            return board;
        }
        return create_board();
    }
    ///////////////Function Makes A Move And Gives Back Moves Left For User
    function playgame(userMove, board) {
        var X = "X";
        var O = "O";
        board[userMove] = X; //User Move
        var compmove;
        var checkfull2 = check2Full(board);
        if (checkfull2[0] == undefined) {
            compmove = computerAnswerEasy(board);
            board[compmove] = O;

        } else if (howManyMovesLeft(board) == []) {} else {
            compmove = check2Full(board)[0]
            board[compmove] = O;
        }
        var stateOFGame = checkWhoWOn(board); //0 Won lost Tie NextMove
        var movesLeft = howManyMovesLeft(board);
        return [stateOFGame, movesLeft, compmove];
        ////////////////////////////////////how Many Moves Left////////////////////////
        function howManyMovesLeft(board) {
            var count = [];
            var j = 0;
            for (var i = 0; i < board.length; ++i) {
                if (board[i] == 0) {
                    count[j++] = i;
                }
            }
            return count;
        }
        //////////////////////////////////////////////////////////////////////////////////////
        function computerAnswerEasy(board) { // Find First Spot in Array
            var options = [];
            var j = 0;
            for (var i = 0; i < board.length; ++i) {
                if (board[i] == 0) {
                    options[j++] = i;
                }
            }
            j--;
            return options[Math.round(Math.random() * j)];
        }
        //////////////////////checks If There Is 2 xx or oo In Path////////////////////////////////////
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
        //////////////////////////////////Checks If Some One Won//////////////////////////
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
                    } else if (board[check[i][j] - 1] == "O") {
                        countO++;
                        if (countO == 3) {
                            return "O";
                        }
                    }
                }
            }
        }
        ////////////////////////////////////////////checkWhoWon/////////////////
        function checkWhoWOn(board) {
            var whoWon = checkWin(board);
            if (whoWon === "X") {
                return "Player";
            } else if (whoWon === "O") {
                return "Computer";
            } else if (whoWon == undefined) {
                return "Tie";
            }
        }
    }
    var game = {}; //create functions Object 
    game.newGame = newGame;
    game.playGame = playgame;
    return game;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////Ui In JS
function tTT_UI(params) { //UI Game
    var game = newTTTGame();
    var board = game.newGame(); //Creates New board
    var stateOfGame = game.playGame(userInput(null), board); //stateOfGame
    do {
        stateOfGame = game.playGame(userInput(stateOfGame[1]), board);
    } while (stateOfGame[0] == "Tie" && stateOfGame[1].length >= 1)
    //////////////////////////////////////
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log("\n\n\n");
    //console.log(stateOfGame[0]);
    printBoard();
    //////////////////////////////////////
    function userInput(stateOfGame) {
        var stringState = "";
        var flag = 0;
        if (stateOfGame == null) {
            stateOfGame = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        }
        for (var i = 0; i < stateOfGame.length; ++i) {
            stringState += "  " + (1 + stateOfGame[i]);
        }
        while (game.turn < 8) {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
            console.log("Your Choices Are:")
            console.log(stringState);
            console.log("\n\n\n");
            printBoard();
            var readlineSync = require('readline-sync');
            var choice = parseInt(readlineSync.question('Enter Choice:')) - 1;
            for (var j = 0; j < stateOfGame.length; ++j) {
                if (choice == stateOfGame[j]) {
                    flag = 1;
                }
            }
        }
        return choice;
    }
    /////////////////////////////////////Prints Current Board
    function printBoard() {
        console.log(board[0] + "   |   " + board[1] + "   |   " + board[2]);
        console.log("-----------------");
        console.log(board[3] + "   |   " + board[4] + "   |   " + board[5]);
        console.log("-----------------");
        console.log(board[6] + "   |   " + board[7] + "   |   " + board[8]);
    }
}
///////////////////////////////UI function
//tTT_UI();