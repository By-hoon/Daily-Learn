function solution(n) {
    //string.repeat() 값을 해당 횟수 반복
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}