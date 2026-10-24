"use strict";
const qa =  [
        {
            question: "What is the largest land animal?",
            answer: "Elephant"
        },
        {
            question: "Which animal is known as the king of the jungle?",
            answer: "Lion"
        },
        {
            question: "What mammal can fly?",
            answer: "Bat"
        },
        {
            question: "Which animal is famous for its black and white stripes?",
            answer: "Zebra"
        },
        {
            question: "What is the fastest land animal?",
            answer: "Cheetah"
        }
    ];//array of objects

/*
An Object is a variable that can hold many variables.

Objects are collections of key-value pairs, where each key (known as property names) has a value.

Objects can describe anything like houses, cars, people, animals, or any other subjects.

*/

let currentQuestion = 0;
let selectedAnswer;


console.log(qa[0].question);
document.getElementById("question").innerHTML = qa[currentQuestion].question;

document.getElementById("submit").addEventListener("click", function() {
     const selected = document.querySelector('input[name="option"]:checked');
     console.log(selected.value);
     if(selected.value == qa[currentQuestion].answer){
        document.getElementById("result").innerHTML = "Correct!";
     } else {
        document.getElementById("result").innerHTML = "Incorrect. The correct answer is " + qa[currentQuestion].answer + ".";
     }
     nextQuestion();
     setTimeout(()=>{
         document.getElementById("result").innerHTML = "";
        }, 3000);

});



function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < qa.length) {
        document.getElementById("question").innerHTML = qa[currentQuestion].question;
    } else {
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("submit").style.display = "none";
        document.getElementById("result").innerHTML = "You have completed the quiz.";
        document.getElementById("optionsForm").style.display = "none";
    }

}
