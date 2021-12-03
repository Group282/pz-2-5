let value_insert = document.getElementById("text_insert");
let result = document.getElementById("result");

function insert(num) {
    value_insert.value = value_insert.value + num;
}

function clean() {
    value_insert.value = "";
    result.value = "";
}

function back() {
    let exp = value_insert.value;
    value_insert.value = exp.substring(0, exp.length-1);
}

function equal() {
    let exp = value_insert.value;
    if (exp) {
        result.value = eval(exp);
    }
}