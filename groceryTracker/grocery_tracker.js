let grocery1, grocery2, grocery3;

function groceryTracker(){
    grocery1 = parseFloat(document.getElementById("gr1").value);
    grocery2 = parseFloat(document.getElementById("gr2").value);
    grocery3 = parseFloat(document.getElementById("gr3").value);

    let totalAmount = grocery1 + grocery2 + grocery3;
    document.getElementById("result").innerText = `The total amount is:$ ${totalAmount}`;
}