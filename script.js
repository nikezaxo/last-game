document.addEventListener("DOMContentLoaded", () => {
    const loadingElement = document.getElementById('loading');
    const gameElement = document.getElementById('game');
    const character1Img = document.getElementById('character1');
    const characterImg = document.getElementById('character');
    const usernameElement = document.getElementById('username');
  
    // Simulate a loading screen for 2.5 seconds
    setTimeout(() => {
      // Apply a fade-out effect
      loadingElement.style.transition = 'opacity 1s ease-out';
      loadingElement.style.opacity = '0';
  
      // Wait for the fade-out transition to complete
      setTimeout(() => {
        loadingElement.style.display = 'none';
        gameElement.style.display = 'flex';
      }, 1000); // Matches the transition duration
    }, 2500); // Initial delay
  
    // Check if Telegram Web App SDK is available
    if (window.Telegram && window.Telegram.WebApp) {
      const username = window.Telegram.WebApp.initDataUnsafe?.user?.username || 'Guest';
      usernameElement.textContent = username;
    } else {
      usernameElement.textContent = 'Guest';
    }
  
    // Handle click event to switch character images
    character1Img.addEventListener('click', () => {
      character1Img.style.display = 'none';
      characterImg.style.display = 'block';
    });
  });
  