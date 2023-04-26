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

if (window.location.pathname.endsWith('/exercises.html')){
  const generatorButton = document.getElementById("questionGeneratorButton");
  generatorButton.addEventListener('click', event => {
      var inputField = document.getElementById("input-field");
      var moduleField = document.getElementById("module-field");
      // This if conditions selects the module number  1st module //
      if (moduleField.value == 1){
        var number = parseInt(inputField.value);
        var divisionTime = Math.floor(number / 10);
        var questionSpace = document.getElementById("questions");
        var questionList = questionSpace.querySelector("ol");
        var Question1 = document.createElement("li");
        Question1.textContent = "A damped harmonic oscillator has a Q-value of "+(number*500)+" and a frequency of "+(number*100)+" Hz. Find the time required for the energy of the oscillator to decrease to 1/10th of its initial value. ";
        questionList.appendChild(Question1);
        var Question2 = document.createElement("li");
        Question2.textContent = "A damped oscillator of mass "+(divisionTime +2)+"g has a force constant "+ (number+10)+" N/m and damping constant "+(divisionTime + 1)+" s-1. Find the angular frequency with and without damping.";
        questionList.appendChild(Question2);
        var Question3 = document.createElement("li");
        Question3.textContent = "The string of violin "+(number+10)+" cm long and has a mass of 0.2g. With what tension it must be stretched to tune "+(number*100)+"Hz? ";
        questionList.appendChild(Question3);
        var Question4 = document.createElement("li");
        Question4.textContent = "The displacement of a wave is represented by y = "+(number*10)+" Sin("+(number)+"x - "+(number*60)+"t),where x is measured in metres and t in secs. Deduce amplitude, time period, velocity and wavelength?";
        questionList.appendChild(Question4);
        var Question5 = document.createElement("li");
        Question5.textContent = "A uniform steel wire has length "+(number*3)+"m and mass "+(number/10)+" kg. Find the Tension in the string if the speed of transverse wave on the wire is "+(number*15)+"m/s.";
        questionList.appendChild(Question5);
        var Question6 = document.createElement("li");
        Question6.textContent = "The frequency of a tuning fork is "+(number*50)+". If the quality factor Q = "+(number*100)+", find the time after which its amplitude becomes half of its initial value.";
        questionList.appendChild(Question6);
        var Question7 = document.createElement("li");
        Question7.textContent = "The equation of transverse wave travelling along a stretched string is given by, ψ = "+(number*5)+" cos ("+(number+3)+"πx+"+(number*10)+"πt + π/2) where ψ and x are in cm and t is in second. Find the amplitude, frequency, velocity, wave length and initial phase.";
        questionList.appendChild(Question7);
        var Question8 = document.createElement("li");
        Question8.textContent = "A string of mass 0.65kg is stretched between two supports "+(number)+"m apart. If the tension in string is "+(number*10)+"N, find velocity of wave in string? How long pulse will take to travel from one support to another.";
        questionList.appendChild(Question8);
        var Question9 = document.createElement("li");
        Question9.textContent = "A simple harmonic wave is represented by y = "+(number*2)+" sin 2π("+(number+1)+"x+"+(number*3)+"t + 1/3). Find wavelength, wavevector, amplitude and velocity of wave. Also find the displacement of particle "+(number)+"cm from origin and 2 seconds after start of motion. ( x,y in cm & t is seconds)";
        questionList.appendChild(Question9);
        var Question10 = document.createElement("li");
        Question10.textContent = "The amplitude of an under damped oscillator reduces to 1/10th of initial value after 100 oscillations. It's time period is "+(number)+"s. Find the damping constant and relaxation time. ";
        questionList.appendChild(Question10);
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
        
    answerButton.addEventListener('click', event => {
        answerList.appendChild(newAnswer);
        answerList.appendChild(newAnswer1);
        answerSpace.style.display="block";
        
        
    });
}
// second module //

else if (moduleField.value == 2){
  var number = parseInt(inputField.value);
        var divisionTime = Math.floor(number / 10);
        var questionSpace = document.getElementById("questions");
        var questionList = questionSpace.querySelector("ol");
        var Question1 = document.createElement("li");
        Question1.textContent = "The diameter of the "+(number)+"th bright ring in Newton’s ring experiment is "+(number)+"x10-3 m. Find the radius of curvature of the lens used, if the wavelength of light is "+(number*10)+"nm.";
        questionList.appendChild(Question1);
        var Question2 = document.createElement("li");
        Question2.textContent = "Light of wavelength "+(number*100)+"A° falls normally on two glass plates enclosing a wedge shaped film. The plates touch at one end and are separated at 10cm from that end by a wire. If the bandwidth of the interference pattern is "+(number)+" mm, find diameter of the wire.";
        questionList.appendChild(Question2);
        var Question3 = document.createElement("li");
        Question3.textContent = "Diameter of " + (number)+"th  and "+(number +10)+"th dark ring of a newtons ring set up is measured as "+(number+8)+" mm and  "+(number+35)+"mm. Find the wavelength of light used to produce this interference pattern if radius of curvature of plano-convex lens used is 100 cm.";
        questionList.appendChild(Question3);
        var Question4 = document.createElement("li");
        Question4.textContent = "Diameter of " + (number+3)+"th  and "+(number +15)+"th dark ring of a newtons ring set up is measured as "+(number)+" mm and  "+(number+50)+"mm. Find the radius of curvature of plano convex lens used to produce this interference pattern if wavelength of light used is 586 nm.";
        questionList.appendChild(Question4);
        var Question5 = document.createElement("li");
        Question5.textContent = "In a Newton’s Ring experiment, the diameter of  "+(number +5)+"th dark ring changes from 1 cm to 0.3 cm and diameter of 5 th ring changes from 0.5 cm to 0.25 cm when a liquid is introduced between the plate and convex lens. Calculate the refractive index of liquid.";
        questionList.appendChild(Question5);
        var Question6 = document.createElement("li");
        Question6.textContent = "Newton’s rings are observed by source emitting light of wavelength λ1 = "+(number*50)+" nm and λ2 = "+(number*40)+"nm. It is found that nth dark ring due to λ1 coincides with (n+5)th dark ring due to λ2 . If the radius of curvature of lens is 100 cm. Calculate the diameter of "+(number)+"th dark ring of λ1.";
        questionList.appendChild(Question6);
        var Question7 = document.createElement("li");
        Question7.textContent = "A monochromatic light of wavelength "+(number*500)+" Å is incident normally on a soap film of μ = 1."+(number)+". What is the least thickness of the film that will appear dark by reflection ?";
        questionList.appendChild(Question7);
        var Question8 = document.createElement("li");
        Question8.textContent = "What is the highest order spectrum which may be obtained with a light of wavelength "+(number*60)+" nm by means of a plane transmission grating having "+(number*250)+" lines per cm?";
        questionList.appendChild(Question8);
        var Question9 = document.createElement("li");
        Question9.textContent = "A grating has "+(number*200)+" lines/cm. Find angular separation between two wavelengths 577nm and 579 nm in the second order.";
        questionList.appendChild(Question9);
        var Question10 = document.createElement("li");
        Question10.textContent = "Light of wavelength 5893Å is reflected at nearly normal incidence from a soap film of refractive index 1."+(number+9)+". What is the least thickness of the film that will appear (i) dark and (ii) bright?";
        questionList.appendChild(Question10);
        questionSpace.classList.add('active');
        questionSpace.style.fontFamily = "Times New Roman";
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
        
    answerButton.addEventListener('click', event => {
        answerList.appendChild(newAnswer);
        answerList.appendChild(newAnswer1);
        answerSpace.style.display="block";
        
        
    });
}
else if (moduleField.value == 3){
  var number = parseInt(inputField.value);
  var divisionTime = Math.floor(number / 10);
  var questionSpace = document.getElementById("questions");
  var questionList = questionSpace.querySelector("ol");
  var newQuestion1 = document.createElement("li");
  newQuestion1.textContent = "Question 1";
  questionList.appendChild(newQuestion1);
  var newQuestion2 = document.createElement("li");
  newQuestion2.textContent = "Question 2";
  questionList.appendChild(newQuestion2);
  questionSpace.classList.add('active');
  var answerSpace = document.getElementById("answers");
  var answerList = answerSpace.querySelector("ol");
  // equation of question 1 //
  var answer1 = ((Math.log(divisionTime +2))/(2*0.125)).toFixed(1);
  var mass = divisionTime +10 ;
  var forceConstant = number+50 ;
  var dampingConstant = divisionTime + 1 ;
  //equation of question 2 //
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
}else if (moduleField.value == 4){
  var number = parseInt(inputField.value);
  var divisionTime = Math.floor(number / 10);
  var questionSpace = document.getElementById("questions");
  var questionList = questionSpace.querySelector("ol");
  var newQuestion1 = document.createElement("li");
  newQuestion1.textContent = "Question 1";
  questionList.appendChild(newQuestion1);
  var newQuestion2 = document.createElement("li");
  newQuestion2.textContent = "Question 2";
  questionList.appendChild(newQuestion2);
  questionSpace.classList.add('active');
  var answerSpace = document.getElementById("answers");
  var answerList = answerSpace.querySelector("ol");
  // equation of question 1 //
  var answer1 = ((Math.log(divisionTime +2))/(2*0.125)).toFixed(1);
  var mass = divisionTime +10 ;
  var forceConstant = number+50 ;
  var dampingConstant = divisionTime + 1 ;
  //equation of question 2 //
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
}else if (moduleField.value == 5){
  var number = parseInt(inputField.value);
  var divisionTime = Math.floor(number / 10);
  var questionSpace = document.getElementById("questions");
  var questionList = questionSpace.querySelector("ol");
  var newQuestion1 = document.createElement("li");
  newQuestion1.textContent = "Question 1";
  questionList.appendChild(newQuestion1);
  var newQuestion2 = document.createElement("li");
  newQuestion2.textContent = "Question 2";
  questionList.appendChild(newQuestion2);
  questionSpace.classList.add('active');
  var answerSpace = document.getElementById("answers");
  var answerList = answerSpace.querySelector("ol");
  // equation of question 1 //
  var answer1 = ((Math.log(divisionTime +2))/(2*0.125)).toFixed(1);
  var mass = divisionTime +10 ;
  var forceConstant = number+50 ;
  var dampingConstant = divisionTime + 1 ;
  //equation of question 2 //
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
}
  });

} 
function rollVariablesGenerator(rollNumber,variableNumber){
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

/* if (window.location.pathname.endsWith('/teachershub.html')){
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

}  */




  