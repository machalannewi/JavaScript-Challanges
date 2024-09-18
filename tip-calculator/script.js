// const billInput = document.getElementById("bill");
// const tipInput = document.getElementById("tip");
// const calculate = document.getElementById("calculate");
// const total = document.getElementById("total");

// calculate.addEventListener("click", () => {
// 	const billValue = billInput.value;
// 	const tipValue = tipInput.value;
// 	const totalValue = billValue * (1 + tipValue / 100);
// 	total.innerText = totalValue.toFixed(2);
// });

const billInput = document.getElementById("bill");
const calculateBtn = document.getElementById("calculate");
const total = document.getElementById("total");
const tipInput = document.getElementById("tip");

calculateBtn.addEventListener("click", () => {
	const billValue = Number(billInput.value);
	const tipValue = Number(tipInput.value) / 100;
	const getPercent = billValue * tipValue;
	const totalResult = billValue + getPercent;
	total.textContent = totalResult.toFixed(2);
});
