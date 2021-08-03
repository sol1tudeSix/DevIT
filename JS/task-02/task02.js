// Напишите фукцию chunkArray которая разбивает массив на подмассивы на заданое количество елементов

var data = [1,2,3,4,5,6,7,8];
var parts = 3;

function chunkArray(arr, num){

    var result = []; 

    for(let i = 0; i<arr.length; i+=num){
        var chunk = arr.slice(i, i+num); // метод slice не изменит первоначальный массив
        result.push(chunk); // закидываем "кусочки" в новыe массивы
    }
    
    return result;
}

console.log(chunkArray(data, parts));