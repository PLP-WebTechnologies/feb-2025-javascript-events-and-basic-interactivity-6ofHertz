// Event Handling
const artButton = document.getElementById('artButton');
const hoverText = document.getElementById('hoverText');
const keyOutput = document.getElementById('keyOutput');
const secretAction = document.getElementById('secretAction');

artButton.addEventListener('click', () => {
  artButton.textContent = "Clicked!";
  artButton.style.backgroundColor = "#555";
});

hoverText.addEventListener('mouseover', () => {
  hoverText.style.color = 'crimson';
  hoverText.style.transform = 'scale(1.1)';
});
hoverText.addEventListener('mouseout', () => {
  hoverText.style.color = '#222';
  hoverText.style.transform = 'scale(1)';
});

document.addEventListener('keydown', (e) => {
  keyOutput.textContent = e.key;
});

// Secret: double-click or long press
let pressTimer;

hoverText.addEventListener('dblclick', () => {
  secretAction.textContent = '✨ Secret Double-Click Unlocked! ✨';
});

// Long press (hold for 2s)
hoverText.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    secretAction.textContent = '🎉 Long Press Surprise!';
  }, 2000);
});

hoverText.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// Image Gallery / Slideshow
const galleryImage = document.getElementById('galleryImage');
const nextImage = document.getElementById('nextImage');

const imageUrls = [
  'https://source.unsplash.com/800x500/?art,painting',
  'https://source.unsplash.com/800x500/?gallery,modern',
  'https://source.unsplash.com/800x500/?installation,art',
  'https://source.unsplash.com/800x500/?abstract,art'
];

let currentImage = 0;

nextImage.addEventListener('click', () => {
  currentImage = (currentImage + 1) % imageUrls.length;
  galleryImage.src = imageUrls[currentImage] + '&' + new Date().getTime();
});

// Tabs
const tabButtons = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabContents.forEach(content => content.style.display = 'none');
    document.getElementById(`tab${button.dataset.tab}`).style.display = 'block';
  });
});

// Form Validation
const form = document.getElementById('artForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

email.addEventListener('input', () => {
  if (!email.validity.valid) {
    emailFeedback.textContent = 'Please enter a valid email address.';
  } else {
    emailFeedback.textContent = '';
  }
});

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    passwordFeedback.textContent = 'Password must be at least 8 characters.';
  } else {
    passwordFeedback.textContent = '';
  }
});

form.addEventListener('submit', (e) => {
  if (!email.value || password.value.length < 8) {
    e.preventDefault();
    alert('Please complete the form correctly.');
  }
});
