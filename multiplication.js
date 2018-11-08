function Multiplication(arr)
{
    var num1=Number(arr[0]);
    var num2=Number(arr[1]);
    console.log("The product of "+num1+" and "+num2+" is: "+num1*num2);
}
Multiplication(process.argv.slice(2));