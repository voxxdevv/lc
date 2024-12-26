// script.js
(function() {
  // Ensure the script only runs once the document is fully loaded
  window.addEventListener('load', function() {
    // Create the logo circle container
    var logoCircle = document.createElement('div');
    logoCircle.id = 'logo-circle';
    
    // Create an image element and set its source to your logo
    var logoImg = document.createElement('img');
    logoImg.src = 'https://yourcdn.com/logo.png';  // Replace with your logo URL
    logoImg.alt = 'Logo';

    // Append the image to the logo circle
    logoCircle.appendChild(logoImg);

    // Append the logo circle to the body of the page
    document.body.appendChild(logoCircle);
  });
})();