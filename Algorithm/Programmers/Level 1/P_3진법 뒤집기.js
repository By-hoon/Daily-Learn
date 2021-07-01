function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
    // [...] => iterable(반복 가능한 변수에 한하여 실행 가능)
}