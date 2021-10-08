function solution(numbers) {
    var answer = numbers.
        sort((a, b) => (b.toString() + a.toString()) - (a.toString() + b.toString())).join('');
    return answer[0] === '0' ? '0' : answer;
}