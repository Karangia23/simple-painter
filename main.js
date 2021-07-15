const colorPicker = document.querySelector(".color-picker")
colorPicker.addEventListener("change", ()=>{changeBaseColor(colorPicker.value)})

let color = colorPicker.value

function makeGrid(numberOfRows){
    const container = document.querySelector(".screen-tab")
    if(container.innerHTML != ''){
        container.innerHTML = ''
    }
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
    const divs = document.querySelectorAll(".square-div")
    if(divs === null){
        return
    }
    divs.forEach((item) =>{
        item.addEventListener("mouseover", ()=>{changeColor(item, color)})
    }
    )}

function changeColor(element, color){
    element.style.backgroundColor = color
}

function changeBaseColor(newColor){
    color = newColor
    startPainting(color)
}

function clearGrid(){
    const divs = document.querySelectorAll(".square-div")
    if(divs == null){
        return
    }
    divs.forEach((item) =>{
        item.style.backgroundColor = "thistle";
    }
    )}

function getColor(){
    const colorPicker = document.querySelector("#color-picker")
    colorPicker.addEventListener("change", ()=>{startPainting(colorPicker.value)})
}


let gridNumber = Number(document.querySelector("#grid-size").value)

const sizeValueInput = document.querySelector("#grid-size")
sizeValueInput.addEventListener("change", function(){
    gridNumber = Number(sizeValueInput.value)
})

const createGridButton = document.querySelector(".make-grid-btn")
createGridButton.addEventListener('click', ()=>{makeGrid(gridNumber)})

const clearButton = document.querySelector(".clear-grid-btn")
clearButton.addEventListener("click", clearGrid)


makeGrid(15)

// () => {game("Rock")}