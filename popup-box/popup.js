document.addEventListener("DOMContentLoaded", () => {
	const subscribeBtn = document.getElementById("subscribe-btn");
	const popUp = document.getElementById("popup");
	const closeBtn = document.getElementById("close-btn");
	const subscribe = document.getElementById("subscribe");

	// popUp.style.display = "none";

	subscribeBtn.addEventListener("click", () => {
		popUp.style.display = "block";
		subscribe.style.display = "none";
		popUp.style.backgroundColor = "white"; // Change background color if needed
	});

	closeBtn.addEventListener("click", () => {
		popUp.style.display = "none";
		subscribe.style.display = "block";
	});
});
