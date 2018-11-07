function prime(arr)
{
    var number=Number(arr[0]);
    var temp;
    var flag=1
    for(temp=2;temp<number;temp++)
    {
        if(number%temp==0)
        {
           flag=0;
           break;
        }
    }
    if(flag==1)
       console.log("The Number "+number+" is prime");
    else
    console.log("The Number "+number+" is not prime");
}
prime(process.argv.slice(2));

Output:
C:\Users\tanus\.vscode\extensions>node prime.js 97
The Number 97 is prime

C:\Users\tanus\.vscode\extensions>node prime.js 72
The Number 72 is not prime
