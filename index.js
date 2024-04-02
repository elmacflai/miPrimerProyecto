const button = document.querySelector(".button");
let currentImageIndex = 1;
let previousImageElement = null;

button.addEventListener("click", function() {
    // Remove previous image if exists
    if (previousImageElement) {
        previousImageElement.remove();
    }

    // Create new image element
    const image = document.createElement("img");
    image.src = `image${currentImageIndex}.png`;
    document.body.appendChild(image);

    // Store reference to the current image element
    previousImageElement = image;

    // Increment current image index
    currentImageIndex++;

    // Reset index to 1 if it exceeds 6
    if (currentImageIndex > 6) {
        currentImageIndex = 1;
    }
});

