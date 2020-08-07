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

function anotherVersion(password, username) {
	if (
		password.length < 8 ||
		password.includes(' ') ||
		password.includes(username)
	) {
		return false;
	}

	return true;
}

console.log(anotherVersion('9082309uio0293u', 'francis')); // true
console.log(anotherVersion('dogluvr69', 'dogluvr')); // false (contains username)
console.log(anotherVersion('francis bacon', 'joe')); // false (contains space)
console.log(anotherVersion('francis   bacon', 'joe')); // false (contains spaces)
console.log(anotherVersion('yo', 'joe')); // false (too short)
