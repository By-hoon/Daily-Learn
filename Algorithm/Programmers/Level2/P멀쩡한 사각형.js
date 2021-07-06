function solution(w,h){
    var GCF = 1;        
    var min = Math.min(w,h);
    for(var i=min; i>0; i--){
        if((w%i===0) && (h%i===0)){
        GCF = i;
        break;
        }
    }
    //GCF에 최대공약수 저장
	return  w*h - (w+h-GCF);
}