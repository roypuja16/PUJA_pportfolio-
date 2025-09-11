// Grab all nav buttons and modals
const navButtons = document.querySelectorAll('.nav-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

// Function to open one modal and hide others
function openModal(targetId) {
  modals.forEach(modal => {
    if (modal.id === targetId) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  });
}

// Event listeners for nav
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    // Hide home panel if not target
    document.querySelector('.panel').classList.toggle('active', target === 'home');
    openModal(target);
  });
});

// Event listeners for close buttons
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.add('hidden');
    // Return to home
    document.querySelector('.panel').classList.add('active');
  });
});

