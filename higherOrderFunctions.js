function add(a,b){
    // var a = Number(document.getElementById("a").value)
    // var b = Number(document.getElementById("b").value)
    // console.log(a,b)
    // document.getElementById("result").innerHTML = a+b
    return(a+b)
}
function subtract(a,b){
    // var a = Number(document.getElementById("a").value)
    // var b = Number(document.getElementById("b").value)
    // document.getElementById("result").innerHTML = a-b
    return(a-b)
}
function multiply(a,b){
    // var a = Number(document.getElementById("a").value)
    // var b = Number(document.getElementById("b").value)
    // document.getElementById("result").innerHTML = a*b
    return(a*b)
}
// function division(a,b){
    // var a = Number(document.getElementById("a").value)
    // var b = Number(document.getElementById("b").value)
    // document.getElementById("result").innerHTML = a/b
// }

function calculate(){
    var a = Number(document.getElementById("a").value)
    var b = Number(document.getElementById("b").value)
    var arithmeticoperation = document.getElementById("operator").value
    var display = document.getElementById("option").value
    
    if(arithmeticoperation == "add"){
        operator = add
    }else if(arithmeticoperation == "subtract"){
        operator = subtract
    }else if(arithmeticoperation == "multiply"){
        operator = multiply
    }else{
        operator = division
    }

    if(display == "html"){
        outputtype = htmlview
    }else if(display == "console"){
        outputtype = consoleview
    }else{
        outputtype = alertview
    }
    displayresult(a,b,operator,outputtype)
}
function displayresult(a,b,operator,htmlview){
    htmlview(operator(a,b))
}

function htmlview(res){
    document.getElementById("result").innerHTML = res
}

function consoleview(res){
    console.log(res)
}

function alertview(res){
    alert(res)
}