/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

/**Kelvin to Celsius: C = K - 273 (C = K - 273.15 if you want to be more precise)
 * Celsius to Kelvin: K = C + 273 (or K = C + 271.15 to be more precise)
Fahrenheit to Kelvin: K = 5/9(F - 32) + 273.15 
Kelvin to Fahrenheit: F = 9/5(K - 273) + 32 or F = 1.8(K - 273) + 32

KtoC, CtoK, FtoK and a KtoF function.*/

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

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(32));
console.log(KtoF(100));

//Pythagore : a² + b² = c²

function pythagoras(shortSide1, shortSide2) {
    let longestSide = ((shortSide1 ** 2) + (shortSide2 ** 2)) ** (1/2);
    return longestSide;
}


console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

// Do not modify anything below this line


console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));