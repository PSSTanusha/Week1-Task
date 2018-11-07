function Min_Max(arr)
{
    var min=arr[0],max=arr[0],i;
    for(i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
          max=arr[i];
        if(arr[i]<min)
         min=arr[i];
    }
    console.log("The minimum element is "+min+" and the maximum element is "+max);
}
Min_Max(process.argv.slice(2));

output:
C:\Users\tanus\.vscode\extensions>node min-max.js 55 46 78 90 22 11
The minimum element is 11 and the maximum element is 90
