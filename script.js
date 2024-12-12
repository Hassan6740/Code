function toggleVisibility(sectionToShow) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('signup-section').classList.add('hidden');
    document.getElementById(sectionToShow).classList.remove('hidden');
}