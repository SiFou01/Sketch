let sketchBox = document.getElementById("sketch-box");

for (let i = 0; i < 256; i++) {
    let boxes = document.createElement("div");
    boxes.classList.add("boxes16");
    sketchBox.appendChild(boxes);
}