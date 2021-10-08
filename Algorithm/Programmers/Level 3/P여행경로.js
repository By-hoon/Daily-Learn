function solution(tickets) {
    let answer = [], route = {};
    const stack = ['ICN'];
    tickets.sort();
    tickets.forEach(ticket => {
        if (!route[ticket[0]]) route[ticket[0]] = [];
        route[ticket[0]].push(ticket[1]);
    });

    while (stack.length) {
        const current = stack[stack.length - 1];
        if (route[current].length) {
            stack.push(route[current][0]);
            if (!route[route[current][0]]) route[route[current][0]] = [];
            route[current].shift();
        }
        else {
            answer.unshift(stack[stack.length - 1]);
            stack.pop();
        }
    }
    return answer;
}