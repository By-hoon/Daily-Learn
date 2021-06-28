function solution(array, commands) {
    var answer = [];
    commands.forEach(i => {
        var sl_answer =  array.slice(i[0]-1, i[1]); //배열 자르기
        sl_answer.sort((a,b) => a-b); //정렬
        answer.push(sl_answer[i[2]-1]); //answer에 푸시
    });

    return answer;
}