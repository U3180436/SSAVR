function checkAnswer() {
  var options = document.querySelectorAll('input[type=radio]:checked');
  var answer = options[0].value;
  var quizContainer = document.querySelector('.quiz-container');
  
  if (answer === "a") {
    document.getElementById("result").innerHTML = "Correct!";
    quizContainer.classList.remove('incorrect');
    quizContainer.classList.add('correct');
  } else {
    document.getElementById("result").innerHTML = "Incorrect.";
    quizContainer.classList.remove('correct');
    quizContainer.classList.add('incorrect');
  }
  
  options.forEach(function(option) {
    option.checked = false;
  });
}


const sentence = document.getElementById("sentence");
const options = document.querySelectorAll(".option");
let blank1 = null;
let blank2 = null;

options.forEach((option) => {
option.addEventListener("dragstart", dragStart);
});

sentence.addEventListener("dragover", dragOver);
sentence.addEventListener("drop", drop);

function dragStart(event) {
event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
event.preventDefault();
}

function drop(event) {
event.preventDefault();
const data = event.dataTransfer.getData("text/plain");
const option = document.getElementById(data);

if (event.target === sentence && !blank1) {
  blank1 = option.textContent;
  sentence.innerHTML = sentence.innerHTML.replace("_____", `<span id="blank1">${blank1}</span>`);
  option.parentNode.removeChild(option);
} else if (event.target === sentence && !blank2) {
  blank2 = option.textContent;
  sentence.innerHTML = sentence.innerHTML.replace("_____", `<span id="blank2">${blank2}</span>`);
  option.parentNode.removeChild(option);
}
}


const quizForm = document.getElementById("quiz-form");
const container = document.getElementById("container");

quizForm.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent default form submission behavior

      const answer = document.querySelector('input[name="answer"]:checked').value;
      
      if (answer === "false") {
        container.classList.add("correct");
        container.classList.remove("incorrect");
      } else {
        container.classList.add("incorrect");
        container.classList.remove("correct");
      }
    });
