function fibonacci(arr)
{
    var num=Number(arr[0]);
    var arr1=new Array(temp);
    var a=0,b=1,temp;
    arr1[0]=a;
    arr1[1]=b;
    for(temp=2;temp<num;temp++)
    {
        c=a+b;
        arr1[temp]=c;
        a=b;
        b=c;
    }
    console.log(arr1);
}
fibonacci(process.argv.slice(2));

output:
C:\Users\tanus\.vscode\extensions>node fibanocci.js 10
[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
