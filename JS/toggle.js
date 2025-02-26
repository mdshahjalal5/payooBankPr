console.log(`tooggle`);

const cashOutSection = document.getElementById("cash-out-sec");
const addMoneySection = document.getElementById("add-money-sec");
cashOutSection.style.display = "none";
document.getElementById("add-money").addEventListener("click", (e) => {
  console.log(`event`, e);
  addMoneySection.style.display = "block";
  cashOutSection.style.display = "none";
});

document.getElementById("cash-out").addEventListener("click", (e) => {
  console.log(`event`, e);
  addMoneySection.style.display = "none";
  cashOutSection.style.display = "block";
});
