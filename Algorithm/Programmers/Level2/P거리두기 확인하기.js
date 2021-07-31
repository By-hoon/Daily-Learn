function solution(places) {
    var answer = [];
    places.forEach(room => {
        var p = []
        room.forEach((line, x) => {
            for (let i = 0; i < 5; i++) {
                if (line[i] === 'P') p.push([x, i]);    //각 방의 앉아있는 자리 좌표 배열 생성
            };
        });
        answer.push(manhattan(room, p));    //해당 방과 생성한 배열을 manhattan함수로 보낸 후,
    });                                     //해당 return값을 answer배열에 저장.
    return answer;
}

const manhattan = (room, p) => {
    var answer = 1
    p.forEach((seat, i) => {
        for (let j = 0; j < p.length; j++) {
            if (j !== i) {
                var dx = Math.abs(seat[0] - p[j][0]);   //앉아있는 각 자리간의
                var dy = Math.abs(seat[1] - p[j][1]);   //manhattan거리계산
                const abs = dx + dy;
                if (abs === 1) answer = 0;      //manhattan거리가 1인 경우 0 리턴
                else if (abs === 2) {           //manhattan거리가 2인 경우 중,
                    if (dx === 2 || dy === 2) { //일직선상에 있는 경우,
                        if (room[(seat[0] + p[j][0]) / 2][(seat[1] + p[j][1]) / 2] === "O") answer = 0; //사이에 파티션이 없으면 0 리턴
                    }
                    else {                      //대각선에 있는 경우
                        if (room[seat[0]][p[j][1]] === "O" || room[p[j][0]][seat[1]] === "O") answer = 0; //파티션 2개가 막고 있지 않다면 0 리턴
                    };
                };
            };
        };
    });
    return answer;
};
