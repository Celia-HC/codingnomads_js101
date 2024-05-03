function KtoC (tempInK) {
    let tempInC = tempInK - 273;
    return(tempInC);
}

function CtoK (tempInC) {
    let tempInK = tempInC + 273;
    return(tempInK);
}

function FtoK (tempInF) {
    let tempInK = (5/9)*(tempInF - 32) + 273.15;
    return(tempInK);
}

function KtoF (tempInK) {
    let tempInF = 1.8*(tempInK - 273.15) + 32;
    return(tempInF);
}

function MToKm (distInM) {
    let distInKm = distInM * 1.609344;
    return(console.log(`${distInM} miles is equivalent to ${distInKm} km`));
}