var Sequence = [];
var i;
var List = [];
var Correct=true;
var UserNum =[];

function StartGame()
{
    alert("Game starting...")
	List = [];
	UserNum=[];
	AddList();
	Correct=true;
}

function RestartGame()
{
	alert("Restarting game...")
	List=[];
	UserNum=[];
	AddList();
	Correct=true;
}

function AddList()
{
	var List =[];
	List.push(Math.round(Math.random() * 5))
}


function CompareList()
{
	var i;
	for (i = 0; i < List.length; i++) {
		if Correct=true;
	{
		if List[i]=UserNum[i]
		{
			Correct=true;
			
		}
	
		else
		{
			Correct=false;
		}
	}
	}
	if Correct=true
	{
		alert("Correct! Starting next round")
		UserNum=[];
		AddList();
	}
	else
	{
		alert("Incorrect! Restart to try again")
	}

}

function GetUserNum(Input)
{
	UserNum.push(Input)
}
