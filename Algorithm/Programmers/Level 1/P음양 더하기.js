function solution(absolutes, signs) {
    var answer = 0;
    for(var i = 0; i< absolutes.length; i++){
        if(signs[i] === false){
            var minus = -absolutes[i];
            absolutes[i] = minus;
        }
        answer += absolutes[i];
    }
    return answer;
}