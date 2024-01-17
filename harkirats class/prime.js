function isprime(num){
    if(num<=1)
    return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % 2 === 0)
        return false;
    }
    return true;
}
let number= 17;
console.log(`${number} is ${isprime(number)? "prime" : "not prime"}`);