/*В этом простом задании вам дано число, и вы должны сделать его отрицательным.
 Но может быть, это число уже отрицательное?
*/

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

function makeNegative(num) {
	if (num > 0) {
		return -num
	} else {
		return num
	}
}

//console.log (makeNegative(1));
//console.log (makeNegative(-5));
//console.log (makeNegative(0));
//console.log (makeNegative(0.12));

