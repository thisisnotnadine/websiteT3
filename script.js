// Set the initial font family and image background effects on page load
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define an array of fonts
    const fonts = [
        'timesnewnewroman', // First font
        'timesnewnewroman3', // Middle font
        'timesnewnewroman-copy' // Last font
    ];

    let currentFontIndex = 0;
    const displayDuration = 5000; // Duration for each font (5 seconds)

    // Change font every displayDuration milliseconds
    const changeFont = () => {
        body.style.fontFamily = fonts[currentFontIndex]; // Change font

        // Move to the next font
        currentFontIndex = (currentFontIndex + 1) % fonts.length; // Loop back to the start

        // Call changeFont again after displayDuration
        setTimeout(changeFont, displayDuration);
    };

    // Start the font changing process
    changeFont();

    // Image setup
    const imgFolder = 'images/'; // Path to your images folder
    const imgNames = ['image1.png', 'image2.png', 'image3.png', 'image4.png']; // List of images
    let currentImageIndex = 0; // Track the current image

    // Function to show the next image
    const showNextImage = () => {
        const img = document.createElement('img');
        img.src = imgFolder + imgNames[currentImageIndex];
        img.className = 'background-image'; // Ensure you have defined CSS for this class

        // Append to the body
        document.body.appendChild(img);

        // Fade in the image
        setTimeout(() => {
            img.style.opacity = 1;
        }, 50); // Delay to allow for the image to be appended before fading in

        // Remove the image after some time
        setTimeout(() => {
            img.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(img);
                // Move to the next image
                currentImageIndex = (currentImageIndex + 1) % imgNames.length; // Loop back to the start
                showNextImage(); // Show the next image
            }, 1000); // Delay for fade out
        }, 5000); // Duration the image stays visible
    };

    // Start showing the first image
    showNextImage();

    // Function to auto-scroll down the page
    const autoScroll = () => {
        const scrollInterval = 50; // Time in milliseconds between scrolls
        const scrollStep = 1; // Number of pixels to scroll per interval

        // Set an interval to scroll down the page
        const intervalId = setInterval(() => {
            // Scroll down the page by a certain number of pixels
            window.scrollBy(0, scrollStep);

            // Check if the bottom of the page has been reached
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                clearInterval(intervalId); // Stop scrolling if at the bottom
            }
        }, scrollInterval);
    };

    // Start auto-scroll on page load
    autoScroll();
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const flyingCharacters = document.getElementById("floating-characters");

function createFlyingLetter() {
    const letterElement = document.createElement("div");
    const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    
    letterElement.textContent = randomLetter;
    letterElement.className = "flying-letter";
    
    // Randomize position and animation duration
    const randomX = Math.random() * window.innerWidth;
    const randomDuration = Math.random() * 5 + 3; // Random duration between 3 and 8 seconds
    
    letterElement.style.left = `${randomX}px`;
    letterElement.style.top = `${window.innerHeight}px`;
    letterElement.style.fontSize = `${Math.random() * 50 + 20}px`; // Random font size between 20 and 70px
    letterElement.style.transform = `translateY(-${window.innerHeight + 100}px)`; // Move upwards
    
    // Append to the flying characters container
    flyingCharacters.appendChild(letterElement);
    
    // Animate the letter
    letterElement.animate([
        { transform: 'translateY(0)' },
        { transform: `translateY(-${window.innerHeight + 100}px)` }
    ], {
        duration: randomDuration * 1000, // Convert to milliseconds
        easing: 'linear',
        fill: 'forwards'
    });
    
    // Remove letter after animation
    setTimeout(() => {
        letterElement.remove();
    }, randomDuration * 1000);
}

// Generate letters every 300 milliseconds
setInterval(createFlyingLetter, 300);
