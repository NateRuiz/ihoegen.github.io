 var date = new Date();
 var n = date.getMonth();

 var orci = (4 + n) + " months ";
 if (orci >= 12) {
   orci = "1 Year"
 };
 var win = (n - 1) + " months ";
 document.getElementById("omg").innerHTML = orci;
 document.getElementById("winde").innerHTML = win;
