document.addEventListener('DOMContentLoaded', function() {
  // Get screen elements
  const preloader = document.getElementById('preloader');
  const backgroundScreen = document.getElementById('background-screen');
  const timeoutScreen = document.getElementById('timeout-screen');
  const loginScreen = document.getElementById('login-screen');
  
  // Get form elements
  const emailForm = document.getElementById('emailForm');
  const passwordForm = document.getElementById('passwordForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const userEmailSpan = document.getElementById('user-email');
  const backButton = document.getElementById('back-button');
  const emailSection = document.getElementById('email-form');
  const passwordSection = document.getElementById('password-form');
  const hiddenEmailInput = document.getElementById('hidden-email');
  
  // Get modal elements
  const errorModal = document.getElementById('error-modal');
  const closeModal = document.querySelector('.close-modal');
  const tryAgainBtn = document.getElementById('try-again-btn');

  // Store user email
  let userEmail = '';

  // Add input focus effects
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    // Add focus class to parent when input is focused
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    // Remove focus class when input loses focus
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });

  // Sequence of screens with smoother transitions
  setTimeout(() => {
    // Fade out preloader
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.classList.remove('active');
      preloader.style.opacity = '1';
      
      // Show background with fade in
      backgroundScreen.classList.add('active');
      backgroundScreen.classList.add('fade-in');
      
      // After 2 seconds, transition to timeout screen
      setTimeout(() => {
        backgroundScreen.style.opacity = '0';
        setTimeout(() => {
          backgroundScreen.classList.remove('active');
          backgroundScreen.style.opacity = '1';
          
          // Show timeout screen with fade in
          timeoutScreen.classList.add('active');
          timeoutScreen.classList.add('slide-up');
          
          // After 2 more seconds, transition to login screen
          setTimeout(() => {
            timeoutScreen.style.opacity = '0';
            setTimeout(() => {
              timeoutScreen.classList.remove('active');
              timeoutScreen.style.opacity = '1';
              
              // Show login screen with fade in
              loginScreen.classList.add('active');
              loginScreen.classList.add('fade-in');
            }, 500);
          }, 2000);
        }, 500);
      }, 2000);
    }, 500);
  }, 4000);

  // Handle email form submission
  emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    userEmail = emailInput.value.trim();
    
    if (userEmail) {
      userEmailSpan.textContent = userEmail;
      
      // Smooth transition between forms
      emailSection.style.opacity = '0';
      setTimeout(() => {
        emailSection.classList.remove('active');
        passwordSection.classList.add('active');
        // Start with opacity 0 and fade in
        passwordSection.style.opacity = '0';
        setTimeout(() => {
          passwordSection.style.opacity = '1';
          passwordSection.classList.add('slide-up');
          passwordInput.focus();
          // Set the hidden email input value
          hiddenEmailInput.value = userEmail;
        }, 50);
      }, 300);
    }
  });

  // Handle password form submission
  passwordForm.addEventListener('submit', function(e) {
    const password = passwordInput.value.trim();
    
    if (password) {
      // Show error modal after a short delay
      setTimeout(() => {
        errorModal.style.display = 'flex';
      }, 300);
      
      // Prevent the default form submission for the demo
      // e.preventDefault();
    }
  });

  // Handle back button
  backButton.addEventListener('click', function() {
    // Smooth transition between forms
    passwordSection.style.opacity = '0';
    setTimeout(() => {
      passwordSection.classList.remove('active');
      emailSection.classList.add('active');
      // Start with opacity 0 and fade in
      emailSection.style.opacity = '0';
      setTimeout(() => {
        emailSection.style.opacity = '1';
        emailSection.classList.add('slide-up');
        emailInput.focus();
      }, 50);
    }, 300);
  });
  
  // Close modal when clicking the X
  closeModal.addEventListener('click', function() {
    errorModal.style.display = 'none';
    passwordInput.value = '';
    passwordInput.focus();
  });
  
  // Close modal when clicking "Try again" button
  tryAgainBtn.addEventListener('click', function() {
    errorModal.style.display = 'none';
    passwordInput.value = '';
    passwordInput.focus();
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === errorModal) {
      errorModal.style.display = 'none';
      passwordInput.value = '';
      passwordInput.focus();
    }
  });
});