const solution = (s) => {
    s = s.split("");
    let sLength = s.length - 1, answer = 0;

    while (sLength--) {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            stack.push(s[i]);

            if (
                (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") ||
                (stack[stack.length - 2] === "{" && stack[stack.length - 1] === "}") ||
                (stack[stack.length - 2] === "[" && stack[stack.length - 1] === "]")
            ) {
                stack.pop();
                stack.pop();
            }
        }

        if (stack.length === 0) answer++;

        const temp = s.shift();
        s.push(temp);
    }

    return answer;
}