function getValue(Id) {
  const valueString = document.getElementById(Id).value;
  const value = parseFloat(valueString);
    return value;
}
function printArea(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function addToEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-2");
  p.innerHTML = `${count + 1}. ${areaType}-${area} cm<sup>2</sup>.`;
  calculationEntry.appendChild(p);
}
function minusValidation(Id1, Id2){
    alert("Please insert number");
    document.getElementById(Id1).value = 0;
    document.getElementById(Id2).value = 0;
    
}
function calculateTriangleArea() {
  let base = getValue("triangle-base");
  const height = getValue("triangle-height");

  if (isNaN(base) || isNaN(height)) {
    alert("Please insert number");
    return;
  }
  else if (base < 0 || height < 0) {
    minusValidation('triangle-base', 'triangle-height')
    return ;
  }
  const area = (0.5 * base * height).toFixed(2);

  printArea("triangle-area", area);
  addToEntry("Tri-angle", area);
}

function calculateRectangleArea() {
  const width = getValue("rectangle-width");
  const length = getValue("rectangle-length");
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert number");
    return;
  }
  else if (width < 0 || length < 0) {
    minusValidation('rectangle-width', 'rectangle-length')
    return ;
  }
  const area = (width * length).toFixed(2);
  printArea("rectangle-area", area);
  addToEntry("Rectangle", area);
}
function calculateParallelogramArea() {
  const base = getValue("parallelogram-base");
  const height = getValue("parallelogram-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert number");
    return;
  }
  else if (base < 0 || height < 0) {
    minusValidation('parallelogram-base', 'parallelogram-height')
    return ;
  }
  const area = (base * height).toFixed(2);
  printArea("parallelogram-area", area);
  addToEntry("Parallelogram", area);
}

function calculateEllipseArea() {
  const xAxis = getValue("ellipse-major-radius");
  const yAxis = getValue("ellipse-minor-radius");
  if (isNaN(xAxis) || isNaN(yAxis)) {
    alert("Please insert number");
    return;
  }
  else if (xAxis < 0 || yAxis < 0) {
    minusValidation('ellipse-major-radius', 'ellipse-minor-radius')
    return ;
  }
  const area = (3.14 * xAxis * yAxis).toFixed(2);
  printArea("ellipse-area", area);
  addToEntry("Ellipse", area);
}
function calculateRhombusArea() {
  const base = getValue("rhombus-base");
  const height = getValue("rhombus-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert number");
    return;
  }
  else if (base < 0 || height < 0) {
    minusValidation('rhombus-base', 'rhombus-height')
    return ;
  }
  const area = (base * height).toFixed(2);
  printArea("rhombus-area", area);
  addToEntry("Rhombus", area);
}
function calculatePentagonArea() {
  const a = getValue("pentagon-apothem");
  const s = getValue("pentagon-side-length");
  if (isNaN(a) || isNaN(s)) {
    alert("Please insert number");
    return;
  }
  else if (a < 0 || b < 0) {
    minusValidation('pentagon-apothem', 'pentagon-side-length')
    return ;
  }
  const area = ((5 / 2) * a * s).toFixed(2);
  printArea("pentagon-area", area);
  addToEntry("Pentagon", area);
}
