// to generate current day of the week
var myDate = new Date()
var dayslist = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var today = document.getElementById('currDay');
today.innerText += dayslist[myDate.getDay()];

// function to generate current utc time in milliseconds
function updateUTC(){
    const currTime = Date.now();
    const displayUtc = document.getElementById('utctime');
    displayUtc.innerText = currTime;
}
updateUTC();
//update the time every milliseconds
setInterval(updateUTC, 1000);
