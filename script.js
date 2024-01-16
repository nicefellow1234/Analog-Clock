let hr = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

function displayTime() {
  // Fetch current date now
  let d = new Date();

  // Get time in separate intervals
  let ss = d.getSeconds();
  let mm = d.getMinutes();
  let hh = d.getHours();

  // Calculate the elapsed time within the current second
  let milliseconds = d.getMilliseconds();
  let elapsedSeconds = ss + milliseconds / 1000;

  // Calculate the second's rotation based on elapsed time
  let sRotation = (6 * elapsedSeconds + 0.1).toFixed(2); // Round to 2 decimal points

  // Check if the target value is reached
  if (sRotation >= 360) {
    sRotation = 0.1; // Reset to the initial value
  }

  // Calculate the elapsed time within the current minute
  let elapsedMinutes = mm + elapsedSeconds / 60;

  // Calculate the minute's rotation based on elapsed time
  let mRotation = (6 * elapsedMinutes).toFixed(2); // Round to 2 decimal points

  // Check if the target value is reached
  if (mRotation >= 360) {
    mRotation = 0.1; // Reset to the initial value
  }

  // Calculate the elapsed time within the current hour
  let elapsedHours = hh + elapsedMinutes / 60;

  // Calculate the hour's rotation based on elapsed time
  let hRotation = (30 * elapsedHours + mm / 2).toFixed(2); // Round to 2 decimal points

  // Check if the target value is reached
  if (hRotation >= 360) {
    hRotation = 0.1; // Reset to the initial value
  }

  // Update the needles rotation
  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
  console.log(`Hours: ${hRotation}, Minutes: ${mRotation}, Seconds: ${sRotation}`);
}

setInterval(displayTime, 50);
