import './style.css'


document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="main-heading">
      <h1>Metric/Imperial Unit Conversion</h1>
      <input id="input-el" class="number-input" type="number" min=0>
      <button id="convert-btn" class="convert-btn">Convert</button>
    </div>
    <div class="convert-sections">
      <section class="convert-info">
        <h2 class="card-title">Length (Meter/Feet)</h2>
        <div id="length-results"></div>
      </section>
      <section class="convert-info">
        <h2 class="card-title">Volume (Litres/Gallons)</h2>
        <div id="volume-results"></div>
      </section>
      <section class="convert-info">
        <h2 class="card-title">Mass (Kilograms/Pounds)</h2>
        <div id="mass-results"></div>
      </section>
    </div>
  </div>
`

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthResultsEl = document.getElementById("length-results")
const volumeResultsEl = document.getElementById("volume-results")
const massResultsEl = document.getElementById("mass-results")

console.log(lengthResultsEl)
console.log(volumeResultsEl)
console.log(massResultsEl)

const convertValueLength = 3.281
const convertValueVolume = 3.785
const convertValuseMass = 2.205

// when btn is clicked, perfrom conversion and then display the conversion
convertBtn.addEventListener("click", function() {
  const unitArray = ["meters", "feet", "litres", "gallons", "kilos", "pounds"]

  let inputValue = inputEl.value

  clearFields()

  const meterToFeet = convertMeterToFeet(inputValue)
  const feetToMeter = convertFootToMeter(inputValue)
  const litreToGallon = convertLitreToGallon(inputValue)
  const gallonToLitre = convertGallonToLitre(inputValue)
  const kgToPound = convertKgToPounds(inputValue)
  const poundToKg = convertPoundsToKg(inputValue)

  for (let i = 0; i < unitArray.length; i+=2) {
    if (unitArray[i] === "meters" && unitArray[i + 1] === "feet") {
      const unitStr1 = unitArray[i]
      const unitStr2 = unitArray[i + 1]
      renderInfo(unitStr1, unitStr2, inputValue, meterToFeet, feetToMeter, lengthResultsEl)
    } else if (unitArray[i] === "litre" && unitArray[i + 1] === "gallon") {
      const unitStr1 = unitArray[i]
      const unitStr2 = unitArray[i + 1]
      renderInfo(unitStr1, unitStr2, inputValue, litreToGallon, gallonToLitre, volumeResultsEl)
    } else if (unitArray[i] === "kilos" && unitArray[i + 1] === "pounds") {
      const unitStr1 = unitArray[i]
      const unitStr2 = unitArray[i + 1]
      renderInfo(unitStr1, unitStr2, inputValue, kgToPound , poundToKg, massResultsEl)
    }
  }

})


function renderInfo(str1, str2, inputValue, value1, value2, resultElement) {
  let string = `<p>${inputValue} ${str1} =  ${value1} ${str2} | ${inputValue} ${str2} = ${value2} ${str1}</p>`
  resultElement.innerHTML += string  
}


// UNIT CONVERSION FUNCTIONS 

function convertMeterToFeet(value) {
  return (value * convertValueLength).toFixed(3)
}

function convertFootToMeter(value) {
  const feet = 3.281
  return (value / convertValueLength).toFixed(3)
}

function convertLitreToGallon(value) {
  return (value / convertValueVolume).toFixed(3)
}

function convertGallonToLitre(value) {
  return (value * convertValueVolume).toFixed(3)
}


function convertKgToPounds(value) {
  return (value * convertValuseMass).toFixed(3)
}

function convertPoundsToKg(value) {
  return (value / convertValuseMass).toFixed(3)
}

function clearFields() {
  lengthResultsEl.innerHTML = "";
  volumeResultsEl.innerHTML = "";
  massResultsEl.innerHTML = "";
}