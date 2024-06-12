var a = [1, 2, 3]
var b = [3, 2, 1]
function compareTriplete(a,b){
    let aliceScore = 0, bobScore = 0;
    for(let i = 0; i < 3; i++){
        if(a[i]>b[i]){
            aliceScore++
        }else if(a[i]<b[i]){
            bobScore++

        }
        
    }
    return [aliceScore, bobScore]
}
compareTriplete(a,b);
console.log(compareTriplete(a,b))

