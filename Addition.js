function addition(arr)
{
     console.log("The sum of "+arr[0]+" and "+arr[1]+"is: "+Number(arr[0])+Number(arr[1]));
}
addition(process.argv.slice(2));

output:
C:\Users\tanus\.vscode\extensions>node addition.js 6789 9087
The sum of 6789 and 9087is: 67899087
