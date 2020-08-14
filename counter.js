const element = document.getElementById("time");

function addTime(){
  const currentTime = parseInt(element.innerHTML);
  element.innerHTML = currentTime + 1;
}

setInterval(addTime, 1000);
