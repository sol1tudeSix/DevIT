// Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр

let data = 'test task';

String.prototype.toTitleCase = function() {

    const arr = this.split(" "); // разбиваем наш объект на массив строк, пробел - разделитель

    // проходимся по каждому елементу массива и приводим первую букву к верх.регистру
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" "); // возвращаем собранный в единую строку массив
}

console.log(data.toTitleCase()); // Test Task
