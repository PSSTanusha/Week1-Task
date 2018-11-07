function search(arr)
{
    //the element at 0th position is the element to be searched and the elements from 1st position are the array elements
    var num=Number(arr[0]),i,position;
    var num1=prompt("search ele");
    for(i=1;i<arr.length;i++)
    {
        if(num==arr[i])
        {
           console.log("The element "+num+" is found at position "+i);
           break;
        }
    }
}
search(process.argv.slice(2));

output:
C:\Users\tanus\.vscode\extensions>node searching.js 1 2 3 4 5 1
The element 1 is found at position 5
