function printStar(){
    for(let i = 0; i < 3; i++){
        for(let j = 0 ; j <= i; j++){
            console.log(" * ")
        }  
        // if(i = 1){
        //     console.log(" * ")
        // }   else if( i = 2){
        //     console.log(" * * ")
        // }else{
        //     console.log(" * * * ")
        // }
    }
}
console.log(printStar())