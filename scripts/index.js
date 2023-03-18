const incCount = () => {
  const count = document.getElementById("count");

  count.textContent = parseInt(count.textContent) + 1;
};
const decCount = () => {
  const count = document.getElementById("count");

  count.textContent = parseInt(count.textContent) - 1;
};
const resetCount = () => {
  const count = document.getElementById("count");
  count.textContent = 0;
};

const incBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const decBtn = document.getElementById("sub");
incBtn.addEventListener("click", incCount);
resetBtn.addEventListener("click", resetCount);
decBtn.addEventListener("click", decCount);
