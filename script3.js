var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am in outerFunction";

    function innerFunction() {
        var innerVar = "I am in innerFunction";
        console.log(globalVar);   
        console.log(outerVar);    
        console.log(innerVar);    
    }

    innerFunction();
}

outerFunction();
