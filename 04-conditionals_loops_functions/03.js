/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

let i = getRandomNumber();

while ( i % 11 !== 0 ) {
    i = getRandomNumber();
    console.log(i)
}


/** Exercice trouvé sur le web : 
 * Utilisez la boucle for pour afficher les nombres pairs de 2 à 10. */

for ( i = 1 ; i<11 ; i++) {
    if (i%2 == 0) {
        console.log(i)
    }
}

/**Ecrivez une boucle qui demande un nombre supérieur à 100.
Si le visiteur saisit un autre numéro, demandez-lui de le saisir à nouveau.

La boucle doit demander un numéro jusqu’à ce que le visiteur saisisse un nombre supérieur 
à 100 ou annule l’entrée/entre une ligne vide.

Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres. 
Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.*//