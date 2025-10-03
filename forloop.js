// let n=prompt("enter number");
// n=parseInt(n);
// for(let i=1;i<=10;i++){
//     console.log(i*n);

// }
// for(let i=1;i<=100;i++){
//    console.log(Math.floor(Math.random()*100)+1);
// }
// let num=floor(Math.random()*100)+1;
const range=prompt("enter range:");
const num=Math.floor(Math.random()*range)+1;
let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        break;
    }
    if(guess==num){
        console.log("congrats u r ryt guess num was : ",num);
        break;
    }else if(guess<num){
        guess=prompt("your num was small try again");
    }else{
       guess= prompt("ur num was lagre try again");
    }
}
