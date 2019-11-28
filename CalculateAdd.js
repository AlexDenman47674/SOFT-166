var Output1;
var TextPlz;


function Plus(Input1,Input2)
{

    Output1=parseInt(Input1)+parseInt(Input2);
    TextPlz=document.getElementById("Answer");
    TextPlz.textContent=Output1;
}
function Minus(Input1,Input2)
{
    Output1=parseInt(Input1)-parseInt(Input2);
    TextPlz=document.getElementById("Answer");
    TextPlz.textContent=Output1;
}
function Multiply(Input1,Input2)
{
    Output1=parseInt(Input1)*parseInt(Input2);
    TextPlz=document.getElementById("Answer");
    TextPlz.textContent=Output1;
}
function Divide(Input1,Input2)
{
    Output1=parseInt(Input1)/parseInt(Input2);
    TextPlz=document.getElementById("Answer");
    TextPlz.textContent=Output1;
}

