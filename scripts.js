let num1;
let num2;
let operation;
let correctAnswer;
let score = 0;

const operations = ["+", "-", "*"];

function generateQuestion(){
    num1 = Math.floor(Math.random()* 11);
    num2 = Math.floor(Math.random()* 11);
    operation = operations[Math.floor(Math.random() * 3)];
    

    document.getElementById("question").innerHTML = num1+operation+num2;

    if (operation === "+"){
        correctAnswer = num1 + num2;
    }
    else if (operation === "-"){
        correctAnswer = num1 - num2;
    }
    else{
        correctAnswer = num1 * num2;
    }

    
}



function checkAnswer(){



    let userAnswer = Number(document.getElementById("answer").value);

    if (userAnswer === correctAnswer){
        document.getElementById("message").innerHTML = "Correct!";
        message.style.color = "green";
        score++;
        }
    else {
        document.getElementById("message").innerHTML  = "Wrong! Correct Ans is " + correctAnswer;
        message.style.color = "red";
    }
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("answer").value = "";
   
    if (score === 5){
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    }
    else {
        generateQuestion();
    }
}


function playAgain(){
    score = 0;

    document.getElementById("score").innerHTML = score;
    document.getElementById("div-success").style.display = "none";

    document.getElementById("div-questions").style.display = "block";
    document.getElementById("message").innerHTML = "";
    generateQuestion();

}

generateQuestion();
