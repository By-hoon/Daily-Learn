function solution(n,a,b) {
    var answer = 0; 
    while(a != b){
        [a,b] = even(a,b);
        a = (a/2); b = (b/2); 
        answer++; 
    } 
    return answer; 
} 
function even(a,b){ 
    if(a%2 !=0) a++;
    if(b%2 !=0) b++; 
    return [a,b]; 
}