document.addEventListener("DOMContentLoaded", () => {
	const progressBar = [
		document.getElementById("progress-bar-1"),
		document.getElementById("progress-bar-2"),
		document.getElementById("progress-bar-3"),
	];

	const targetValues = [85, 90, 95];

	const progressText = [
		document.getElementById("percentage-1"),
		document.getElementById("percentage-2"),
		document.getElementById("percentage-3"),
	];

	progressBar.forEach((bar, index) => {
		const targetValue = targetValues[index];
		let currentValue = 0;

		setInterval(() => {
			if (currentValue < targetValue) {
				currentValue++;
				bar.style.width = currentValue + "%";
				progressText[index].textContent = currentValue + "%";
			}
		}, 10);
	});
});
