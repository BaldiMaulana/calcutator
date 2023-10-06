const text = "Calculator.✨";
const textElement = document.getElementById("animated-text");
let index = 0;

const displayy = document.getElementById("display");



function typeText(){
    if(index < text.length){
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 60);
    }
}

typeText()

function display(value){
    displayy.value += value;
}


function displayHasil(){
    try{
        displayy.value= eval(displayy.value)
    }catch(error){
        display.value= "Error"
    }
}

function displayClear(){
    displayy.value = "";

}