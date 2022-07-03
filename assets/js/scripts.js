var incrementButton = document.getElementById("adicionar");
var decrementButton = document.getElementById("subtrair");
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

incrementButton.addEventListener("click",function(){
    if(currentNumber < 10){
        currentNumber = currentNumber + 1
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'black'
    }
});

decrementButton.addEventListener("click",function(){
    if(currentNumber > -10){
        currentNumber = currentNumber - 1
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
});