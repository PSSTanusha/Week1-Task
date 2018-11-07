function duplicate(arr)
{
    var i,j,count=0;
    var arr1=new Array();
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
               arr1[count++]=arr[i];
        }
    }
    for(i=0;i<arr1.length;i++)
       console.log(arr1[i]+" ");
}
duplicate(process.argv.slice(2));