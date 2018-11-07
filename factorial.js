function Factorial(arr)
{
    var fact=Number(arr[0]);
    var res=1,temp;
    for(temp=1;temp<=fact;temp++)
    {
        res=res*temp;
    }
    console.log(res);
}
Factorial(process.argv.slice(2));

output:
C:\Users\tanus\.vscode\extensions>node factorial.js 5
120
