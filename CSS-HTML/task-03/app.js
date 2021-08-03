
var counter = 0;

const cont_item = document.querySelector('.text-center');

setInterval(()=>{

    if(counter==0){
        cont_item.classList.remove('text-center');
        cont_item.classList.add('text-bottom-left');
        counter++;
    }
    else if(counter==1){
        cont_item.classList.remove('text-bottom-left');
        cont_item.classList.add('text-top-left');
        counter++;
    }
    else if(counter==2){
        cont_item.classList.remove('text-top-left');
        cont_item.classList.add('text-top-right');
        counter++;
    }
    else if(counter==3){
        cont_item.classList.remove("text-top-right");
        cont_item.classList.add('text-bottom-right');
        counter++;
    }
    else if(counter==4){
        cont_item.classList.remove('text-bottom-right');
        cont_item.classList.add("text-center");
        counter=0;
    }

}, 2000);