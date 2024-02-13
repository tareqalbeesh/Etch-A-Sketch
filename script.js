const grid = document.querySelector(".grid")
const colorSelector = document.querySelector(".color-selector")
const colorModeButton = document.querySelector('#color-mode')
const rainbowModeButton = document.querySelector('#rainbow-mode')
const eraserModeButton = document.querySelector('#eraser-mode')
const updateDimentionsButton = document.querySelector('#update-dimentions-btn')
const dimentionsInput = document.querySelector("#dimentions-input")


// let opacity =0
let mouseDown = false
let drawingColor = "black"
let mode = 'color-mode'

document.onmousedown = () => {
    mouseDown = true;
};
document.onmouseup = () => {
    mouseDown = false;
};

colorModeButton.style = `background-color: rgb(78, 199, 78);
color: white;
font-weight: 600;`
colorModeButton.addEventListener('click', () => {
    mode = 'color-mode'
    colorModeButton.style = `background-color: rgb(78, 199, 78);
    color: white;
    font-weight: 600;`
    rainbowModeButton.style = ''
    eraserModeButton.style = ''
})

rainbowModeButton.addEventListener('click', () => {
    mode = 'rainbow-mode'
    rainbowModeButton.style = `background-color: rgb(78, 199, 78);
    color: white;
    font-weight: 600;`
    colorModeButton.style = ''
    eraserModeButton.style = ''
})
eraserModeButton.addEventListener('click', () => {
    mode = 'eraser-mode'
    eraserModeButton.style = `background-color: rgb(78, 199, 78);
    color: white;
    font-weight: 600;`
    colorModeButton.style = ''
    rainbowModeButton.style = ''

})

colorSelector.addEventListener('change', function (value) {
    drawingColor = colorSelector.value;
});




function generateCells(size) {

    grid.style = ` display: grid;
    grid-template-columns: repeat(${size}, 1fr);
    grid-template-rows: repeat(${size}, 1fr);
    
    height: 70vh;
    width: 70vh;
    border: 3px solid Black;`;
    //removing old children 
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div")
        cell.style.backgroundColor = 'white'
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "white";
            if (mouseDown)
                cell.style.backgroundColor = getColor();
        })
        grid.appendChild(cell)
    }
}
function getColor() {
    switch (mode) {
        case 'color-mode':
            return drawingColor;
        case 'rainbow-mode':
            return getRandomColor();
        default:
            return 'white';
    }

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateCells(20)

function updateDimentions() {
    generateCells(dimentionsInput.value);
}