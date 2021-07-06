function solution(record) {
    const answer = [], user ={};
    var record2 = record.map(str=>str.split(" "));

    record2.forEach(i => {
        i[0] !== "Leave" ? user[i[1]] = i[2] : null;
    });

    record2.forEach(function(i, index){
        i[0] === "Enter" ? answer.push(user[i[1]]+"님이 들어왔습니다.") : 
        i[0] === "Leave" ? answer.push(user[i[1]]+"님이 나갔습니다.") : null;
    });
    console.log(answer);
    return answer;
}

var record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
solution(record);