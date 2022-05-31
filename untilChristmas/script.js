const clockTitle = document.querySelector(".js-clock");

function countingClock(){
  const now = new Date();
  const christmas = new Date(2021, 11, 25);

  const gap = (christmas.getTime() - now.getTime());

  const days = String(Math.floor(gap/(1000 * 60 * 60 * 24))).padStart(3, "0");
  const hours = String(Math.floor((gap %
    (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor((gap %(1000 * 60 * 60))/ (1000 * 60))).padStart(2, "0");
  const seconds = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

countingClock();
setInterval(countingClock, 1000); //1 second