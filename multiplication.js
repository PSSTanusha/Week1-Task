function Multiplication(arr)
{
    var num1=Number(arr[0]);
    var num2=Number(arr[1]);
    console.log("The product of "+num1+" and "+num2+" is: "+num1*num2);
}
Multiplication(process.argv.slice(2));

output:
C:\Users\tanus\.vscode\extensions>node multiplication.js 7 19
The product of 7 and 19 is: 133
