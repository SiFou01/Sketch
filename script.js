let sketchBox = document.getElementById("sketch-box");

let boxes;

changeBoxes(16);

function changeBoxes(num) {
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
    switch (num) {
        case 8 :
            for (let i = 0; i < 64; i++) {
                let box = document.createElement("div");
                box.classList.add("boxes");
                box.classList.add("boxes8");
                sketchBox.appendChild(box);
            }
            break;
        case 16 :
            for (let i = 0; i < 256; i++) {
                let box = document.createElement("div");
                box.classList.add("boxes");
                box.classList.add("boxes16");
                sketchBox.appendChild(box);
            }
            break;
        case 32 :
            for (let i = 0; i < 1024; i++) {
                let box = document.createElement("div");
                box.classList.add("boxes");
                box.classList.add("boxes32");
                sketchBox.appendChild(box);
            }
    }
    boxes = document.querySelectorAll("div.boxes");
}

let click = 0;

function changeGridLines() {
    if (click === 0) {
        if (boxes.length === 1024) {
            for (let box of boxes) {
                box.classList.add("no-grid-32");
            }
        }
        else if (boxes.length === 256) {
            for (let box of boxes) {
                box.classList.add("no-grid-16");
            }
        }
        else {
            for (let box of boxes) {
                box.classList.add("no-grid-8");
            }
        }
        click++;
    }
    else {
        for (let box of boxes) {
            box.classList.remove("no-grid-32");
            box.classList.remove("no-grid-16");
            box.classList.remove("no-grid-8");
        }
        click--;
    }
}

sketchBox.addEventListener("mouseover", changeColor);

function changeColor(box) {
    box.target.style.backgroundColor = selectedColor;
}

let selectedColor = "black";

function getSelectedColor() {
selectedColor = document.querySelector("input").value;
}