var separate_time = function(time){
var sec = time.getSeconds();
var min = time.getMinutes();
var hours = time.getHours();
var days = time.getDate();
var month = time.getMonth();
var year = time.getFullYear();
return[sec,min,hours,days,month,year];
}

var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent =
 counter[5] + '年' +
 counter[5] + '年' +
 counter[5] + '年' +
 counter[5] + '年' +
 counter[5] + '年' +
