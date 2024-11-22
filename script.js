// Navigation functionality
const navButtons = document.querySelectorAll('.nav-button');
        
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
    });
});

// Smooth scroll for the Explore Design button
document.querySelector('.button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({ 
        behavior: 'smooth' 
    });
});