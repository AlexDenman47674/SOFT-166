var Sequence = [];
var i;

function RestartGame()
{
    Sequence=[];
    for (i = 1; i <=6; i++) {
        togglelight(i);
    }
    alert("Game restarted")
}
function StartGame()
{
    alert("Game starting...")
}
