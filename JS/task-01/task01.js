//Напишите фукцию deepEqual чтоб она проверяла что два обьекта идентичны

var example1 = {name: 'test'};
var example2 = {name: 'test'};

var example3 = {name: 'test'};
var example4 = {name: 'testl'};

var example5 = {name: 'test'};
var example6 = {name: 'test', age: 10};


function deepEqual(a, b){

    if(checkPrimitive(a) && checkPrimitive(b)) // случай с проверкой примитивов через доп. ф-ю
        return a==b;

    if(Object.keys(a).length !== Object.keys(b).length) // проверка на кол-во значений в объектах
        return false;

    // проверка для объектов с равным кол-вом значений
    for(let key in a){
        if(!(key in b)) return false;
        if(!deepEqual(a[key], b[key])) return false;
    }

    return true;
}

// Дополнительна ф-я для проверки если значение является примитивом

function checkPrimitive(obj){
    return(obj !== Object(obj));
}

console.dir(deepEqual(example1, example2)); //true
console.dir(deepEqual(example3, example4)); //false
console.dir(deepEqual(example5, example6)); //false



