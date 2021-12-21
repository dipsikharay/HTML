function calculate() {
    try {
        var First = parseInt(validate(document.getElementById("First").value.trim()));
        var Second = parseInt(validate(document.getElementById("Second").value.trim()));
        var Operator = document.getElementById('Operator').value;
        document.getElementById("result").value = operate(First,Second, Operator);

    } catch (err) {
        alert("There was a problem: " + err.messaqge);
    }
}


function operate(First, Second, Operator) {
    if (Operator == 'Add') {
        return First + Second;
    } else if (Operator == 'Sub') {
        return First - Second;
    } else if (Operator == 'Mul') {
        return First * Second;
    } else if (Operator == 'Div') {
        return First / Second;
    }
}

function validate(value) {
    if (value == null || value == "") {
        alert("Required Field");
        return 0;
    } else if (isNaN(value)) {
        alert("Must be a Number Field");
        return 0;
    } else return value;
}
