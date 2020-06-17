var add = document.getElementById("add");
var subtract = document.getElementById("subtract");

let total = 0;

add.addEventListener("click", function(){
    total += parseInt(document.getElementById("to-contribute").value);
    document.getElementById("total").innerText = total;
})

subtract.addEventListener("click", function(){
    total -= parseInt(document.getElementById("to-contribute").value);
    document.getElementById("total").innerText = total;
})

