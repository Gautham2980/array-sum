var arr=[11,10,70,75,59,2,9]
var sum=0;
var avg;
document.write("the given number"+arr);
document.write("<br>")
for(let i=0;i<arr.length;i++)
{
	sum=sum+arr[i];
	avg=sum/arr.length;
	
}
document.write("sum of given number:"+sum);
document.write("<br>")
document.write("Average:"+avg);