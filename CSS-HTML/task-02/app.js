var red = 'red';
var orange = 'orange';
var green = 'green';

const mySquare = document.getElementById('square');

var counter = 0;

setInterval(()=>{

    if(counter==0){
        mySquare.style.background = orange;
        counter++;
    }
    else if(counter==1){
        mySquare.style.background = green;
        counter++;
    }
    else if(counter==2){
        mySquare.style.background = red;
        counter=0;
    }
    
}, 2000);