// final version of RPS

function check(){	
	var playOne=document.getElementById("player1").value;
	var playTwo=document.getElementById("player2").value;
	
	//logic statements, there is no need for && stements in this program
	if(playOne=="r"){
		if(playTwo=="s"){
			document.getElementById("CheckRes").innerHTML="Player 1 wins";
		}

		else if(playTwo=="p"){
			document.getElementById("CheckRes").innerHTML="Player 2 wins";
		}
		else{
			document.getElementById("CheckRes").innerHTML="It's a draw!";
		}
		hide();
	}
	if(playOne=="p"){
		if(playTwo=="r"){
			document.getElementById("CheckRes").innerHTML="Player 1 wins";
		}
		else if(playTwo=="s"){
			document.getElementById("CheckRes").innerHTML="Player 2 wins";
		}
		else{
			document.getElementById("CheckRes").innerHTML="It's a draw!";
		}
		hide();
	}
	if(playOne=="s"){
		if(playTwo=="p"){
			document.getElementById("CheckRes").innerHTML="Player 1 wins";
		}
		else if(playTwo=="r"){
			document.getElementById("CheckRes").innerHTML="Player 2 wins";
		}
		else{
			document.getElementById("CheckRes").innerHTML="It's a draw!";
		}
		hide();
	}
}
function hide(){
	document.getElementById('button').style.visibility='hidden';
}