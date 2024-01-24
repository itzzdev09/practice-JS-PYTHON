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


// or

var isprm = function(n) {
    var i=5;
    var w=2;
    if(n==2 || n== 3)
     return 1;
    if(n%2==0 || n%3==0 || n==1)
      return 0;
    while(i*i <= n){
      if(n%i == 0)
        return 0;
      i +=w;
      w=6-w;
    }
    return 1;
  }
  
  var i=0;
  for(; i<1000000; i++){
    if(isprm(i)==1)
      console.log(i + '\n');