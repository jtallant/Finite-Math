/*global document, alert, window */

Math.factorial = function (n) {
	if (n < 2) {
		return 1;
	}
	return (n * Math.factorial(n - 1));
};

function doCalc(type) {

	var form = ( 'combination' == type ) ? document.combination : document.permutation;

	var n = form.T1.value;
	var r = form.T2.value;

	if ( isNaN(n) || isNaN(r) ) {
		alert("Factorial requires a numberic argument.");
		return null;
	}

	var formula = ( 'combination' == type ) ? Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r)) : Math.factorial(n) / Math.factorial(n - r);

	form.T3.value = formula;
}

window.onload = function() {
	document.getElementById('calculate-p').onclick = function() {
		doCalc('permutation');
	};
	document.getElementById('calculate-c').onclick = function() {
		doCalc('combination');
	};
};