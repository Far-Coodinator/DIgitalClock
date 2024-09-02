let AmPm = document.querySelector('.amPm')
function digital(){
    // in java Script alread deifend the date class 
    let realTime = new Date()
    let hours = realTime.getHours();
    let minutes = realTime.getMinutes();
    let Secends = realTime.getSeconds();
    // 👇👇 this condition to convert 24 to 12 and set the AM , PM 
    if(hours>12){
        hours += -12
        AmPm.innerHTML = 'PM'
    }
    document.querySelector('.hour').innerHTML = padZero(hours)
    document.querySelector('.minut').innerHTML = padZero(minutes)
    document.querySelector('.secend').innerHTML = padZero(Secends)
}
// 👇👇 this function to get detail of Date
function realDate(){
    let realdateDigi = new Date()
    let date = padZero(realdateDigi.getDate());
    let month = padZero(realdateDigi.getMonth() + 1);
    let year = padZero(realdateDigi.getFullYear());
    document.querySelector('.day').innerHTML = date
    document.querySelector('.month').innerHTML = month
    document.querySelector('.year').innerHTML = year
}
// this function to convert 2 digital number if that single 
function padZero(num){
    return num<10?'0'+num:num
}

// 👇👇this is like iam saying 'every 500 millisecends do this.'
setInterval(digital,500)
setInterval(realDate,500)