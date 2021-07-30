function solution(places) {
    var answer = [];
    places.forEach(room => {
        var p = []
        room.forEach((line, x) => {
            for (let i = 0; i < 5; i++) {
                if (line[i] === 'P') p.push([x, i]);
            };
        });
        answer.push(manhattan(room, p));
    });
    return answer;
}

const manhattan = (room, p) => {
    var answer = 1
    p.forEach((seat, i) => {
        for (let j = 0; j < p.length; j++) {
            if (j !== i) {
                var dx = Math.abs(seat[0] - p[j][0]);
                var dy = Math.abs(seat[1] - p[j][1]);
                const abs = dx + dy;
                if (abs === 1) answer = 0;
                else if (abs === 2) {
                    if (dx === 2 || dy === 2) {
                        if (room[(seat[0] + p[j][0]) / 2][(seat[1] + p[j][1]) / 2] === "O") answer = 0;
                    }
                    else {
                        if (room[seat[0]][p[j][1]] === "O" || room[p[j][0]][seat[1]] === "O") answer = 0;
                    };
                };
            };
        };
    });
    return answer;
};