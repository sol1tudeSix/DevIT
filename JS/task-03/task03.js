// Напишите фукцию обертку которая на вход принимает асинхронный метод и масив аргументов а отдает нам Promise с результатом

var args = [1,2];


function toPromise(args) {
    return new Promise(resolve => {
        Promise.all([args[0], args[1]]).then(([x, y]) => {
            resolve(x + y);
        });
    })
}

toPromise(args).then(sum => {
    console.log(sum);
});