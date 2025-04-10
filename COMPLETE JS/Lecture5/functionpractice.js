// Q.1
function countVowel(str){
    let count=0;
    for(const char of str){
        console.log(char);
        if(char==="a" ||    char==="e" || char==="i" || char==="o" || 
        char==="u"){
            count++;
        }
    }
    console.log(count);
    return count;
}

// Q.2
const countVowel =(str)=>{
    let count=0;
    for(const char of str){
        // console.log(char);
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    // console.log(count);
    return count;
}
