const mainTopics = document.querySelectorAll('.main-topic');

mainTopics.forEach((topic) => {
    topic.addEventListener('click', () => {
        topic.classList.toggle('active');
    });
});
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');


dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });
});


const buttons = document.querySelectorAll('.button')
for (let button of buttons) {
    let idname = button.getAttribute('id');
    button.addEventListener('click', () => {
        // Open a new window with the specified URL
        window.open(`${idname}.html`, '_self');
    });
}
const closeDialogButtons = document.querySelectorAll('.close-dialog');
const mainContent = document.querySelector(".main-content")
const sidebutton = document.querySelector(".sidebar-toggle-button")

if (window.matchMedia("(max-width: 920px)").matches) {

 if (window.location.pathname.endsWith('/index.html') || window.location.href === 'https://jewelsyriac.github.io/physics/#') {
    const sidebar = document.querySelector(".side-navbar")
    const computedStyles = getComputedStyle(sidebar);
    sidebutton.addEventListener('click', function () {
        if (computedStyles.display === "none") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
    
        }
    });
    mainContent.addEventListener('click',function(){
        sidebar.style.display = "none";
    });
    
  } else {

    const rightSidebar = document.querySelector(".right-side-navbar");
    const rightcomputedStyles = getComputedStyle(rightSidebar);
    sidebutton.addEventListener('click', function () {
        if (rightcomputedStyles.display === "none") {
            rightSidebar.style.display = "block";
            rightSidebar.style.left = "0";
            rightSidebar.style.top = "50";
            rightSidebar.style.zIndex = "99";
        } else {
            rightSidebar.style.display = "none";
    
        }
    });
    mainContent.addEventListener('click',function(){
        rightSidebar.style.display = "none";
        
    });
  }
}

const courses = document.querySelectorAll(".featured-course")

for (let course of courses) {
    let selectButton = course.querySelector("a")
    let buttonName = selectButton.getAttribute('id');
    course.addEventListener('click', () => {
        // Open a new window with the specified URL
        window.open(`${buttonName}.html`, '_self');
    });
}
let elements = document.querySelectorAll(".featured-course");
for (let element of elements) {

    let width = element.offsetWidth;
    element.style.height = String(width * 1.3) + "px";

}

const openDialogButtons = document.querySelectorAll('.open-dialog');


openDialogButtons.forEach(openDialogButton => { 
  openDialogButton.addEventListener('click', event => {
    event.preventDefault();
    const dialogBoxId = `dialog${openDialogButton.getAttribute("id")}`;
    const dialogBox = document.getElementById(dialogBoxId);
    dialogBox.classList.add('active');
   
  });
});

closeDialogButtons.forEach(closeDialogButton => {
  closeDialogButton.addEventListener('click', event => {
    event.preventDefault();
    const dialogBoxId = `${closeDialogButton.getAttribute("id")}`;
    document.getElementById(dialogBoxId).classList.remove('active');
  });
})
const openAnswerButtons = document.querySelectorAll('.open-answer');
const closeanswerButtons = document.querySelectorAll('.close-answer');


openAnswerButtons.forEach(openAnswerButton => { 
  openAnswerButton.addEventListener('click', event => {
    event.preventDefault();
    const answerBoxId = `answer${openAnswerButton.getAttribute("id")}`;
    const answerBox = document.getElementById(answerBoxId);
    answerBox.classList.add('active');
   
  });
});

closeanswerButtons.forEach(closeanswerButton => {
  closeanswerButton.addEventListener('click', event => {
    event.preventDefault();
    const answerBoxId = `${closeanswerButton.getAttribute("id")}`;
    document.getElementById(answerBoxId).classList.remove('active');
  });
})

const closeAnswerCrossButtons = document.querySelectorAll('.close-btn');
closeAnswerCrossButtons.forEach(closeAnswerCrossButton => {
  closeAnswerCrossButton.addEventListener('click', event => {
    event.preventDefault();
    const answerBoxId = `${closeAnswerCrossButton.getAttribute("id")}`;
    document.getElementById(answerBoxId).classList.remove('active');
  });
})

/* if (window.location.pathname.endsWith('/exercises.html')){
  const generatorButton = document.getElementById("questionGeneratorButton");
  generatorButton.addEventListener('click', event => {
      var inputField = document.getElementById("input-field");
      var number = parseInt(inputField.value);
      var divisionTime = Math.floor(number / 10);
      var questionSpace = document.getElementById("questions");
      var questionList = questionSpace.querySelector("ol");
      var newQuestion1 = document.createElement("li");
      newQuestion1.textContent = "A damped harmonic oscillator has a Q-value of "+(number*250)+" and a frequency of "+(number*10)+" Hz. Find the time required for the energy of the oscillator to decrease to 1/"+(divisionTime +2)+" of its initial value. ";
      questionList.appendChild(newQuestion1);
      var newQuestion2 = document.createElement("li");
      newQuestion2.textContent = "A damped oscillator of mass "+(divisionTime +10)+"kg has a force constant "+ (number+50)+" N/m and damping constant "+(divisionTime + 1)+" s-1. Find the angular frequency with this damping.";
      questionList.appendChild(newQuestion2);
      questionSpace.classList.add('active');
      var answerSpace = document.getElementById("answers");
      var answerList = answerSpace.querySelector("ol");
      var answer1 = ((Math.log(divisionTime +2))/(2*0.125)).toFixed(1);
      var mass = divisionTime +10 ;
      var forceConstant = number+50 ;
      var dampingConstant = divisionTime + 1 ;
      var answer2 = Math.sqrt((forceConstant/mass)-((dampingConstant/(2*mass))**2)).toFixed(1);
      var newAnswer = document.createElement("li");
      newAnswer.textContent = answer1+" seconds.";
      var newAnswer1 = document.createElement("li");
      newAnswer1.textContent = answer2+" Hz.";
      const answerButton = document.getElementById("answerbutton");
      const answerField = document.getElementById('answer-input1');
    const submitButton = document.getElementById('submit-button1');
    const resultElement = document.getElementById('result');
    submitButton.addEventListener('click', () => {
      const inputValue = answerField.value;
      if (inputValue === answer1) {
        resultElement.textContent = 'Great, Correct answer!';
        document.body.style.backgroundColor = "rgb(230, 255, 230)";
      } else {
        resultElement.textContent = 'Incorrect. Please try again.';
        document.body.style.backgroundColor = "rgb(255, 230, 230)";
      }
    });
    const answerField2 = document.getElementById('answer-input2');
    const submitButton2 = document.getElementById('submit-button2');
    const resultElement2 = document.getElementById('result2');
    submitButton2.addEventListener('click', () => {
      const inputValue2 = answerField2.value;
      if (inputValue2 === answer2) {
        resultElement2.textContent = 'Great, Correct answer!';
        document.body.style.backgroundColor = "rgb(230, 255, 230)";
      } else {
        resultElement2.textContent = 'Incorrect. Please try again.';
        document.body.style.backgroundColor = "rgb(255, 230, 230)";
      }
    });
  answerButton.addEventListener('click', event => {
      answerList.appendChild(newAnswer);
      answerList.appendChild(newAnswer1);
      answerSpace.style.display="block";
      
      
  });
  });
} */
/* function rollVariablesGenerator(rollNumber,variableNumber){
  const rollVariableList = [];
  let currentNumber = rollNumber;
  for (let i = 0; i < variableNumber; i++) {
    currentNumber = (currentNumber * 7 + 13) % 101;
    rollVariableList.push(currentNumber);
  }
  return rollVariableList;
}

function questionGenerator(question, rollVariableList) {
  for (let i = 0; i < rollVariableList.length; i++) {
    question = question.replace(`variable${i+1}`,rollVariableList[i]);
  }
  let newQuestion = question;
  return newQuestion;
}

 
function countVariables(inputQuestion) {
  const variables = ['variable1', 'variable2', 'variable3', 'variable4', 'variable5', 'variable6', 'variable7', 'variable8', 'variable9', 'variable10'];
  const words = inputQuestion.split(' ');

  let totalCount = 0;
  for (let i = 0; i < variables.length ; i++) {
    for (let j = 0; j < words.length ; j++) {
      if (variables[i] === words[j]){
        totalCount += 1 ;
      }
    }
  }

  return totalCount;
}

function replaceNumbersWithVariables(inputString) {
  let variableCount = 0;
  return inputString.replace(/\d+/g, match => {
    variableCount++;
    return `variable${variableCount}`;
  });
}
function countNumbers(inputString) {
  const regex = /\d+/g;
  const matches = inputString.match(regex);
  return matches ? matches.length : 0;
}


function questionCreator(rollNumber,question){
  let variableNumber = countNumbers(question);
  let rollVariables = rollVariablesGenerator(rollNumber,variableNumber);
  let questionTemplate = replaceNumbersWithVariables(question);
  let newQuestion = questionGenerator(questionTemplate,rollVariables);
  return newQuestion
}

function multipleQuestionGenerator(sampleQuestion,numberOfQuestions){
  let questionArray = []
  for (let i = 0; i < numberOfQuestions ; i++) {
    const question = questionCreator(i,sampleQuestion);
    questionArray.push(question);
    };
  return questionArray;
}


const buttonQuestionGenerator = document.getElementById("questionCreatorButton");

if (window.location.pathname.endsWith('/teachershub.html')){
  buttonQuestionGenerator.addEventListener('click', function() {
    const questionSpace = document.getElementById("questionListSpace");
    var questionHeader = document.createElement("h3");
    questionHeader.textContent = " Here are the clones of your question : ";
    questionSpace.appendChild(questionHeader);
    const sampleQuestion = document.getElementById("questionInput").value;
    const numberOfQuestions = document.getElementById("numberInput").value;
    let questionsArray = multipleQuestionGenerator(sampleQuestion,numberOfQuestions);
    const questionsList = document.getElementById("questionsList");
    for (let i = 0; i < questionsArray.length; i++) {
      try {
        const questionOne = document.createElement('li');
        const questionText = renderMathJax(questionsArray[i]);
        questionOne.appendChild(questionText);
        questionsList.appendChild(questionOne);
      } catch (error) {
        const questionOne = document.createElement("li");
        questionOne.textContent = questionsArray[i];
        questionsList.appendChild(questionOne);
      }
    }
    
   
    
  });

} */




  