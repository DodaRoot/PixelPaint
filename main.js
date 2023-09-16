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
    container.innerHTML = ''
    start()
}

function erase () {
    color = 'white'
}

start()

input.addEventListener('input', () => {
    color = input.value
})


// Had to look this one up its a function to draw when clicking
// and holding the mouse over the div's
function pointer (e) {
    if (e.type === 'mouseover' && !mouse) return
    else {
        e.target.style.backgroundColor = color;
    }
}