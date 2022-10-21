/*
**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) 
un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a 
seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo 
screenshot fornito in consegna.
*/

/*multipli => pari o dispari / divisibili o non divisibili 
  % => modulo: divide un numero con un altro per vedere se ha resto
  se il resto è 0 (numero pari) se il resto è 1 (numero dispari)
*/

for (let i = 0; i <= 100; i++){
   if ( i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
   } else if ( i % 3 === 0){
    console.log('Fizz');
   } else if ( i % 5 === 0){
    console.log('Buzz');
   } else{
    console.log(i);
   }
}

