let playerSymbol = "X";
let gameEnd = false;
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function () {
        if (this.innerHTML === "" && !gameEnd) {
            this.innerHTML = playerSymbol;
            checkwin();
            if (playerSymbol === "X") {
                playerSymbol = "O";
            } else { playerSymbol = "X" }
        }
    });
}

let win = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
];

function checkwin() {
    for (let i = 0; i < win.length; i++) {
        if (
            document.getElementById(win[i][0]).innerHTML === playerSymbol && document.getElementById(win[i][1]).innerHTML === playerSymbol && document.getElementById(win[i][2]).innerHTML === playerSymbol
        ) {
            document.getElementById("status").innerHTML = playerSymbol + " win";
            document.getElementById(win[i][0]).style.backgroundColor = "yellow";
            document.getElementById(win[i][1]).style.backgroundColor = "yellow";
            document.getElementById(win[i][2]).style.backgroundColor = "yellow";
            gameEnd = true;
        };
    }
}

function reset() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).style.backgroundColor = "aqua";
        document.getElementById("status").innerText = "";
        gameEnd = false;
    }
}




