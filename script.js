document.addEventListener('DOMContentLoaded', () => {
    const loadingPage = document.getElementById('loading-page');
    const mainPage = document.getElementById('main-page');
    const usernameElement = document.getElementById('username');
    const characterElement = document.getElementById('character');

    // Function to retrieve Telegram username from query parameters
    function getTelegramUsername() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('username') || 'Guest';
    }

    // Set the username in the main page
    usernameElement.textContent = getTelegramUsername();

    // Display loading page for 2.5 seconds, then show main page
    setTimeout(() => {
        loadingPage.classList.add('fade-out');
        setTimeout(() => {
            loadingPage.style.display = 'none';
            mainPage.style.display = 'flex';
        }, 1000); // Duration matches the fade-out animation
    }, 2500); // 2500 milliseconds = 2.5 seconds

    // Handle the tap/click event
    characterElement.addEventListener('click', () => {
        // Check if it's before 0 UTC
        const now = new Date();
        const hoursToMidnight = (24 - now.getUTCHours()) % 24;
        
        if (hoursToMidnight > 0) {
            characterElement.src = 'assets/character.gif';
        }
    });
});
