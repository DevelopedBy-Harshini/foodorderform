<!DOCTYPE html>
<html>
<head>
<script>
function myfunction()
{
var x= document.getElementById("fname").value;
if(x.lenghth == "")
{
document.getElementById("dio").value = "<H1>invalid</H1>"
}
else
{
document.getElementById("dio").value = "<H1>Valid</H1>"
}
}
</script>
<script>
function myfunction2()
{
 document.write("<H1>The order is placed</H1>")

}
</script>
</head>
</html>