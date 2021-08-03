// Создайте прототип который удаляет дубликаты из строки

let data = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

String.prototype.removeDuplicate = function(){

    const arr = this.split(" "); // по аналогии с предыдущим заданием разбиваем на массив строк

    // благодаря объекту Set можно сохранить только уникальные значения, в том числе примитивы
    return Array.from(new Set(arr)).join(" "); // возврат в виде строки с помощью метода join
}

console.log(data.removeDuplicate());





