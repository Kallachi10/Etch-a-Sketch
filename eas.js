const sketchPad = document.querySelector(".sketchPad");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".sliderValue");

function handleSlide(event){
    sliderValue.textContent = (event.target.value*16+16);
    setSketchPad();
}

function changeColor(node){
    node.target.style.backgroundColor="black";
    node.target.removeEventListener("mouseenter",changeColor);
    node.target.removeEventListener("mousedown",changeColor);
}

slider.addEventListener("input",handleSlide);

function setSketchPad(){
    sketchPad.innerHTML="";
     limit = parseInt(sliderValue.textContent);
    for(let i=0;i<limit;i++){

        const row = document.createElement("div");
        row.classList.add("rows");
        
        sketchPad.appendChild(row);
        for(let j=0;j<limit;j++){
            const cell = document.createElement("div");
            cell.classList.add("cells");
            cell.addEventListener("mouseenter",changeColor);
            cell.addEventListener("mousedown",changeColor);
            row.appendChild(cell);
            
        }
        
    }
}
sliderValue.textContent=16;
setSketchPad();