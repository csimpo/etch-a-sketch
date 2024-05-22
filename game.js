const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add('grid-item'); // Adjunk hozzá egy osztályt a stílushoz
    container.appendChild(div);

    // Eseménykezelő hozzáadása itt
    div.addEventListener('mouseover', function() {
        turnBlack(div);
    });
}

function turnBlack(div) {
    div.style.backgroundColor = "black";
}
