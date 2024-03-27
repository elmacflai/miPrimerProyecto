const button = document.getElementById("button");

button.addEventListener("click", function() {
    const imagesContainer = document.createElement("div");

    for (let i = 1; <6; i++) {
        const image = document.createElement("img");
        image.src = image${i}.jpg;
        imagesContainer.appendChild(image);
}

document.body.appendChild(imagesContainer);
});
