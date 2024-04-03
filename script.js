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
        ms++
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            mins++;
            sec=0;
        }
        if(mins==60){
            hrs++;
            mins=0;
        }
        stopwatch.innerHTML = ` ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    },10);
    start.setAttribute("style", "display:none");
    stp.setAttribute("style", "display:block");
    lap.setAttribute("style", "display:block");
    reset.setAttribute("style", "display:none");
};

const zeroPad=(num)=>{
    return String(num).padStart(2,"0");
}

stp.onclick= () => {
    clearInterval(timeInterval);
};

lap.onclick= () => {
    console.log("lap");
};

reset.onclick= () => {
    console.log("reset");
};