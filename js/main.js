var add = document.getElementById("add");
var subtract = document.getElementById("subtract");

let total = 0;

add.addEventListener("click", function(){
    total += parseInt(document.getElementById("to-contribute").value);
    document.getElementById("total").innerText = total;
    checkNum(total);
})

subtract.addEventListener("click", function(){
    total -= parseInt(document.getElementById("to-contribute").value);
    document.getElementById("total").innerText = total;
    checkNum(total);
})

const checkNum = () => {
    if(total < 0) {
    console.log("total is negative")
    document.getElementById("total").style.color = "red";
    } else if (total > 0) {
    console.log("total is positive")
    document.getElementById("total").style.color ="green"
    }
}