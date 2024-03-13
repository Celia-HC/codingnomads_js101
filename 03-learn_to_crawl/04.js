/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let var1 = 4569;
let var2 = 7893;
let var3 = 6853;
let luckyNumber = 7;

let result1 = var1 + var2 + var3
console.log("1.", result1)

let result2 = var2 - var1 - var3
console.log("2.", result2)

let result3 = var1 * var2 * var3
console.log("3.", result3)

let result4 = var2 / (var3 - var1);

console.log("4.", result4)

let result5 = var2 % luckyNumber;
console.log("5.", result5)
