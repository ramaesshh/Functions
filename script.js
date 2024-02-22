function Add(a,b)
{
    return a+b
}
console.log(Add(2,5))

function sub(a,b,c)
{
    return a-b-c
}
console.log(Math.abs(sub(4,5,5)))




let arr=[12,13,14,15,16]
let result=[]
function odd(arr)
{
    for(i=0;i<=arr.length-1;i++)
    {
        if(arr[i]%2!=0){
            result.push(arr[i])
        }
    }
    return result
}  
console.log(odd(arr))



let a = function(a,b)              //Anonymous Function
{
    return a*b
}
console.log(a(2,4));



(function o(arr)                     //IIFE(Imediatily Invoked Function Expression)
{
    var result = []
    for(var i=0;i<=arr.length-1;i++)
    {
    if(arr[i]%2!=0)
    {
      result.push(arr[i])
    }
}
    console.log(result)
})([12,13,14,15,16])



const od = (a,b,c)=>{                    //Arrow function(ES6)
    return (a*b*c)
}
console.log(od(2,3,4))

let d = (arr)=>{
    var result = []
    for(var i=0;i<=arr.length-1;i++)
    {
        if(arr[i]%2!=0)
        {
            result.push(arr[i])
        }
    }
    return result
}
console.log(d([1,2,3,4,5,6,7]))





let z = (a,b)=>{return a*b}
console.log(z(2,2))


let y = (a,b,c)=>{return a+b+c}
console.log(y(1,2,4))






let cc = ["hi","hello","computer"];                        //Assigning first letter of the word in caps
function capitalizeFirstLetter(cc) {
    var result = [];
    
    for(var i=0;i<=a.length-1;i++)
    {
      result.push(cc[i].charAt(0).toUpperCase()+cc[i].slice(1));
    }
    return result;
}console.log(capitalizeFirstLetter(cc));





const cp = (arr)=>{
    let result = [];
    for(var i =0;i<=arr.length-1;i++){
        result.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return result;
}
console.log(cp(["good morning","happy","hello"]))