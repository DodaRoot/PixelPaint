// Global Variables
let pixels = 7;
let round = false;
let color = 'black'
let input = document.querySelector('input')
let mouse = false;
document.body.onmousedown = () => (mouse = true)
document.body.onmouseup = () => (mouse = false)

// Linking the DOM
const container = document.querySelector('.container')

// Loop to add pixels and call beginning functions
function start () {   
    for (let p = 0; p < pixels; p++) {
        makeRow()
    } 
}


// Beginning logic functions to add div's
function makeRow () {
    const madeRow = document.createElement('div')
    madeRow.classList.add('madeRow')
    container.appendChild(madeRow)
    for (let i = 0; i < pixels; i++) {
        makeCel(madeRow)
    }
}
function makeCel (madeRow) {
    const madeCel = document.createElement('div')
    madeCel.classList.add('madeCell')
    madeRow.appendChild(madeCel)
    // Changing cel colors with mouse
    madeCel.addEventListener('mouseover', pointer)
    madeCel.addEventListener('mousedown', pointer)
}

function add () {
    container.innerHTML = ''
    pixels += 2
    start()
}

function subtract () {
    container.innerHTML = ''
    pixels -= 2
    start()
}

function clearAll () {
    randomColor = false;
    container.innerHTML = ''
    start()
}

function erase () {
    randomColor = false;
    color = 'white'
}

start()

input.addEventListener('input', () => {
    randomColor = false;
    color = input.value
})

let randomColor = false;
let colorRandom = '';

function random () {
    randomColor = true;
}

// Had to look this one up its a function to draw when clicking
// and holding the mouse over the div's
function pointer (e) {
    if (e.type === 'mouseover' && !mouse) return
    else if (randomColor === true) {
        let randomNum = Math.floor(Math.random() * 10)
        colors(randomNum)
        e.target.style.backgroundColor = colorRandom;
    }
    else {
        e.target.style.backgroundColor = color;
    }
}

function colors (randomNum) {
    switch(randomNum) {
        case 0
        :colorRandom = 'aqua'
        break
        case 1
        :colorRandom = 'red'
        break
        case 2
        :colorRandom = 'green'
        break
        case 3
        :colorRandom = 'black'
        break
        case 4
        :colorRandom = 'blue'
        break
        case 5
        :colorRandom = 'yellow'
        break
        case 6
        :colorRandom = 'violet'
        break
        case 7
        :colorRandom = 'pink'
        break
        case 8
        :colorRandom = 'grey'
        break
        case 9
        :colorRandom = 'gold'
        break
    }
}