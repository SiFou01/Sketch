let sketchBox = document.getElementById("sketch-box");

for (let i = 0; i < 256; i++) {
    let boxes = document.createElement("div");
    boxes.classList.add("boxes");
    boxes.classList.add("boxes16");
    sketchBox.appendChild(boxes);
}

let boxes = document.querySelectorAll("div.boxes");

let boxes8 = document.getElementById("btn8");
let boxes16 = document.getElementById("btn16");
let boxes32 = document.getElementById("btn32");

function changeBoxes(num) {
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
    switch (num) {
        case 8 :
            for (let i = 0; i < 64; i++) {
                let boxes = document.createElement("div");
                boxes.classList.add("boxes");
                boxes.classList.add("boxes8");
                sketchBox.appendChild(boxes);
            }
            break;
        case 16 :
            for (let i = 0; i < 256; i++) {
                let boxes = document.createElement("div");
                boxes.classList.add("boxes");
                boxes.classList.add("boxes16");
                sketchBox.appendChild(boxes);
            }
            break;
        case 32 :
            for (let i = 0; i < 1024; i++) {
                let boxes = document.createElement("div");
                boxes.classList.add("boxes");
                boxes.classList.add("boxes32");
                sketchBox.appendChild(boxes);
            }
    }
}