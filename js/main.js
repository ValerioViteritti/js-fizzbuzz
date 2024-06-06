// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// Creo dei div
let square = document.createElement('div');
square.className = ('d-flex flex-wrap justify-content-center align-items-center gap-4')

let varianti = '';

// Ciclo
for (let i = 1; i <= 100; i++){
    
    // creiamo dei box con i numeri progressivi all'interno
    const element = `<div class="box">${i}</div>`;

        if(i % 3 === 0 && i % 5 === 0){

            varianti += `<div class="xxx fizzbuzz">${'FIZZBUZZ'}</div>`;
            console.log("FIZZBUZZ");
  
        } else if(i % 3 === 0){
            varianti += `<div class="xxx fizz">${'FIZZ'}</div>`;
            console.log("FIZZ");

        } else if(i % 5 === 0){
            varianti += `<div class="xxx buzz">${'BUZZ'}</div>`;
            console.log("BUZZ");

        } else{
            varianti += `<div class="xxx">${i + 0}</div>`;
            console.log(i);
        }   
}

square.innerHTML = varianti;
// Collegamento all'html
const container = document.querySelector('.container')
container.append(square)