// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the flower animations
  initFlowers();
  
  // Handle the message button click
  const messageBtn = document.getElementById('messageBtn');
  if (messageBtn) {
      messageBtn.addEventListener('click', function() {
          // Create a transition effect before going to the message page
          document.body.classList.add('fade-out');
          
          // Wait for the fade-out animation to complete
          setTimeout(function() {
              window.location.href = 'message.html';
          }, 0); // Match this duration with your CSS transition time
      });
  }
  
  // Add click handler for the night element if you want that to also trigger the message
  const nightElement = document.querySelector('.night');
  if (nightElement) {
      nightElement.addEventListener('click', function() {
          document.body.classList.add('fade-out');
          setTimeout(function() {
              window.location.href = 'message.html';
          });
      });
  }
});

// Function to initialize flower animations
function initFlowers() {
  // Add 'loaded' class to body to start animationsggit
  setTimeout(function() {
      document.body.classList.remove('not-loaded');
      document.body.classList.add('loaded');
  }, );
  
  // You can add more flower animation logic here if needed
  // For example, making flowers interactive:
  const flowers = document.querySelectorAll('.flower');
  flowers.forEach(flower => {
      flower.addEventListener('click', function() {
          this.classList.toggle('flower--active');
      });
  });
}
const music = document.getElementById("bg-music");

// Ensure music plays after first user interaction (for autoplay restrictions)
document.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(err => {
            console.log("Autoplay failed:", err);
        });
    }
}, { once: true });

// Optional: Toggle music with a button
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


// Add this to your style.css for the fade effect:
/*
.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
*/