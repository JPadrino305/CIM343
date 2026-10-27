"use strict";

const qa = [
  {
    question: "What is the capital of FLorida?",
    answer: "Tallahassee"
  },
  {
    question: "Which state is Miami located in?",
    answer: "Florida"
  },
  {
    question: "What is the most popular phone?",
    answer: "iPhone"
  },
  {
    question: "Who is the famous actor in the Titanic?",
    answer: "Leonardo Dicaprio"
  },
  {
    question: "What color is the sky?",
    answer: "blue"
  }
];

let currentQuestion = 0;
let selectedButton = null;

let question = document.getElementById("question");
let buttons = document.querySelectorAll(".answer");
let submit = document.getElementById("submit");
let result = document.getElementById("result");

question.innerHTML = qa[currentQuestion].question;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.padding = "10px";
  buttons[i].style.margin = "5px";
  buttons[i].style.backgroundColor = "#eeeeee";
  buttons[i].style.color = "black";

  buttons[i].addEventListener("click", function() {

    if (submit.disabled) {
      return;
    }

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.backgroundColor = "#eeeeee";
      buttons[j].style.color = "black";
    }

    selectedButton = buttons[i];

    selectedButton.style.backgroundColor = "blue";
    selectedButton.style.color = "white";

    result.innerHTML = "";
  });
}

submit.addEventListener("click", function() {

  if (selectedButton === null) {
    result.innerHTML = "Please select an answer.";
    return;
  }

  if (submit.disabled) {
    return;
  }

  submit.disabled = true;

  if (selectedButton.value === qa[currentQuestion].answer) {
    result.innerHTML = "Correct!";
  } else {
    selectedButton.style.backgroundColor = "red";
    selectedButton.style.color = "white";

    result.innerHTML =
      "Incorrect. The correct answer is " +
      qa[currentQuestion].answer + ".";
  }

  setTimeout(nextQuestion, 2000);
});

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < qa.length) {
    question.innerHTML = qa[currentQuestion].question;
    result.innerHTML = "";

    selectedButton = null;
    submit.disabled = false;

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "#eeeeee";
      buttons[i].style.color = "black";
    }
  } else {
    question.innerHTML = "Quiz Complete!";
    result.innerHTML = "You have completed the quiz.";

    document.getElementById("optionsForm").style.display = "none";
    submit.style.display = "none";
  }
}