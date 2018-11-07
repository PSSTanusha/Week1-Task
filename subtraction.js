function Sub(arr)
{
    var result=Number(arr[0])-Number(arr[1]);
     console.log("The sum of "+arr[0]+" and "+arr[1]+" is: "+result);
}
Sub(process.argv.slice(2));

Output:
C:\Users\tanus\.vscode\extensions>node subtraction.js 98 78
The sum of 98 and 78 is: 20
