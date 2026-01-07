document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('box');
    const navContainer = document.querySelector('.nav-container');
    
    hamburger?.addEventListener('click', function() {
        navContainer?.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');
    });
});