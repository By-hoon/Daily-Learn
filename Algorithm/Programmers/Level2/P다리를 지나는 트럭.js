function solution(bridge_length, weight, truck_weights) {
    var answer = 0, bridge = [], weight_check = 0, time = [];
    truck_weights.forEach(truck => {
        var pass = 0;
        while (pass === 0) {
            if (bridge.length < bridge_length && (weight_check + truck) <= weight) {
                bridge.push(truck);
                time.push(bridge_length);
                weight_check += truck;
                pass = 1
            }
            time.forEach((t, i) => {
                time[i] -= 1;
            });
            if (time[0] === 0) {
                time.shift();
                weight_check -= bridge[0]
                bridge.shift();
            }
            answer++;
        }
    });
    return answer + time[time.length - 1] + (truck_weights.length !== 0 ? 1 : 0);
}