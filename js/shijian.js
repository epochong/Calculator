var doc = window.document;

function showtime() {
	var v = new Date();
	var ss = v.getTime();
	var times = v.toLocaleString(ss);
	doc.getElementById("sj").innerHTML = times;
}
showtime();
var id = window.setInterval("showtime()", 1000);