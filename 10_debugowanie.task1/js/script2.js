function getRandomNumber(min, max){
   return Math.round((Math.random() * (max-min)) + min );
}

//metoda setTimeout pozwala na opóźnienie uruchomienia skryptu - dokładniej omówimy tą metodę później
setTimeout(function(){
  let random = getRandomNumber(1,5);
  while ( random != 5 ){
    console.log("Hello");
  }
},5000);
