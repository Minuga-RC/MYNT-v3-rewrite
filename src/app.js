// Import Material Web components
import '@material/web/all.js';
import '@material/web/icon/icon.js';

updatetaptoeditbox();
const userTextDiv = document.getElementById("userTextt");
userTextDiv.addEventListener("input", function () {
    localStorage.setItem("userText", userTextDiv.value);
});
function updatetaptoeditbox(){
    const userTextDiv = document.getElementById("userTextt");
    const storedValue = localStorage.getItem("userText");
    if (storedValue) {
        userTextDiv.value = storedValue;
    }
}
document.getElementById("date").innerText = `Sun, Oct 20`;
const analogClock = document.getElementById('analogClock');
const digitalClock = document.getElementById('digitalClock');

        analogClock.style.display = 'block'; // Show the analog clock
        digitalClock.style.display = 'none';  // Hide the digital clock

