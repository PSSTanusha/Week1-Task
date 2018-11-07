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