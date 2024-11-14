/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/


//Stampo tutti i numeri da 1 a 100
for(let i= 1 ; i <=100 ; i++){ //console.log(i)
  
  //Stampo la parola FizzBuzz per i multipli di 3 e anche di 5
  if(!(i % 3) && !(i %5)) {console.log('FizzBuzz')}
  
  //Stampo la parola Fizz per i multipli di 3
  else if(!(i % 3)) {console.log('Fizz')}

  //Stampo la parola Buzz per i multipli di 5
  else if(!(i % 5)) {console.log('Buzz')}

  //Stampo il restante dei numeri
  else{ console.log(i)}
}

