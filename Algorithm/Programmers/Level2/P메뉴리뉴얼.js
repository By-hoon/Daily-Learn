const pick = (n, picked, check, toPick, num, anwser) => {
	if(toPick===0){
        var out = 0;
        check = {};
        picked.forEach(i => {
            if(check[i])out =1;
            check[i] = 1
        });
        // console.log(picked);
        var pj = picked.sort().join("");
        if(!num[pj])num[pj] = 1;
        else if(num[pj]===1) {
            if(out === 0)anwser.push(pj);
            if(out !== 0)console.log(pj);
            num[pj] ++;
        }
        else num[pj] ++;
        out = 0;
    	return;
    }

    const smallest = picked.length;
    for(let next=smallest; next<n.length; next++){
        picked.push(n[next]);
        pick(n, picked, check, toPick-1, num, anwser);
        picked.pop();
    }
};

function solution(orders, course) {
    var num = {}, anwser = [];
    for(let i = 0; i < course.length; i++){
        for(let j =0; j< orders.length; j++){
            pick(orders[j], [], {}, course[i], num, anwser);
        };
    };
    // pick(orders[0], [], {}, course[1], num, anwser);
    // pick(orders[1], [], {}, course[1], num, anwser);
    // pick(orders[2], [], {}, course[1], num, anwser);
    // pick(orders[3], [], {}, course[1], num, anwser);
    // pick(orders[4], [], {}, course[1], num, anwser);
    // pick(orders[5], [], {}, course[1], num, anwser);
    // console.log(num);
    console.log(anwser);
}


const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2,3,4];
solution(orders, course);