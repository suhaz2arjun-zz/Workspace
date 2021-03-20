// const newYears = "15 Mar 2021";
const daysE1 = document.querySelector('#days')
const hoursE1 = document.querySelector('#hours')
const minsE1 = document.querySelector('#mins');
const secondsE1 = document.querySelector('#sec')
document.querySelector('#dateInp').defaultValue="2021-03-21";


function countDown(){
    const txt=document.querySelector('#textInput').value;
    const quote=document.querySelector('#quoteTxt');
    const newYears1=document.querySelector('#dateInp').value;

    quote.innerHTML=txt;

    const newDate =new Date(newYears1);
    console.log(newDate)
    const currentDate = new Date();
    const totalSeconds= Math.floor((newDate-currentDate)/1000);
    const minutes=Math.floor(totalSeconds/60)%60;
    const hours=Math.floor(totalSeconds/3600)%24;
    const days=Math.floor(totalSeconds/3600/24);
    const seconds=Math.floor(totalSeconds%60);


daysE1.innerHTML=days;
hoursE1.innerHTML=formatTime(hours);
minsE1.innerHTML=formatTime(minutes);
secondsE1.innerHTML=formatTime(seconds);
}

function formatTime(time){
    return time <10 ? `0${time}` : time;
}
setInterval(countDown,1000);
