let num1 = document.getElementsByTagName("button")
let clear1 = document.getElementById("clear");
let equal1 = document.getElementById("equal");
let value1 = document.getElementsByClassName("textvalue")[0];

for (var i = 0; i < 18; i++) {
    if (i != 0 && i != 15) { // C ve = butonlarına basıldığında, ekranda görünmemesi için.
        num1[i].addEventListener("click", scan);
    }
}
function scan() {
    value1.value = value1.value + this.value;
}

equal1.addEventListener("click", equal);
function equal(){
    value1.value = eval(value1.value);
}

clear1.addEventListener("click",clear);

function clear(){
    value1.value = "";
}
