// local reviews data
const reviews = [
	{
		id: 1,
		name: "Daniel Okeke",
		job: "Front-end Developer",
		img: "assets/IMG-20240905-WA0018.jpg",
		text: "A front-end developer creates the visual and interactive elements of websites and applications, translating design concepts into functional code using HTML, CSS, and JavaScript. They ensure a seamless, responsive user experience by working closely with designers and back-end developers.",
	},
	{
		id: 2,
		name: "Onwukwe Kelechi",
		job: "web designer",
		img: "assets/IMG-20240905-WA0021.jpg",
		text: "A web designer focuses on the visual and aesthetic aspects of websites, creating layouts, color schemes, and graphic elements to ensure an engaging and cohesive user experience. They use design tools and principles to translate client needs and brand identity into visually appealing, user-friendly interfaces.",
	},
	{
		id: 3,
		name: "Chinwuba Francis",
		job: "Web/App Developer",
		img: "assets/IMG-20240905-WA0020.jpg",
		text: "A web/app developer builds and maintains websites and applications, turning designs and ideas into functional, interactive digital products. They work with various programming languages and frameworks to handle both the front-end (user interface) and back-end (server-side logic) aspects, ensuring the application is efficient, secure, and user-friendly.",
	},
	{
		id: 4,
		name: "Afiocha Cosmas",
		job: "Back-end Developer",
		img: "assets/IMG-20240905-WA0019.jpg",
		text: "A back-end developer focuses on the server-side of web applications, managing and implementing the core functionality and logic that powers a website or application. They work with databases, server scripts, and APIs to ensure data is processed and delivered efficiently, creating a seamless experience for users while supporting the front-end interface.",
	},
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
// window.addEventListener("DOMContentLoaded", function () {
// 	const item = reviews[currentItem];
// 	img.src = item.img;
// 	author.textContent = item.name;
// 	job.textContent = item.job;
// 	info.textContent = item.text;
// });

// show person based on item
function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
	console.log("hello");

	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
});

showPerson(currentItem);
