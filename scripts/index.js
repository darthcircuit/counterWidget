const incCount = () => {
  const count = document.getElementById("count");
  count.textContent = parseInt(count.textContent) + 1;
  styleText(count);
};

const decCount = () => {
  const count = document.getElementById("count");
  count.textContent = parseInt(count.textContent) - 1;
  styleText(count);
};
const resetCount = () => {
  const count = document.getElementById("count");
  count.textContent = 0;
  styleText(count);
};

const styleText = (val) => {
  if (val.textContent > 0) {
    val.style.color = "#00FF00";
  } else if (val.textContent < 0) {
    val.style.color = "#FF0000";
  } else {
    val.style.color = "#000000";
  }
};

const incBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const decBtn = document.getElementById("sub");
incBtn.addEventListener("click", incCount);
resetBtn.addEventListener("click", resetCount);
decBtn.addEventListener("click", decCount);
