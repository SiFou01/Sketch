let sketchBox = document.getElementById("sketch-box");

let boxes;

let btn8 = document.getElementById("btn8");
let btn16 = document.getElementById("btn16");
let btn32 = document.getElementById("btn32");

changeBoxes(16);

function changeBoxes(num) {
    btn8.classList.remove("selected");
    btn16.classList.remove("selected");
    btn32.classList.remove("selected");
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
                btn8.classList.add("selected");
            }
            break;
        case 16 :
            for (let i = 0; i < 256; i++) {
                let box = document.createElement("div");
                box.classList.add("boxes");
                box.classList.add("boxes16");
                sketchBox.appendChild(box);
                btn16.classList.add("selected");
            }
            break;
        case 32 :
            for (let i = 0; i < 1024; i++) {
                let box = document.createElement("div");
                box.classList.add("boxes");
                box.classList.add("boxes32");
                sketchBox.appendChild(box);
                btn32.classList.add("selected");
            }
    }
    boxes = document.querySelectorAll("div.boxes");
}

sketchBox.addEventListener("mouseover", changeColor);

let rainbowColors = ["red","yellow","pink","purple","orange","blue",
"green","brown","black","white","cadetblue","chocolate","coral","gold","aliceblue","honeydew","hotpink"];

let activate = 0;

function activateRainbowMode() {
    selectedColor = rainbowColors[Math.floor(Math.random() * 17)];
    activate++;
}

function changeColor(box) {
    if (activate) {
        activateRainbowMode();
    }
    box.target.style.backgroundColor = selectedColor;
}

let selectedColor = "black";

function getSelectedColor() {
    selectedColor = document.querySelector("input").value;
}

function reset() {
    for (let box of boxes) {
    box.style.backgroundColor = "#CDC7E5";
    }
}

let eraser = 0;
let eraserBtn = document.getElementById("eraser");

function erase() {
    if (eraser === 0) {
        selectedColor = "#CDC7E5";
        eraserBtn.classList.add("selected");
        eraser++;
    }
    else {
        selectedColor = document.querySelector("input").value;
        eraser--;
        eraserBtn.classList.remove("selected");
    }
}

let select = document.querySelector("select");

select.addEventListener("change", changeEventListener);

function changeEventListener() {
    switch (select.value) {
        case "HOVER" :
            sketchBox.removeEventListener("click", changeColor);
            sketchBox.addEventListener("mouseover", changeColor);
            break;
        case "CLICK" :
            sketchBox.removeEventListener("mouseover", changeColor);
            sketchBox.addEventListener("click", changeColor);
    }
}