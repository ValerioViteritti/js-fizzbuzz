// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// Collegamento all'html


// Creo dei div
let square = document.createElement('div');
square.className = ('d-flex flex-wrap justify-content-center align-items-center gap-2')


let varianti = '';


for (let i = 1; i <= 100; i++){
    

    // creiamo dei box con i numeri progressivi all'interno
    const element = `<div class="box">${i}</div>`;
    // container.innerHTML += element;

        if(i % 3 === 0 && i % 5 === 0){

            varianti += `<div class="xxx fizzbuzz">${'FIZZBUZZ'}</div>`;

            



        } else if(i % 3 === 0){
            varianti += `<div class="xxx fizz">${'FIZZ'}</div>`;




        } else if(i % 5 === 0){
            varianti += `<div class="xxx buzz">${'BUZZ'}</div>`;


        } else{
            varianti += `<div class="xxx">${i + 0}</div>`;
        }

    
    console.log(i);
    
    console.log();
    
}


square.innerHTML = varianti;

const container = document.querySelector('.container')
container.append(square)