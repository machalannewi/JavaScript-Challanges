const expand_btn = document.querySelector(".expand-btn");

expand_btn.addEventListener("click", () => {
	document.body.classList.toggle("collapsed");
});

// Found out all these codes are not necessary
// const allLinks = document.querySelectorAll(".sidebar-links a");

// // allLinks.forEach((elem) => {
// // 	elem.addEventListener("click", function () {
// // 		if (elem > 0) {
// // 			elem.classList.add("active");
// // 		} else {
// // 			elem.classList.remove("active");
// // 		}
// // 		// const hrefLinkClick = elem.href;

// // 		// allLinks.forEach((link) => {
// // 		// 	if (link.href === hrefLinkClick) {
// // 		// 		link.classList.add("active");
// // 		// 	} else {
// // 		// 		link.classList.remove("active");
// // 		// 	}
// // 		// });
// // 	});
// // });

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
	document.body.classList.remove("collapsed");
});
