/**
 * You may want to modify the html file to mute the output of certain exercises,
 * this one for instance, will generate many lines of output. You can comment
 * out lines in HTML with <!-- comment --> tags.
 *
 * 1. Create a for loop that will log all the numbers between 5 and 1000.
 *    incrementing in 5s. So the output would start "5, 10, 15, 20 ..."
 * 2. Create a for loop that outputs every number between 100 and -100 included.
 * 3. Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
 *    9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
 *    times, what is the number you get at the end?
 *
 * This last one can be tricky! There are a couple ways to do it, see if you can
 * find both ways!
 *
 */

/*Premier exercie, avec boucle for et boucle while*/
for (x = 5 ; x<=100 ; x+= 5) {
    console.log(x);
}

let xa = 0;

while (xa<=100) {
    xa += 5;
    console.log(xa);
}

/*Second exerice*/

for (y = 10 ; y >= -10 ; y--) {
    console.log(y);
}

let ya = 11 ;
while (ya > -10) {
    ya--;
    console.log(ya);
}

/*Observation : les boucles while et for ne donnent pas exactement le même résultat
si on donne les même conditions de départ.
Variation de +1/-1
Plus de vigilance pour la boucle while : 
Exercice 1 : j'ai fait commencer xa à 0, et non 5
Exercice 2 : il faut que ya soit strictement supérieur à 10, et non supérieur ou égal comme avec for.
=> Voir si c'est un point de vigilance à chaque fois ou si c'est moi qui comprend mal quelque chose
*/

let x = 0
let i = 0

while ( i < 100 ) {
    if ((i % 2) == 0) {
        x = 3;
    } else {
        x = -1;
    }
    i = i + x;
    console.log(i)
}
