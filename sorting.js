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

output:
C:\Users\tanus\.vscode\extensions>node sorting.js 72 35 46 1 6 0 3
The sorted array is:0,1,3,6,35,46,72
