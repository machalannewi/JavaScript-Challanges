const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calculate = document.getElementById("calculate");
const total = document.getElementById("total");

calculate.addEventListener("click", () => {
	const billValue = billInput.value;
	const tipValue = tipInput.value;
	const totalValue = billValue * (1 + tipValue / 100);
	total.innerText = totalValue.toFixed(2);
});
