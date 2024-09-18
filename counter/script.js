// let count = 0;

// const value = document.querySelector("#value");
// const button = document.querySelectorAll(".btn");

// button.forEach(function (btn) {
// 	btn.addEventListener("click", function (e) {
// 		const styles = e.currentTarget.classList;

// 		if (styles.contains("decrease")) {
// 			count--;
// 		} else if (styles.contains("increase")) {
// 			count++;
// 		} else {
// 			count = 0;
// 		}

// 		if (count < 0) {
// 			value.style.color = "red";
// 		} else if (count > 0) {
// 			value.style.color = "green";
// 		} else {
// 			value.style.color = "#222";
// 		}

// 		value.textContent = count;
// 	});
// });

const result = document.getElementById("value");
const clickBtn = document.querySelectorAll(".btn");

let count = 0;

clickBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const styles = e.target.classList;

		if (styles.contains("decrease")) {
			count--;
		} else if (styles.contains("increase")) {
			count++;
		} else {
			count = 0;
		}

		if (count > 0) {
			result.style.color = "green";
		} else if (count === 0) {
			result.style.color = "";
		} else {
			result.style.color = "red";
		}

		return (result.textContent = count);
	});
});
