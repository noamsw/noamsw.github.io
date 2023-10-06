// JavaScript to handle button clicks and smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.getElementById('aboutButton');
    const projectsButton = document.getElementById('projectsButton');
    const blogButton = document.getElementById('blogButton');

    aboutButton.addEventListener('click', function () {
        scrollToSection('.about');
    });

    projectsButton.addEventListener('click', function () {
        scrollToSection('.projects');
    });

    blogButton.addEventListener('click', function () {
        scrollToSection('.blog');
    });

    function scrollToSection(sectionClass) {
        const section = document.querySelector(sectionClass);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
});
