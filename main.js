// Global Variables
let pixels = 18;
let round = false;

// Linking the DOM
const container = document.querySelector('.container')
let add = document.getElementById('add')

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
}


start()


