let colors = [] 
let squares = document.querySelectorAll(".square")
let numSquares = 6
let pickedColor 
let resetBtn = document.getElementById("reset")
let message = document.getElementById("message")
let h1 = document.querySelector("h1")
let buttons = document.querySelectorAll(".mode")


//console.log(numSquares)
init()


function init() {
    modeBtn()
    reset()
    setUp()

   
}



function setUp(){
   
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor)
        {
            message.innerHTML = "Correct"; 
            h1.style.backgroundColor = clickedColor; 
            changeColor(pickedColor);  
            resetBtn.innerHTML = "Play Again?"; 
        }
        else 
        { 
            this.style.backgroundColor = document.body. style.backgroundColor;
            message.innerHTML = "Try Again";
        }
    });      
    
}

document.getElementById("colorDisplay").innerHTML = pickedColor;
}

function reset(){ 
    colors= generateRandomColors(numSquares)
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor
    for (var i = 0; i < squares.length; i++) {
      if(colors[i]){
      squares[i].style.background=colors[i]
      squares[i].style.display="block"
    }else{
      squares[i].style.display="none"
    }
    }
    h1.style.background="blueviolet"
    message.textContent=""
    resetBtn.textContent="sarasa"
  }
  
function changeColor(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
      
    }   

}

function pickColor(){
    let random = Math.floor(Math.random()* numSquares);
    return colors[random]
}

function randomColor(){
    let r = Math.floor(Math.random()*256);  
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    
    return "rgb("+r+", "+g+", "+b+")"
}

function generateRandomColors(num){
    var arr=[]
    for (let i = 0; i < num; i++) {
        arr[i] = randomColor()
        //console.log(arr[i])
    }
    return arr    
}


resetBtn.addEventListener("click", function(){
    reset();
   
})
    
function modeBtn(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
            buttons[i].classList.add("selected");
            if(this.textContent === "Easy")
        {
            //console.log(this.textContent)
            numSquares= 3
            //console.log(numSquares)
        }
        else 
        { 
            //console.log(this.textContent)
            numSquares= 6
        } 
        reset()
        })
    }
}

