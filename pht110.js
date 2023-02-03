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
const sidebar = document.querySelector(".side-navbar")
const computedStyles = getComputedStyle(sidebar);


sidebutton.addEventListener('click', function () {
    if (computedStyles.display === "none") {
        sidebar.style.display = "block";



    } else {
        sidebar.style.display = "none";

    }
});
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






