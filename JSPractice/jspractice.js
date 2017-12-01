function $(x) {return document.querySelector(x); }
var factors = $('.factors');
var factorsShow = $("#factorOut");
var maxValue = $('.maxValue');
var maxShow = $("#maxShow");
var sum = $("#displaysum");
function getFactors() {
    var arr = factors.value.split(",");
    for (let i=0;i<arr.length;i++){
        arr[i]= parseInt(arr[i]);
    }
    finalFactors = arr;
    
}
function getMax(){
    max=parseInt(maxValue.value);
}
factors.addEventListener('keyup', function () {
    getFactors();
    printFact();
  })

maxValue.addEventListener('keyup', function() {
    getMax();
    printFact();
  })
var finalFactors=[]; getFactors();
var max=0;getMax();

function check(n){
    for(var i=0;i<finalFactors.length;i++){
        if(n%finalFactors[i] === 0){return true;}
    }
    return false;
}

function printFact(){
factorsShow.innerHTML=factors.value;
maxShow.innerHTML= maxValue.value;
var sum=0;
    for (var y=0; y<max; y++){
        if(check(y)){sum+=y;}
    }
    

displaysum.innerHTML= sum;
}
printFact();

function fibonacci(){
var displayFibSum =$("#displayFibSum");
var maxFibValue = $('.maxFibValue');
var max = parseInt(maxFibValue.value);
var fib =[1,2];
var evenFib=[2];
var finalSum=0;
    
        
$("#maxFibShow").innerHTML=maxFibValue.value;
    
    

        for(let i=0;i<fib.length;i++)
            {
                let sum = fib[i]+fib[i+1];
            
               if(sum<max){
                    if(sum%2==0){
                        evenFib.push(sum);
                    }
                fib.push(sum);
                }
                
                else if(sum>max){break;}
                console.log(evenFib);
           
            }
        
    for(let i=0;i<evenFib.length;i++){
        finalSum += evenFib[i];
      
    }
         console.log(finalSum);
  displayFibSum.innerHTML =finalSum;
    
}