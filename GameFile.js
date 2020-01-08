var Sequence = [];
var i;
var List = [];
var Correct=true;
var UserNum =[];
var Counter = 0;

function StartGame()
{
    alert("Game starting...")
	Counter=0;
	List = [];
	UserNum=[];
	Correct=true;
	AddList();
}

function AddList()
{
	List.push(Math.round(Math.random() * 5)+1)
	RunGame();
}




function GetUserNum(Input)
{
	if (Input === List[Counter]) {
		Correct=true;
		if (Counter === List.length-1){
			AddList();
		} else {
			Counter+=1;
		}
	} else {
		Correct=false;
		alert("Game over")
	}
}
	
function RunGame()
{
	alert("The sequence is ")
	alert(List)
	//Then the user will be prompted to repeat the sequence
	alert("Now repeat the sequence")
	//The on click event will run to store the users inputs
	Counter=0;
}

function Colour(ColInput)
{
	$(document.getElementById(ColInput)).removeClass("bg-light").addClass("bg-danger");
}
function ColourOff(ColInput)
{
	$(document.getElementById(ColInput)).removeClass("bg-danger").addClass("bg-light");	
}

