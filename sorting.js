function sort(arr)
{
   var i,j,temp=0;
   for(i=0;i<arr.length;i++)
   {
       for(j=i+1;j<arr.length;j++)
       {
           if(Number(arr[i])>=Number(arr[j]))
           {
              temp=arr[i];
              arr[i]=arr[j];
              arr[j]=temp;
           }
       }
   }
   console.log("The sorted array is:"+arr);
}
sort(process.argv.slice(2));