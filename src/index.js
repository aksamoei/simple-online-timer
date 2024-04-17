//
function timer(){
let start = document.getElementById("start");
let startButton = document.getElementById("activate-start")
let stopButton = document.getElementById("stop")
let stopTime = document.getElementById("s")
let timeDuration = document.getElementById("time")
let timeData = document.getElementById("elapsed")
let startTime;
let refreshButton = document.getElementById("refresh")
function add(){
    let addValue = parseInt(start.textContent);
    start.textContent = addValue += 1;
    
}
//add()
//let counter = setInterval(add, 1000)
let counterControl;
startButton.addEventListener("click", function(){
    startTime = parseInt(start.textContent);
    counterControl = setInterval(add, 1000)
    

})

// stop the counter

function stopCounter(){
    stopButton.addEventListener("click", function(){
        clearInterval(counterControl)
        stopTime.textContent = start.textContent;
    })

}
stopCounter()

function timeElapsed(){
    timeDuration.addEventListener("click", function(){
            let endTime = parseInt(start.textContent);
            let elapsedTime = (endTime - startTime)
            timeData.textContent = `${elapsedTime} seconds`;
        
    })
}
timeElapsed()

// reseting the timer
function resetTimer(){
    refreshButton.addEventListener("click", function(){
        start.textContent = 0;
        stopTime.textContent = 0;
        timeData.textContent = 0;
    })
}
resetTimer()

}

document.addEventListener("DOMContentLoaded", timer)