/*Script for Distances*/
const inputValueDist = document.querySelector('.js-input-value-dist');
const outputValueDist = document.querySelector('.js-output-value-dist');
const inputSelectDist = document.querySelector('.js-input-select-dist');
const outputSelectDist = document.querySelector('.js-output-select-dist');

inputValueDist.addEventListener('input', calculateDistance);
inputSelectDist.addEventListener('change', calculateDistance);
outputSelectDist.addEventListener('change', calculateDistance);

function calculateDistance() {
    let distToConvert = parseFloat(inputValueDist.value);

    switch (inputSelectDist.value) {

        case 'inputCm':
            if (outputSelectDist.value === "celsius") {
                outputValueDist.value=`${distToConvert}`;
            } else if (outputSelectDist.value === "farenheit") {
                outputValueDist.value=`${cToF(distToConvert).toFixed(1)}`;
            } else if (outputSelectDist.value === "kelvin") {
                outputValueDist.value=`${cToK(distToConvert)}`;
            }
        break;

        case 'inputKm':
            console.log("valeur en mètres");
        break;

        case 'inputInch':


        break;

        case 'inputMiles':


        break;

        default:
            console.log("Unité inconnue");

    }
}

function cmToInch(lenghtInCm) {
    let lenghtInInch = lenghtInCm / 2.54;
    return lenghtInInch;
   }

function cmToKm (lenghtInCm) {
    let lenghtInKm = lenghtInCm / 1000;
    return lenghtInKm;
}

function cmToMiles (lenghtInCm) {
    let lenghtInMiles = lenghtInCm * 160934.4;
    return lenghtInMiles;
}

function kmToCm (lenghtInKm) {
    let lenghtInCm = lenghtInKm * 1000;
    return lenghtInCm;
}

function kmToMiles (lenghtInKm) {
    let lenghtInMiles = lenghtInKm / 1.609344;
    return lenghtInMiles;
}

function kmToInch (lenghtInKm) {
    let lenghtInInch = lenghtInKm / 0.0000254;
    return lenghtInInch;
}

function milesToKm (distInM) {
    let distInKm = distInM * 1.609344;
    return(distInKm);
}

function milesToCm (distInM) {
    let distInCm = distInM * 160934.4;
    return(distInCm);
}

function milesToKm (distInM) {
    let distInKm = distInM * 1.609344;
    return(distInKm);
}

/*Script for Temperatures*/
   const inputValueTemp = document.querySelector('.js-input-value-temp');
   const outputValueTemp = document.querySelector('.js-output-value-temp');
   const inputSelectTemp = document.querySelector('.js-input-select-temp');
   const outputSelectTemp = document.querySelector('.js-output-select-temp');
   
   inputValueTemp.addEventListener('input', calculateTemperature);
   inputSelectTemp.addEventListener('change', calculateTemperature);
   outputSelectTemp.addEventListener('change', calculateTemperature);

    function calculateTemperature() {
       let tempToConvert = parseFloat(inputValueTemp.value);

       switch (inputSelectTemp.value) {
   
           case 'celsius':
            if (outputSelectTemp.value === "celsius") {
                outputValueTemp.value=`${tempToConvert}`;
            } else if (outputSelectTemp.value === "farenheit") {
                outputValueTemp.value=`${cToF(tempToConvert).toFixed(1)}`;
            } else if (outputSelectTemp.value === "kelvin") {
                outputValueTemp.value=`${cToK(tempToConvert)}`;
            }
           break;
   
           case 'farenheit':
            if (outputSelectTemp.value === "celsius") {
                outputValueTemp.value=`${fToC(tempToConvert).toFixed(1)}`;
            } else if (outputSelectTemp.value === "farenheit") {
                outputValueTemp.value=`${tempToConvert}`;
            } else if (outputSelectTemp.value === "kelvin") {
                outputValueTemp.value=`${fToK(tempToConvert).toFixed(1)}`;
            }
           break;
   
           case 'kelvin':
            if (outputSelectTemp.value === "celsius") {
                outputValueTemp.value=`${kToC(tempToConvert).toFixed(1)}`;
            } else if (outputSelectTemp.value === "farenheit") {
                outputValueTemp.value=`${kToF(tempToConvert).toFixed(1)}`;
            } else if (outputSelectTemp.value === "kelvin") {
                outputValueTemp.value=`${tempToConvert}`;
            }
              break;
      
           default:
               console.log("Unité inconnue");
       }
   }
   
function cToF (tempInC) {
    tempInF = (tempInC * 1.8) + 32;
    return(tempInF);
}

function cToK (tempInC) {
    let tempInK = tempInC + 273;
    return(tempInK);
}

function fToC (tempInF) {
    tempInC = (tempInF - 32) * (5/9);
    return(tempInC);
}

function fToK (tempInF) {
    let tempInK = (5/9)*(tempInF - 32) + 273.15;
    return(tempInK);
}

function kToC (tempInK) {
    let tempInC = tempInK - 273;
    return(tempInC);
}

function kToF (tempInK) {
    let tempInF = 1.8*(tempInK - 273.15) + 32;
    return(tempInF);
}

/*Animations*/
const btnDist = document.querySelector('.js-btn-dist');
const btnTemp = document.querySelector('.js-btn-temp');
const boxDist = document.querySelector('.js-box-distance');
const boxTemp = document.querySelector('.js-box-temperature');

btnDist.addEventListener("click", showBoxDistance);
btnTemp.addEventListener("click", showBoxTemperature);

function showBoxTemperature() {
    boxDist.style.display="none";
    boxTemp.style.display="block";
}

function showBoxDistance() {
    boxDist.style.display="block";
    boxTemp.style.display="none";
}