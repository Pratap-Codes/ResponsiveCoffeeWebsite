document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('box');
    const navContainer = document.querySelector('.nav-container');
    
    if (hamburger && navContainer) {
        hamburger.addEventListener('click', function() {
            navContainer.classList.toggle('active');
            
            // Toggle icon - FIXED for bxr prefix
            const icon = this.querySelector('i');
            console.log('Icon classes:', icon.className); // Debug
            
            // For bxr prefix (your current setup)
            if (icon.classList.contains('bx-menu')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x');
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
            
            // If using regular boxicons (recommended)
            // if (icon.classList.contains('bx-menu')) {
            //     icon.classList.replace('bx-menu', 'bx-x');
            // } else {
            //     icon.classList.replace('bx-x', 'bx-menu');
            // }
        });
    }
});