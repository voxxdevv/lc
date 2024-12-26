// script.js
(function() {
  window.addEventListener('load', function() {
    console.log("Page is fully loaded!");

    // Create the logo circle container
    var logoCircle = document.createElement('div');
    logoCircle.id = 'logo-circle';
    
    // Create an image element and set its source to your logo
    var logoImg = document.createElement('img');
    logoImg.src = 'https://raw.githubusercontent.com/voxxdevv/lmdesigns/refs/heads/main/images/lmc.png';  // Replace with your logo URL
    logoImg.alt = 'Logo';

    // Append the image to the logo circle
    logoCircle.appendChild(logoImg);

    // Append the logo circle to the body of the page
    document.body.appendChild(logoCircle);

    // Show the circle (unhide it)
    logoCircle.style.visibility = 'visible';
    
    console.log("Logo circle added to the page!");
  });
})();