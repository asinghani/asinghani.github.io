var score1 = 20;
var score2 = 20;
var score3 = 20;
var score4 = 20;
var score5 = 20;
var score6 = 20;

var player = 0;
var playerAmount = 6;

var endAmount = 0;
var endPlayers = [-1, 0, 0, 0, 0, 0, 0];

var rounds = 0;

var probability = 0.2;

$(document).ready(function(){
	init();
	vex.dialog.alert({message: "Welcome to "+gameName+"!", callback:function(){
		getPlayerAmount(0);
	}});

});

function getPlayerAmount(a){
	var message = "Enter the number of players:";
	if(a == 1) message = "Please enter a valid player amount: ";
	vex.dialog.prompt({message:message, callback:function(val){
		var i = parseInt(val);
		if($.isNumeric(val) && i > 1 && i <= 6){
			playerAmount = i;
			changeScores(playerAmount);
			nextPlayer();
			return;
		}else{
			getPlayerAmount(1);
			return;
		}
	}});
}

function init(){
	if(!debug){
		window.onbeforeunload = function(){
			return "Closing the window will delete all progress and scores, and the game will be reset. Are you sure you want to leave this page?";
		}
	}
	$("#rulesText").html(rulesText);
	updateScores();
}

var question;
var ansId;

function nextPlayer(){
	player++;
	if(endPlayers[player] == 1){
		nextPlayer();
		return;
	} 
	if(player == playerAmount+1){
		player = 1;
		rounds++;
	}
	$("#currentPlayer").html(player);
	vex.dialog.alert("Give the computer to player "+player);
	$("#contentQuestion").css('display', 'block');
	var questionNumber = Math.floor((Math.random() * questions.length));
	question = questions[questionNumber];

	$("#questionWorth").html(question.worth);
	$("#question").html(question.question);

	$("#ans1btn").addClass("btn-primary");
	$("#ans2btn").addClass("btn-primary");
	$("#ans3btn").addClass("btn-primary");
	$("#ans4btn").addClass("btn-primary");

	$("#ans1btn").removeClass("btn-danger");
	$("#ans2btn").removeClass("btn-danger");
	$("#ans3btn").removeClass("btn-danger");
	$("#ans4btn").removeClass("btn-danger");

	$("#ans1btn").removeClass("btn-success");
	$("#ans2btn").removeClass("btn-success");
	$("#ans3btn").removeClass("btn-success");
	$("#ans4btn").removeClass("btn-success");

	ansId = Math.floor((Math.random() * 4) + 1);

	switch(ansId){
		case 1:
		$("#ans1").html(question.answerCorrect);
		$("#ans2").html(question.answer1);
		$("#ans3").html(question.answer2);
		$("#ans4").html(question.answer3);
		break;
		case 2:
		$("#ans2").html(question.answerCorrect);
		$("#ans1").html(question.answer1);
		$("#ans3").html(question.answer2);
		$("#ans4").html(question.answer3);
		break;
		case 3:
		$("#ans3").html(question.answerCorrect);
		$("#ans2").html(question.answer1);
		$("#ans1").html(question.answer2);
		$("#ans4").html(question.answer3);
		break;
		case 4:
		$("#ans4").html(question.answerCorrect);
		$("#ans2").html(question.answer1);
		$("#ans3").html(question.answer2);
		$("#ans1").html(question.answer3);
		break;
	}
}

function click(a){
	$("#ans1btn").removeClass("btn-primary");
	$("#ans2btn").removeClass("btn-primary");
	$("#ans3btn").removeClass("btn-primary");
	$("#ans4btn").removeClass("btn-primary");

	$("#ans1btn").addClass("btn-danger");
	$("#ans2btn").addClass("btn-danger");
	$("#ans3btn").addClass("btn-danger");
	$("#ans4btn").addClass("btn-danger");

	$("#ans"+ansId+"btn").removeClass("btn-danger");
	$("#ans"+ansId+"btn").addClass("btn-success");

	if(ansId == a){
		var currentScore;
		switch(player){
			case 1:
			score1 = score1 + parseInt(question.worth);
			currentScore = score1;
			break;
			case 2:
			score2 = score2 + parseInt(question.worth);
			currentScore = score2;
			break;
			case 3:
			score3 = score3 + parseInt(question.worth);
			currentScore = score3;
			break;
			case 4:
			score4 = score4 + parseInt(question.worth);
			currentScore = score4;
			break;
			case 5:
			score5 = score5 + parseInt(question.worth);
			currentScore = score5;
			break;
			case 6:
			score6 = score6 + parseInt(question.worth);
			currentScore = score6;
			break;
		}
		updateScores();
		vex.dialog.alert("Correct. You recieved <b>"+question.worth+"</b> gold. You now have a total of <b>"+currentScore+"</b> gold. Now move one square in any direction, then press OK.");

		$("#contentQuestion").css('display', 'none');
		$("#contentAttack").css('display', 'block');
	}else{
		vex.dialog.alert({message:"Incorrect. The correct answer was <b>"+question.answerCorrect+"</b>. Do not move or recieve any gold.", callback:randomEvent});
		$("#contentQuestion").css('display', 'none');
	}
}

function randomEvent(){
	if(Math.random() < probability){

		var eventId = Math.floor((Math.random() * 10) + 1);

		if(eventId == 1){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship landed on an unknown island</h5><br>The natives attacked your ship and raided it. You lose 15 gold. You now have "+gainGold(-15)+" gold.", callback:nextPlayer});
		}else if(eventId == 2){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship landed on an unknown island</h5><br>The natives on the island were friendly and traded with you. You profited 15 gold. You now have "+gainGold(15)+" gold.", callback:nextPlayer});
		}else if(eventId == 3){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>There was a storm</h5><br>You lost some resources, losing the equivalent of 10 gold. You now have "+gainGold(-10)+" gold.", callback:nextPlayer});
		}else if(eventId == 4){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship was attacked by pirates</h5><br>The pirates stole some of your gold and you lost 15 gold. You now have "+gainGold(-15)+" gold.", callback:nextPlayer});
		}else if(eventId == 5){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship was attacked by pirates</h5><br>Luckily, the pirates were weak and you destroyed their ship. You also stole 20 gold from them. You now have "+gainGold(20)+" gold.", callback:nextPlayer});
		}else if(eventId == 6){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Someone lost gold</h5><br>Someone on your ship was carrying gold, and slipped on the deck. The gold went overboard. You lost 5 gold. You now have "+gainGold(-5)+" gold.", callback:nextPlayer});
		}else if(eventId == 7){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship traded with another ship at sea</h5><br>You traded and profited 10 gold. You now have "+gainGold(10)+" gold.", callback:nextPlayer});
		}else if(eventId == 8){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship traded with another ship at sea</h5><br>They stole some of your money. You lost 5 gold. You now have "+gainGold(-5)+" gold.", callback:nextPlayer});
		}else if(eventId == 9){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship was caught in a battle</h5><br>Your ship accidentally sailed into the middle of a battle of two other ships. One of your gold storages was hit by a stray cannonball. You lost 10 gold. You now have "+gainGold(-10)+" gold.", callback:nextPlayer});
		}else if(eventId == 10){
			vex.dialog.alert({message:"<h4>A random event occurred</h4><br><h5>Your ship caught a strong wind</h5><br> Your ship was able to sail faster. Move your ship one square in any direction. Your movement may not cause you to be in the same square as another ship(attacking.)", callback:nextPlayer});
		}
	}else{
    nextPlayer();
  }
}

function gainGold(gold){
	var currentScore;
	switch(player){
		case 1:
		score1 = score1 + gold;
		if(score1 < 0) score1 = 0;
		currentScore = score1;
		break;
		case 2:
		score2 = score2 + gold;
		if(score2 < 0) score2 = 0;
		currentScore = score2;
		break;
		case 3:
		score3 = score3 + gold;
		if(score3 < 0) score3 = 0;
		currentScore = score3;
		break;
		case 4:
		score4 = score4 + gold;
		if(score4 < 0) score4 = 0;
		currentScore = score4;
		break;
		case 5:
		score5 = score5 + gold;
		if(score5 < 0) score5 = 0;
		currentScore = score5;
		break;
		case 6:
		score6 = score6 + gold;
		if(score6 < 0) score6 = 0;
		currentScore = score6;
		break;
	}
	updateScores();
	return currentScore;
}

function gainGoldPlayer(gold, p){
	var currentScore;
	switch(p){
		case 1:
		score1 = score1 + gold;
		if(score1 < 0) score1 = 0;
		currentScore = score1;
		break;
		case 2:
		score2 = score2 + gold;
		if(score2 < 0) score2 = 0;
		currentScore = score2;
		break;
		case 3:
		score3 = score3 + gold;
		if(score3 < 0) score3 = 0;
		currentScore = score3;
		break;
		case 4:
		score4 = score4 + gold;
		if(score4 < 0) score4 = 0;
		currentScore = score4;
		break;
		case 5:
		score5 = score5 + gold;
		if(score5 < 0) score5 = 0;
		currentScore = score5;
		break;
		case 6:
		score6 = score6 + gold;
		if(score6 < 0) score6 = 0;
		currentScore = score6;
		break;
	}
	updateScores();
	return currentScore;
}

function rankings(){
	vex.dialog.alert("<h1>Rankings</h1> "+getRankings());
}

function updateScores(){
	$("#score1").html(score1);
	$("#score2").html(score2);
	$("#score3").html(score3);
	$("#score4").html(score4);
	$("#score5").html(score5);
	$("#score6").html(score6);
}

function endGame(){
	vex.dialog.confirm({
		message: 'Are you sure you would like to end the game? All progress will be lost and final scores will be displayed.',
		callback: function(ok) {
			if(ok){
				$("#mainNav").html("");
				$("#mainContent").html('<div style="width:95%; margin-left: auto; margin-right: auto;" id="contentQuestion"><h1>Final Rankings</h1> '+getRankings()+"</div>");
			}else{
				return;
			}
		}
	});

}

var tie = false;

function getRankings(){
	tie = false;
	var scoreArray = 
	[{Player:1, score:score1},
	{Player:2, score:score2},
	{Player:3, score:score3},
	{Player:4, score:score4},
	{Player:5, score:score5},
	{Player:6, score:score6}];

	scoreArray.sort(function(a,b){
		if(parseInt(b.score) == parseInt(a.score)){
			tie = true;
			return Math.floor((Math.random() * 2)) == 1 ? 10 : -10;
		}else return parseInt(b.score) - parseInt(a.score);
	});

	var string = "";

	if(tie){
		string = string + "<span>Ties are settled randomly </span><br><br>";
	}

	for(var i = 0; i < playerAmount; i++){
		var s = scoreArray[i];

		string = string + "<p> "+getPlace(i+1)+"Player "+s.Player+" - "+s.score+" gold</p> ";
	}

	return string;
}

function attack(i){
	if(i == 0){
		$("#contentAttackCalc").css('display', 'none');
		$("#contentAttack").css('display', 'none');
		if(rounds >= 3) $("#contentNewWorld").css('display', 'block');
		else randomEvent();
	}else{
		$("#contentAttack").css('display', 'none');
		$("#contentAttackCalc").css('display', 'block');
	}
}

function confirmAttack(){
	if(!$.isNumeric($("#goldSpend").val()) || !$.isNumeric($("#opponentGoldSpend").val())){
		vex.dialog.alert("Please enter valid amounts of gold.")
		return;
	}
	var goldSpend = parseInt($("#goldSpend").val());
	var opponentGoldSpend = parseInt($("#opponentGoldSpend").val());

	if(goldSpend <= 0 || opponentGoldSpend <= 0){
		vex.dialog.alert("Please enter valid amounts of gold.")
		return;
	}

	var opponent = parseInt(($("#attackingPlayer").val()+"").replace("Player ", ""));

	var opponentMoney = getMoney(opponent);
	var playerMoney = getMoney(player);

	if(goldSpend > playerMoney || opponentGoldSpend > opponentMoney){
		vex.dialog.alert("Don't try to spend more than you have!")
		return;
	}

	if(player == opponent){
		vex.dialog.alert("You can't attack yourself!");
		return;
	}

	var diff = playerMoney - opponentMoney;

	var advantage = 0.5 + ((1.0 * diff) / 200.0)

	$("#contentAttackCalc").css('display', 'none');

	if(Math.random() < advantage){
		var gain = (opponentGoldSpend*1.0)/2;
		vex.dialog.alert({message:"<h4>Player "+player+" won!</h4><br>Player "+player+" gains "+gain+" gold, and now has "+gainGold(gain)+" gold."+
			"<br> Player "+opponent+" loses "+opponentGoldSpend+" gold, and now has "+gainGoldPlayer(0-opponentGoldSpend, opponent)+" gold.",callback:randomEvent});
	}else{
		var gain = (goldSpend*1.0)/2;
		vex.dialog.alert({message:"<h4>Player "+opponent+" won!</h4><br>Player "+opponent+" gains "+gain+" gold, and now has "+gainGold(gain, opponent)+" gold."+
			"<br> Player "+player+" loses "+goldSpend+" gold, and now has "+gainGold(0-goldSpend)+" gold.",callback:randomEvent});
	}
}

function getMoney(p){
	switch(p){
		case 1:
		return score1;
		break;
		case 2:
		return score2;
		break;
		case 3:
		return score3;
		break;
		case 4:
		return score4;
		break;
		case 5:
		return score5;
		break;
		case 6:
		return score6;
		break;
	}
}

function newWorld(i){
	if(i == 0){
		$("#contentNewWorld").css('display', 'none');
		randomEvent();
	}else{
		endAmount++;
		var gold = 100 - (10*endAmount);
		endPlayers[player] = 1;

		if(endAmount == playerAmount){
			vex.dialog.alert({
				message: 'All players have reached the New World. Press OK to see final rankings.',
				callback: function() {
					$("#mainNav").html("");
					$("#mainContent").html('<div style="width:95%; margin-left: auto; margin-right: auto;" id="contentQuestion"><h1>Final Rankings</h1> '+getRankings()+"</div>");
				}
			});
		}else{
			vex.dialog.alert({message:"You reached the New World and recieved "+gold+" gold. Remove your ship from the board", callback:reachedNew})
		}
	}
}

function reachedNew(){
	$("#contentNewWorld").css('display', 'none');
	randomEvent();
}

function changeScores(p){
	if(p < 6){
		$("#score6li").css("display", "none");
		score6 = -100;
		$("#attackingPlayer").html("<option>Player 1</option><option>Player 2</option><option>Player 3</option><option>Player 4</option><option>Player 5</option>");
	}
	if(p < 5){
		$("#score5li").css("display", "none");
		score5 = -100;
		$("#attackingPlayer").html("<option>Player 1</option><option>Player 2</option><option>Player 3</option><option>Player 4</option>");
	}
	if(p < 4){
		$("#score4li").css("display", "none");
		score4 = -100;
		$("#attackingPlayer").html("<option>Player 1</option><option>Player 2</option><option>Player 3</option>");
	}
	if(p < 3){
		$("#score3li").css("display", "none");
		score3 = -100;
		$("#attackingPlayer").html("<option>Player 1</option><option>Player 2</option>");
	}
}

function getPlace(a){
	switch(a){
		case 1:
		return "1st Place: ";
		break;
		case 2:
		return "2nd Place: ";
		break;
		case 3:
		return "3rd Place: ";
		break;
		case 4:
		return "4th Place: ";
		break;
		case 5:
		return "5th Place: ";
		break;
		case 6:
		return "6th Place: ";
		break;
		default:
		return "Error";
		break;
	}
}
