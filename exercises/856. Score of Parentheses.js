//Solution: 
var scoreOfParentheses = function(S) {
	var stack = []
	for (var i = 0; i < S.length; i++) {
		var s = S.charAt(i)
		if (s === '(') {
			stack.push(s)
		} else {
			if (stack[stack.length - 1] === '(') {
				stack.pop()
				stack.push(1)
			} else {
				var temp = 0
				while(stack[stack.length - 1] !== '(') {
					temp += stack[stack.length - 1]
					stack.pop()
				}
				stack.pop()
				stack.push(temp * 2)
			}
		}
	}
	return stack.reduce((accu, cur) => accu + cur)
};