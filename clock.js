
const clockConatiner = document.querySelector(".js-clock");
const clockTitle = clockConatiner.querySelector("h1");

function getTime() {
  var date = new Date(),
    minutes = date.getMinutes(),
    hours = date.getHours();
    seconds = date.getSeconds();

  if (hours>12) {
    hours = hours-12
    var apm="PM"
  } else {
    var apm="AM"
  }
 
  clockTitle.innerText = `
   ${apm}  ${hours < 10 ? `0${hours}` : `${hours}`} : ${minutes < 10 ? `0${minutes}`:`${minutes}`} :    ${seconds < 10 ? `0${seconds}`:`${seconds}`} `;
}



function init() {
  getTime();
  setInterval(getTime,1000)
};

init();