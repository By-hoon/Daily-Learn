function solution(dirs) {
    var now = { x: 5, y: 5, count: 0 };
    for (let i = 0; i < dirs.length; i++) {
        dirs[i] === 'U' ? now = move(0, 1, now) :
            (dirs[i] === 'D' ? now = move(0, -1, now) :
                (dirs[i] === 'R' ? now = move(1, 0, now) : now = move(-1, 0, now)));
    }
    return (dirs.length - now['count']);
}
function move(dx, dy, now) {
    const orix = now['x'], oriy = now['y'];
    if (now['x'] + dx >= 0 && now['y'] + dy >= 0 && now['x'] + dx <= 10 && now['y'] + dy <= 10) {
        now['x'] = now['x'] + dx;
        now['y'] = now['y'] + dy;
        if (now[`${orix}${oriy}${now['x']}${now['y']}`] && now[`${now['x']}${now['y']}${orix}${oriy}`]) now['count'] += 1;
        else {
            now[`${orix}${oriy}${now['x']}${now['y']}`] = 1;
            now[`${now['x']}${now['y']}${orix}${oriy}`] = 1;
        }
    }
    else now['count'] += 1
    return now;
}