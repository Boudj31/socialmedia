// Select the button
const toogle = document.querySelector('.slider');

// Listen for a click on the button
toogle.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('light-mode');  
})