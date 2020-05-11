//Active dark
const darkModeToggle = document.querySelector('.darkModeToggle');
const body = document.querySelector('body');
const ball = document.querySelector('.ball');
const checkbox = document.querySelector('.checkbox');

let darkMode = localStorage.getItem('darkMode');

//check if darkmode is enabled
//if it's enabled turn it off
//if its not turn it on

const enableDarkMode = () =>{
    //1. add the class darkmode to the body
    body.classList.toggle('darkMode');
    //2. upadate darkmode in the localstorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () =>{
    //1. add the class darkmode to the body
    body.classList.toggle('darkMode')
    //2. upadate darkmode in the localstorage
    localStorage.setItem('darkMode', null);
}

if(darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () =>{
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled'){
        enableDarkMode();
        console.log(darkMode);
    }else{
        disableDarkMode();
        console.log(darkMode);
    }
})

//functionality of the clock
const sechand = document.querySelector('.second');
const minhand = document.querySelector('.minute');
const hrhand = document.querySelector('.hour');

const setTime = ()=>{
    const now = new Date();

    const second = now.getSeconds();
    const secDeg = ((second / 60) * 360) + 90;
    sechand.style.transform = `rotate(${secDeg}deg)`;

    const minute = now.getMinutes();
    const minDeg = ((minute / 60) * 360) + 90;
    minhand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hrDeg = ((hour / 12) * 360) + 90;
    hrhand.style.transform = `rotate(${hrDeg}deg)`;

}

setInterval(setTime, 1000);
setTime();