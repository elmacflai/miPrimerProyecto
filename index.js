const button = document.querySelector(".button");
let currentImageIndex = 1;

button.addEventListener("click", function() {
    const imagesContainer = document.createElement("div");
    const image = document.createElement("img");

    image.src = `image${currentImageIndex}.png`;
    imagesContainer.appendChild(image);
    document.body.appendChild(imagesContainer);

    currentImageIndex++;

    if (currentImageIndex > 6) {
        currentImageIndex = 1; 
    }
});

