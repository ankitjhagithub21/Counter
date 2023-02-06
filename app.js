const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const counter = document.getElementById('count');

let number=0;
let start;
startBtn.addEventListener("click", ()=> {
    start = setInterval(function(){
        number++;
        counter.innerText=number;
    },100)
});

stopBtn.addEventListener("click", ()=> {
    clearInterval(start);
});

resetBtn.addEventListener("click", ()=> {
    number=0;
    counter.innerText=number;
});