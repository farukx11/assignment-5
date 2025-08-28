let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const callHistoryEl = document.getElementById("callHistory");

document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCountEl.textContent = copyCount;
    alert(`Copied number: ${number}`);
  });
});

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const number = btn.dataset.number;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    alert(`Calling ${name}: ${number}`);
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    // Add to call history
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();
    li.textContent = `${name} - ${number} (${time})`;
    callHistoryEl.appendChild(li);
  });
});

document.getElementById("clearHistory").addEventListener("click", () => {
  callHistoryEl.innerHTML = "";
});
