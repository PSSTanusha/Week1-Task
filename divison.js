function Divison(arr)
{
   var num1=Number(arr[0]);
   var num2=Number(arr[1]);
   console.log("The divison of "+num1+" and "+num2+" is:"+num1/num2);
}
Divison(process.argv.slice(2));

output:
C:\Users\tanus\.vscode\extensions>node divison.js 81 9
The divison of 81 and 9 is:9
