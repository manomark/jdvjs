const player1 = "Jogador 1 (X)";
const player2 = "Jogador 2 (O)";
var playTime = player1;
var gameOver = false;

refreshScreen();
initiateSpace();

function refreshScreen(){
	if(gameOver) { 
		return;
	}

	if(playTime == player1){
		var player = document.querySelectorAll('div#top h1')[0];
        player.innerHTML = "Jogador 1 (X)";
	}else {
		var player = document.querySelectorAll('div#top h1')[0];
        player.innerHTML = "Jogador 2 (O)";
	}
}

function initiateSpace(){

	var space = document.getElementsByClassName("space");
	
	for(var i = 0; i < space.length; i++) {
		
		space[i].addEventListener("click", function(){

			if (gameOver){
				return;
			}

			if(this.getElementsByTagName("h2").length == 0){ 

				if(playTime == player1){ 

					this.innerHTML = "<center><h2>X</h2></center>";
					this.setAttribute("jogada", player1);
					playTime = player2;

				}else {

					this.innerHTML = "<center><h3>O</h3></center>";
					this.setAttribute("jogada", player2);
					playTime = player1;

				}
				refreshScreen();
				verifyWinner();
			}
		});
	}
}

function verifyWinner(){
	var a1 = document.getElementById("a1").getAttribute("jogada");
	var a2 = document.getElementById("a2").getAttribute("jogada");
	var a3 = document.getElementById("a3").getAttribute("jogada");

	var b1 = document.getElementById("b1").getAttribute("jogada");
	var b2 = document.getElementById("b2").getAttribute("jogada");
	var b3 = document.getElementById("b3").getAttribute("jogada");

	var c1 = document.getElementById("c1").getAttribute("jogada");
	var c2 = document.getElementById("c2").getAttribute("jogada");
	var c3 = document.getElementById("c3").getAttribute("jogada");

	var winner ="";

	if(((a1 == b1 && a1 == c1) || ( a1 == b2 && a1 == c3) || (a1 == a2 && a1 == a3)) && a1 != "") {
		vencedor = a1;
	
	}else if(((b2 == b1 && b2 == b3) || ( b2 == a3 && b2 == c1) || (b2 == a2 && b2 == c2)) && b2 != "") {
		vencedor = b2;	

	}else if(((c3 == c1 && c3 == c2) || ( c3 == b2 && c3 == a1) || (c3 == b3 && c3 == a3)) && c3 != "") {
		vencedor = c3;
	}

	if(vencedor != "") {
		gameOver = true;
		player = document.querySelectorAll('div#win h1')[0];
        player.innerHTML = "O vencedor foi o: '<br><b><u>" + vencedor + "</b><u>'";

	}
}