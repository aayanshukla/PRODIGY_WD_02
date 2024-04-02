const stopwatch = document.getElementById("stopwatch"),
start = document.getElementById("start"),
stp = document.getElementById("stop"),
lap = document.getElementById("lap"),
reset = document.getElementById("reset"),
laps = document.getElementById("laps");

let hrs=0,
mins=0,
sec=0,
ms=0,
timeInterval;


start.onclick= () => {
    timeInterval=setInterval(()=>{
        
    },10)
};

stp.onclick= () => {
    console.log("stop");
};

lap.onclick= () => {
    console.log("lap");
};

reset.onclick= () => {
    console.log("reset");
};