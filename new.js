var num1Input= document.getElementById("num1")
var num2Input= document.getElementById("num2")
var operator= document.getElementById("operator")
var result= document.getElementById("Result")
var button= document.getElementById("btn")
function calculate(){

    if(num1Input.value==="" || num2Input.value===""){
        alert("Please make sure you have entered both the operands")
        result.innerHTML = "Number not Entered"
    }else{
        var op = operator.value
        var expression = num1Input.value+op+num2Input.value
        result.innerHTML = eval(expression)
    }
}

button.addEventListener("click",calculate)