function toggleVisibility(sectionToShow) {
    // Hide both sections
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('signup-section').classList.add('hidden');

    // Show the requested section
    document.getElementById(sectionToShow).classList.remove('hidden');

    // Change body background gradient
    if (sectionToShow === 'signup-section') {
        document.body.style.background = 'linear-gradient(45deg, #093028, #237A57)';
    } else {
        document.body.style.background = 'linear-gradient(45deg, #0F2027, #203A43, #2C5364)';
    }
}
