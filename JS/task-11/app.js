var startPosForInsert = 2; // Добавлять будем с 2 второго элемента, так как 0 и 1 уже есть по дефолту
var defaultRows = 2; // стартовое кол-во колонок

var defaultCell = 0;

function InsertRow(){

    var newRow = document.getElementById('sampleTable').insertRow(startPosForInsert);

    var newCell1 = newRow.insertCell(defaultCell);
    var newCell2 = newRow.insertCell(++defaultCell);

    defaultCell = 0;

    newCell1.innerHTML=`Row ${++defaultRows} Cell ${++defaultCell}`;
    newCell2.innerHTML=`Row ${defaultRows} Cell ${++defaultCell}`;

    startPosForInsert++;
    defaultCell = 0;
}


function RemoveRow(){

    var delRow = document.getElementById('sampleTable');
    delRow.deleteRow(startPosForInsert-1);

    startPosForInsert--;
    defaultRows--;
}


