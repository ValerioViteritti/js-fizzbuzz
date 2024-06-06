const container = document.querySelector(".container")

for (let i = 1; i <= 100; i++){
    // const element = `<div class="box box--${i}">${i}</div>`;
    // div.innerHTML += element;

    // creiamo dei box con i numeri progressivi all'interno
    const element = `<div class="box">${i}</div>`;
    container.innerHTML += element;

    
    console.log(i);
    
}