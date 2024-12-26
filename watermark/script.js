(function() {
  window.addEventListener('load', function() {
    // Create the image element
    var logoImg = document.createElement('img');
    logoImg.src = 'https://raw.githubusercontent.com/voxxdevv/lmdesigns/refs/heads/main/images/lmc.png';  // Replace with the actual URL of your logo
    logoImg.alt = 'Page watermarked by Loud Monkey Designs™.';

    // Style the image to appear in the bottom-right corner
    logoImg.style.position = 'fixed';
    logoImg.style.bottom = '20px';  // Distance from the bottom
    logoImg.style.right = '20px';   // Distance from the right
    logoImg.style.width = 'calc(40px + 2.2em)';   // Width of the image
    logoImg.style.height = 'calc(40px + 2.2em)';  // Height of the image
    logoImg.style.opacity = '0.4';  // Set the opacity to 0.4

    // Append the image to the body of the page
    document.body.appendChild(logoImg);

    // Log to verify that the image is added
    console.log("Page watermarked by Loud Monkey Designs™.");
  });
})();