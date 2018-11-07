function addition(arr)
{
     console.log("The sum of "+arr[0]+" and "+arr[1]+"is: "+Number(arr[0])+Number(arr[1]));
}
addition(process.argv.slice(2));