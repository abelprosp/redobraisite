// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Redobrai Corp site loaded');
    
    // Future interactions can go here
    // Example: Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
