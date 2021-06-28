function solution(a, b) {
    var answer = 0;
    for(var i=0; i< a.length; i++){
        var mul = (a[i] * b[i]);
        answer += mul;
    };
    return answer;
};