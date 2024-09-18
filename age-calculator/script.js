// const btnEl = document.getElementById("btn");
// const birthdayEl = document.getElementById("birthday");
// const resultEl = document.getElementById("result");

// function calculateAge() {
// 	const birthdayValue = birthdayEl.value;
// 	if (birthdayValue === "") {
// 		alert("Please enter your birthday");
// 	} else {
// 		const age = getAge(birthdayValue);
// 		resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
// 	}
// }

// function getAge(birthdayValue) {
// 	const currentDate = new Date();
// 	const birthdayDate = new Date(birthdayValue);
// 	let age = currentDate.getFullYear() - birthdayDate.getFullYear();
// 	const month = currentDate.getMonth() - birthdayDate.getMonth();

// 	if (
// 		month < 0 ||
// 		(month === 0 && currentDate.getDate() < birthdayDate.getDate())
// 	) {
// 		age--;
// 	}

// 	return age;
// }

// btnEl.addEventListener("click", calculateAge);

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", () => {
	const birthdayValue = birthdayEl.value;

	if (birthdayValue === "") {
		resultEl.innerText = "Please enter your age";
	}

	const today = new Date();

	const birthDay = new Date(birthdayValue);

	let age = today.getFullYear() - birthDay.getFullYear();
	const monthDifference = today.getMonth() - birthDay.getMonth();

	if (
		monthDifference < 0 ||
		(monthDifference === 0 && today.getDate() < birthDay.getDate())
	) {
		age--;
	}

	return (resultEl.textContent = `Your age is ${age} ${
		age > 1 ? "Years" : "Year"
	} old`);
});
