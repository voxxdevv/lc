(function() {
  window.addEventListener('load', function() {
    // Log to verify that the script runs
    console.log("Page loaded and script executed.");

    // Create the logo circle container
    var logoCircle = document.createElement('div');
    logoCircle.id = 'logo-circle';

    // Style the circle with JavaScript
    logoCircle.style.position = 'fixed';
    logoCircle.style.bottom = '20px';
    logoCircle.style.right = '20px';
    logoCircle.style.width = '60px';  // Size of the circle
    logoCircle.style.height = '60px'; // Size of the circle
    logoCircle.style.backgroundColor = 'rgba(46, 46, 46, 0.8)';
    logoCircle.style.borderRadius = '50%';  // This makes it a circle
    logoCircle.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.5)';
    logoCircle.style.zIndex = '9999';
    logoCircle.style.display = 'flex';
    logoCircle.style.alignItems = 'center';
    logoCircle.style.justifyContent = 'center';
    logoCircle.style.opacity = '0.3';  // Set the opacity to 0.3

    // Create the image element for the logo
    var logoImg = document.createElement('img');
    logoImg.src = 'https://raw.githubusercontent.com/voxxdevv/lmdesigns/refs/heads/main/images/lmc.png';  // Replace with your logo URL
    logoImg.alt = 'Logo';
    
    // Style the logo image to fit within the circle
    logoImg.style.width = '50px';  // Adjust size of the logo
    logoImg.style.height = '50px'; // Adjust size of the logo
    logoImg.style.objectFit = 'fill';  // Ensures the image fills the circle

    // Append the image to the circle
    logoCircle.appendChild(logoImg);

    // Append the logo circle to the body of the page
    document.body.appendChild(logoCircle);

    // Log to verify that the logo circle is added
    console.log("Logo circle added to the page!");
  });
})();