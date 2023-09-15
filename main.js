// Global Variables
let pixels = 7;
let round = false;
let color = 'black'
let input = document.querySelector('input')

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
    madeCel.addEventListener('mousedown', () => {
        madeCel.style.backgroundColor = color
    })
    madeRow.appendChild(madeCel)
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

