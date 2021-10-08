function solution(priorities, location) {
    var max = priorities.slice();
    max.sort().reverse();
    var anwser = [], cnt = 0;
    while(priorities.length !== 0){
        priorities.forEach(function(i, index){
            if(i === max[cnt] && priorities.length !== 0){
                anwser.push(i);
                if(index === location){
                    priorities =[];
                };
                cnt++;
            };
        });
    }
    return anwser.length;
}