// Напишите метод arrayToObject который возвращать обьект(использовать рекурсию)

var array = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];


// воспользуюсь методом fromEntries чтобы преобразовывать все составные объекты исходного массива в объекты
// то есть если из пары "ключ-значение" значение будет являться массивом, рекурсивно вызываем эту же функцию

function arrayToObject(arr){

    return Object.fromEntries(arr.map(([key, val]) => Array.isArray(val) ? [key, arrayToObject(val)] : [key, val]));
}

console.log(arrayToObject(array));








