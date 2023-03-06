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

if (window.innerWidth < 920) {

if (window.location.pathname.endsWith('/index.html')) {
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



  



