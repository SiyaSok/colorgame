var NumberofSquares = 6;
var Colors =  ColorsGenerate(NumberofSquares);
var square = document.querySelectorAll(".square");
var colorPicked = pickedColor();
var colorDisplay = document.querySelector("h1 span");
var smsDisplay = document.querySelector("#sms");
var Heading = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");






init();

function init()
{
   for(var i = 0; i < modeButtons.length; i++)
   {
      modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("Selected");
      modeButtons[1].classList.remove("Selected");
      this.classList.add("Selected");
      this.textContent === "Easy" ? NumberofSquares = 3 : NumberofSquares = 6 ;
      reset();
   });
   
   
   }    
}




function reset()
{
   Colors = ColorsGenerate(NumberofSquares);
   colorPicked = pickedColor();
   colorDisplay.textContent = colorPicked; 
   Heading.style.backgroundColor =  'black';
   resetbtn.textContent = "New Colors";
   smsDisplay.textContent = "";  
  for(var i = 0; i < square.length; i++)
  {

   if(Colors[i])
   {
      square[i].style.display = "block";
      square[i].style.backgroundColor = Colors[i];
   }
   else
   {
      square[i].style.display = "none";
   }


     
  }
}



colorDisplay.textContent = colorPicked;

resetbtn.addEventListener('click',reset);


function Gamelogic(){

var clickedColor =  this.style.backgroundColor;
  

    
    
function ChangeColors(color)
{
    
for(var y = 0; y < Colors.length; y++) 
{
   square[y].style.backgroundColor  = colorPicked;
}
}    
    

if(clickedColor === colorPicked)
{
smsDisplay.textContent = "Correct";   
ChangeColors(clickedColor);
Heading.style.backgroundColor =  colorPicked ;
resetbtn.textContent = "Play Again";
}
else
{
this.style.backgroundColor =  "black";
smsDisplay.textContent = "Try Again";
} 
}


for(var i = 0; i < Colors.length; ++i)
{
        
square[i].style.backgroundColor = Colors[i];
square[i].addEventListener("click",Gamelogic);
    
}


function pickedColor()
{
    var random = Math.floor(Math.random() * Colors.length);
    
    return Colors[random];
}

function ColorsGenerate(num)
{
   var arrColors = [] ;

for( var i = 0 ; i < num ; ++ i )   
   {
   arrColors[i] = randomColor();
   }
return arrColors;   
}


function randomColor()
{
 
var RedColor = Math.floor(Math.random() * 256);
var BlueColor = Math.floor(Math.random() * 256);
var GreenColor = Math.floor(Math.random() * 256);
    
    
return "rgb(" + RedColor + ", " + GreenColor + ", " + BlueColor  + ")" ;   
//    
}




