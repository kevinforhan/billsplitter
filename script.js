const billSplitterForm = document.getElementById('bill-divider-form'); 
billSplitterForm.addEventListener('submit', billDivideHandler)

function billDivideHandler(event) {
    event.preventDefault()
    // console.log("ok")
    const inputs = getInputs()
    showCalculateOutput(inputs)
}

//get all inputs for the bill divider

function getInputs() {
    let subTotal = document.getElementById('subtotal').value; 
    let tipPercent = document.getElementById('tip').value; 
    let noOfPerson = document.getElementById('no-of-person').value; 
    return {subTotal, tipPercent, noOfPerson}
}

//calculate the bill divider info 
function showCalculateOutput(input) { 
    billSplitterForm.reset();

    let totalTip = (parseFloat(input.subTotal) * parseFloat
    (input.tipPercent)) / 100;
    let totalAmount = parseFloat(input.subTotal) * totalTip; 
    let tipPerPerson = totalTip / parseFloat(input.noOfPerson)
    let billPerPerson = totalAmount / parseFloat(input.noOfPerson);
    // console.log(totalTip, totalAmount, tipPerPerson, billPerPerson)

    document.getElementById('total-bill').innerHTML = `$ ${totalAmount.toFixed(2)}`;
    document.getElementById('bill-per-person').innerHTML = `$ ${billPerPerson.toFixed2}`; 
    document.getElementById('total-tip').innerHTML = `$ ${totalTip.toFixed(2)}`
    document.getElementById('tip-per-person').innerHTML = `$ ${tipPerPerson.toFixed(2)}`
 } 