function numBtn(i) {
	calc.result.value += i;
}

function clrBtn() {
	calc.result.value = '';
}

function evalBtn() {
	calc.result.value = eval(calc.result.value);
}