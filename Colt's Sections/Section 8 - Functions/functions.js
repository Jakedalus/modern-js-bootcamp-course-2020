/////// PASSWORD ///////
console.log('/////// PASSWORD ///////');

function isValidPassword(password, username) {
	const isAtLeastEightChars = password.length >= 8;
	const hasNoSpaces = !password.includes(' ');
	const doesNotContainUsername = !password.includes(
		username
	);

	return (
		isAtLeastEightChars &&
		hasNoSpaces &&
		doesNotContainUsername
	);
}

console.log(isValidPassword('9082309uio0293u', 'francis')); // true
console.log(isValidPassword('dogluvr69', 'dogluvr')); // false (contains username)
console.log(isValidPassword('francis bacon', 'joe')); // false (contains space)
console.log(isValidPassword('francis   bacon', 'joe')); // false (contains spaces)
console.log(isValidPassword('yo', 'joe')); // false (too short)

function anotherVersionOfValidPW(password, username) {
	if (
		password.length < 8 ||
		password.includes(' ') ||
		password.includes(username)
	) {
		return false;
	}

	return true;
}

console.log(
	anotherVersionOfValidPW('9082309uio0293u', 'francis')
); // true
console.log(
	anotherVersionOfValidPW('dogluvr69', 'dogluvr')
); // false (contains username)
console.log(
	anotherVersionOfValidPW('francis bacon', 'joe')
); // false (contains space)
console.log(
	anotherVersionOfValidPW('francis   bacon', 'joe')
); // false (contains spaces)
console.log(anotherVersionOfValidPW('yo', 'joe')); // false (too short)

/////// AVERAGE ///////
console.log('/////// AVERAGE ///////');

function average(arr) {
	let sum = 0;
	arr.forEach(n => (sum += n));
	return sum / arr.length;
}

console.log('[1,2,3]', average([ 1, 2, 3 ]));
console.log('[10,20,30]', average([ 10, 20, 30 ]));
console.log('[7,12,56]', average([ 7, 12, 56 ]));

/////// PANGRAMS ///////
console.log('/////// PANGRAMS ///////');

/////// PLAYING CARDS ///////
console.log('/////// PLAYING CARDS ///////');
