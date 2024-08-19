const log = document.getElementById("log");
const state = document.getElementById("state");
const startBtn = document.getElementById("start");
const endBtn = document.getElementById("end");

startBtn.addEventListener("click", () => {
      document.addEventListener('keydown', handleDown)
      document.addEventListener('keyup', handleUp)
      startBtn.disabled = true;
      endBtn.disabled = false;

})

endBtn.addEventListener("click", () => {
      document.removeEventListener('keydown', handleUp)
      document.removeEventListener('keyup', handleUp)
      log.textContent = "";
      state.textContent = "";
      startBtn.disabled = false;
      endBtn.disabled = true;
})

function handleDown(e) {
      log.textContent = `key ${e.key} is pressed down`;
      state.textContent = `key is down`;
}
function handleUp(e) {
      log.textContent = `key ${e.key} is pressed up`;
      state.textContent = `key is up`;
}