function update(isIncreaseing) {
    const siliconInput = document.getElementById('silicon-input');
    let inputNumber = siliconInput.value;
    if (isIncreaseing == true) {
        inputNumber = parseInt(inputNumber) + 1;
    }
    else if (inputNumber > 0) {
        inputNumber = parseInt(inputNumber) - 1;
    }
    siliconInput.value = inputNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = inputNumber * 59;
}



document.getElementById('silicon-plus-button').addEventListener('click',
    function () {
        update(true);
    });
document.getElementById('silicon-minus-button').addEventListener('click',
    function () {
        update(false);

    })