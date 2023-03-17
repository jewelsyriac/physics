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
const closeDialogButtons = document.querySelectorAll('.close-dialog');

openDialogButtons.forEach(openDialogButton => { 
  openDialogButton.addEventListener('click', event => {
    event.preventDefault();
    const dialogBoxId = `dialog${openDialogButton.getAttribute("id")}`;
    const dialogBox = document.getElementById(dialogBoxId);
    const rect = openDialogButton.getBoundingClientRect();
    dialogBox.classList.add('active');
    dialogBox.style.zIndex = "999";
  });
});

closeDialogButtons.forEach(closeDialogButton => {
  closeDialogButton.addEventListener('click', event => {
    event.preventDefault();
    const dialogBoxId = `${closeDialogButton.getAttribute("id")}`;
    document.getElementById(dialogBoxId).classList.remove('active');
  });
});


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
    var answer1 = ((Math.log(divisionTime +2))/(2*0.125)).toFixed(2);
    var mass = divisionTime +10 ;
    var forceConstant = number+50 ;
    var dampingConstant = divisionTime + 1 ;
    var answer2 = Math.sqrt((forceConstant/mass)-((dampingConstant/(2*mass))**2)).toFixed(2);
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


  
 

  



