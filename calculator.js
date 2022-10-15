console.log('hello world');

var display = document.getElementById('display'),
    clear = document.getElementsByClassName('clbutton'),
    back = document.getElementsByClassName('bkbutton'),
    operator = document.getElementsByClassName('opbutton'),
    num = document.getElementsByClassName('numbutton'),
    equal = document.getElementsByClassName('eqbutton'),
    currentnumValue,
    currentOperator,
    displayValue,
    result,
    backspaceValue;


function dataInput() {
    currentnumValue = this.value;
    display.value += currentnumValue;
}