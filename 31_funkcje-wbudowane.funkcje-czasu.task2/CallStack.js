
let counter = 1;

function counting(){
    console.log(counter);
    counter++;
}

let interval = setInterval( counting, 10);

if(counter==100){
    clearInterval(counter);
}