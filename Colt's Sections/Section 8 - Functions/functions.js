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
