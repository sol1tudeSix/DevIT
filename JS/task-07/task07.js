// Написать обратный метод(см. задачу 5) objectToArray который из обьекта создаст массив. 

var data = {name: 'developer', age: 5, skills: {html: 4, css: 5, js: 5}};

function objectToArray(arr){

    return Object.entries(arr); // таким способом получим массив, однако объекты низщего уровня html, css, js останутся объектом

    //var newArr2 = Object.entries(newArr[2][1]); так способом можно захардкодить объекты низшего уровня html, css, js и преобразовать их в отдельный массив

    // однако полноценно реализовать создания глубокого объекта в полноценный массив мне не удалось
    // если в задаче 5 можно было сравнивать содержимое с помощью Array.isArray, то в этом случае я не нашел решения поставленной задачи

}

console.log(objectToArray(data));



