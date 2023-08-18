function getValue(Id) {
    const value = parseFloat(document.getElementById(Id).value);
    return value;
}
function printArea(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function addToEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry')
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML = `${count + 1}. ${areaType}-${area} cm<sup>2</sup>.`
    calculationEntry.appendChild(p);
}

function calculateTriangleArea() {
    const base = getValue('triangle-base');
    const height = getValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return
    }
    const area = (0.5 * base * height).toFixed(2) ;
    printArea('triangle-area', area);
    addToEntry('Tri-angle', area);
}
function calculateRectangleArea() {
    const width = getValue('rectangle-width');
    const length = getValue('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('Please insert number');
        return
    }
    const area = (width * length).toFixed(2) ;
    printArea('rectangle-area', area);
    addToEntry('Rectangle', area);
}
function calculateParallelogramArea(){
    const base = getValue('parallelogram-base');
    const height = getValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return
    }
    const area = (base * height).toFixed(2) ;
    printArea('parallelogram-area', area);
    addToEntry('Parallelogram', area);
}
function calculateEllipseArea(){
    const xAxis = getValue('ellipse-major-radius');
    const yAxis = getValue('ellipse-minor-radius');
    if(isNaN(xAxis) || isNaN(yAxis)){
        alert('Please insert number');
        return
    }
    const area = (3.14 * xAxis * yAxis).toFixed(2) ;
    printArea('ellipse-area', area);
    addToEntry('Ellipse', area);
}
function calculateRhombusArea(){
    const base = getValue('rhombus-base');
    const height = getValue('rhombus-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return
    }
    const area = (base * height).toFixed(2) ;
    printArea('rhombus-area', area);
    addToEntry('Rhombus', area);
}
function calculatePentagonArea(){
    const a = getValue('pentagon-apothem');
    console.log(a);
    const s = getValue('pentagon-side-length');
    if(isNaN(a) || isNaN(s)){
        alert('Please insert number');
        return
    }
    const area = (5/2 * a * s).toFixed(2) ;
    printArea('pentagon-area', area);
    addToEntry('Pentagon', area);
}
