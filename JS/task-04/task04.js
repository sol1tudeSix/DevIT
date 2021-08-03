// Напишите метод firstUnique который возвращает первый уникальный елемент в масиве

var data = [1,2,3,2,1,3,4,5,5];

function firstUnique(arr){

    // для уникального елемента и indexOf и lastIndexOf вернут одинаковое значение, поэтому сравниваем их
    return arr.filter((num)=>{
        return arr.indexOf(num) === arr.lastIndexOf(num);
    })[0] || "There is no unique element in array"; // возврат или уникального элемента или сообщение об отсутствии такового (или можно вернуть -1)

}

console.log(firstUnique(data));