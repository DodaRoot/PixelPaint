// Global Variables
let pixels = 16;

// Linking the DOM
let container = document.querySelector('.container')
let madeRow = document.createElement('div')
let madeCel = document.createElement('div')
madeRow.classList.add('madeRow')
madeCel.classList.add('madeCell')

function makeRow (madeRow) {
    container.appendChild(madeRow)
}

function makeCel (madeRow) {
    madeRow.appendChild(madeCel)
}

makeRow(madeRow)
makeCel(madeRow)



