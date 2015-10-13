var debug = false;

var rulesText = "History Game Rules:<br><br> Your ultimate goal is to get from England to the New World. Starting with 20 gold you have to follow a path while answering questions about the New World. Each question is worth 10, 15, or 20 points. Throughout the game you have to collect points while trying to avoid getting attacked by another group and getting to the New World as fast as you can!<br><br> 1. You will choose a country to start: England, Portugal, Spain, Netherlands, France, or Britain.<br><br> 2. Starting with 20 gold you have to answer a question correctly to move out of England, starting the game.<br><br> 3. Once you have moved out of England you are now able to move as quick as you can to the New World although you can also be attacked.<br><br> 4. If you answer a question correctly you can move 1 step in any one direction.<br><br> 5. If you get the answer wrong, you stay where you are.<br><br> 6. To attack someone you land on the same tile. Since two ships can’t be on the same spot, you both have to fight to stay there. You will bet a certain amount of gold then you’ll have a chance of winning. More gold will slightly increase your chance of winning. Winner gets a large part of the gold. Loser must move backwards one square.<br><br> 7. You can get extra points by arriving to the New World quickly. 1st player gets 90 extra, 2nd gets 80, etc.<br><br> 8. When the game is over, press “End Game” to end the game and see final rankings. Ties are settled randomly.";
var gameName = "America Colonization History Game";

var questions = [
{	
	question:"What was the form of government that contributed most to distinct paths of colonization?",
	answerCorrect:"The form of government for Spain and France from England",
	answer1:"The form of government for France and England from Spain",
	answer2:"The form of government for England and Spain from France",
	answer3:"The form of government for Spain and England from France",
	worth:20
},
{	
	question:"What is an absolute monarchy?",
	answerCorrect:"A state in which the monarch is controlled by all aspects of government without having to be checked by any representative assembly",
	answer1:"A state in which the power of the monarch is checked by other representative assemblies",
	answer2:"A state in which the the monarch is controlled but can get checked by any representative assembly",
	answer3:"A state in which the monarch is controlled by all aspects of government although they have to be checked by at least one other group",
	worth:10
},
{	
	question:"Who had absolute monarchies?",
	answerCorrect:"Spain and France",
	answer1:"Spain and Britain",
	answer2:"Donald Trump",
	answer3:"France and Portugal",
	worth:10
},
{ 
  question:"What is a limited monarchy?",
  answerCorrect:"A state in which the power of the monarch is checked by other representative assemblies.",
  answer1:"A state in which the the monarch is controlled but can get checked by any representative assembly.",
  answer2:"A state in which the monarch is controlled by all aspects of government without having to be checked by any representative assembly.",
  answer3:"A state in which the monarch is controlled by all aspects of government although they have to be checked by at least one other group.",
  worth:10
},
{ 
  question:"What year was the house of burgesses established?",
  answerCorrect:"1619",
  answer1:"1606",
  answer2:"2100",
  answer3:"1492",
  worth:20
},
{ 
  question:"Why was the American Revolution successful?",
  answerCorrect:"America had lots of practice in democracy",
  answer1:"America is good at fighting",
  answer2:"They had more people on their side",
  answer3:"No reason, just a total coincidence.",
  worth:15
},
{ 
  question:"Who did they think designed the New Englands society?",
  answerCorrect:"God",
  answer1:"John Green",
  answer2:"King James",
  answer3:"King Trump",
  worth:10
},
{ 
  question:"When did religious strife reach its peak in England?",
  answerCorrect:"1500s",
  answer1:"1700s",
  answer2:"1650s",
  answer3:"1400s",
  worth:20
},
{ 
  question:"Why did religious strife reach its peak?",
  answerCorrect:"Henry VIII broke with the Catholic Church of Rome",
  answer1:"Henry VIII broke with the Christian church of Rome",
  answer2:"Henry II broke with the Christian Church of Rome",
  answer3:"There were too many \"King Henry\"s",
  worth:20
},
{ 
  question:"Was the new church under the king’s leadership accepted by the people?",
  answerCorrect:"Not by many",
  answer1:"Yes, by everyone",
  answer2:"It was split pretty evenly on who accepted it",
  answer3:"People ignored the fact there was a new church",
  worth:10
},
{ 
  question:"Whose teachings did the Pilgrims and Puritans follow?",
  answerCorrect:"John Calvin",
  answer1:"John Green",
  answer2:"John Pilgrim",
  answer3:"John Winthrop",
  worth:10
},
{ 
  question:"About what point was England a nation of many religions?",
  answerCorrect:"At the end of Queen Elizabeth's reign",
  answer1:"In the middle of Queen Elizabeth's reign",
  answer2:"Never",
  answer3:"In the beginning of Queen Elizabeth's reign",
  worth:10
},
{ 
  question:"Which decades of the 1600s did religious groups in England decide it was no place to put their controversial beliefs into practice?",
  answerCorrect:"second and third decade",
  answer1:"first and third decade",
  answer2:"third and fourth decade",
  answer3:"first and second decade",
  worth:20
},
{ 
  question:"Where did the groups that were unhappy in England move to in the 1600s?",
  answerCorrect:"New World",
  answer1:"Canada",
  answer2:"California",
  answer3:"China",
  worth:15
},
{ 
  question:"What year were people moved into the New World",
  answerCorrect:"1620s",
  answer1:"1610s",
  answer2:"1640s",
  answer3:"1590s",
  worth:20
},
{ 
  question:"What colonies was America’s rich diversity most evident?",
  answerCorrect:"Middle Colonies",
  answer1:"Southern Colonies",
  answer2:"Northern Colonies",
  answer3:"All of them",
  worth:10
},
{ 
  question:"What are parts of the middle colonies?",
  answerCorrect:"Pennsylvania, New York, New Jersey, and Delaware",
  answer1:"Pennsylvania, New York, New Jersey, Maine and Delaware",
  answer2:"Pennsylvania, New York, and New Jersey",
  answer3:"New York, New Jersey, and Delaware",
  worth:10
},
{ 
  question:"Why was the main reason southern colonies had a small population?",
  answerCorrect:"Many outbreaks of Malaria and Yellow Fever",
  answer1:"People liked to be North better",
  answer2:"The south didn’t have enough food.",
  answer3:"There weren’t enough places to live",
  worth:15
},
{ 
  question:"What was the first southern colony?",
  answerCorrect:"Virginia",
  answer1:"Pennsylvania",
  answer2:"Maine",
  answer3:"Georgia",
  worth:10
},
{ 
  question:"Who had a limited monarchy?",
  answerCorrect:"Britain",
  answer1:"France",
  answer2:"Portugal",
  answer3:"Spain",
  worth:10
}];
