let hr = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

function displayTime() {
  // Fetch curret date now
  let d = new Date();

  // Get time in separate intervals
  let ss = d.getSeconds();
  let mm = d.getMinutes();
  let hh = d.getHours();

  // Calculate the rotations
  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  // Update the neeedles rotation
  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
