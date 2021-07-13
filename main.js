const color = "blue"

const gridNumber = Number(document.querySelector("#grid-size").value)

const createGridButton = document.querySelector(".make-grid-btn")
createGridButton.addEventListener("click", makeGrid(gridNumber))

const clearButton = document.querySelector(".clear-grid-btn")
clearButton.addEventListener("click", clearGrid())

function makeGrid(numberOfRows){
    const container = document.querySelector(".screen-tab")
    console.log(container.target)
    if(container.innerHTML != ''){
        container.innerHTML = ''
    }
    console.log(container)
    let size = 0
    for(let i=0; i<numberOfRows;i++){
        size++
        for(let j=0; j<numberOfRows; j++)
        {
            const div = document.createElement('div')
            div.setAttribute("class", "square-div")
            container.appendChild(div)
        }
    }
    container.style = "grid-template-columns: repeat(" + size + ", auto)"
    startPainting(color)
}

function startPainting(color = "red"){
    const divs = document.querySelectorAll(".screen-tab >  div")
    if(divs === null){
        return
    }
    divs.forEach((item) =>{
        item.addEventListener("mouseover", changeColor(item, color))
    }
    )}

function changeColor(element, color){
    element.style.backgroundColor = color
}

function clearGrid(){
    const divs = document.querySelectorAll(".screen-tab >  div")
    divs.forEach((item) =>{
        item.style.backgroundColor = "thistle";
    }
    )}

function getColor(){
    const colorPicker = document.querySelector("div.settings-tab > #color-picker")
    colorPicker.addEventListener("change", startPainting(colorPicker.value))
}

// function addFunctionality(){
    
//     const gridNumber = document.querySelector(".settings-tab #grid-size")

//     const createGridButton = document.querySelector(".settings-tab #make-grid-btn")
//     createGridButton.addEventListener("click", makeGrid(gridNumber))
    
//     const clearButton = document.querySelector(".settings #clear-grid-btn")
//     if(clearButton === null){
//         return
//     } 
//     clearButton.addEventListener("click", clearGrid())

    
// }

