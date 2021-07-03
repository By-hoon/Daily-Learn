function solution(n, arr1, arr2) {
    var arr3 = "", arr4= [], answer = [];
    for(let i =0; i<n; i++){
        //padStart(n,'0') 로 공백 채우기
        arr3 += ((parseInt(arr1[i].toString(2).padStart(n,'0')) + parseInt(arr2[i].toString(2).padStart(n,'0'))).toString(10)).padStart(n,'0');
    }
    arr3 = arr3.split("");
    arr3.forEach(function(i, index){
        if(i=="1" || i=="2")arr4[index] = "#";
        else if(i=="0")arr4[index] = " ";
        if(index % n === (n-1)){
            answer.push(arr4.join(''));
            arr4 = [];
        }
    });
    return answer;
}