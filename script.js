"use strict";

// GLOBAL VARIABLES
let newNotNum = 0;

// DOM VARIABLES
const button = document.querySelector("button");
const gridItemEl = document.querySelectorAll(".grid-cols-2");
const readBtn = document.querySelector("button");
const notNum = document.querySelector(".notification-num");
const newNotCircle = document.querySelectorAll(".circle");

// FUNCTIONS
const notificationNumDisplay = function () {
	gridItemEl.forEach((el) => {
		if (el.classList.contains("new-notification")) {
			newNotNum++;
		}
	});
	notNum.textContent = newNotNum;
};
notificationNumDisplay();

const removeCircle = function () {
	newNotCircle.forEach((el) => (el.style.display = "none"));
};

const markAllRead = function () {
	for (let i = 0; i < gridItemEl.length; i++) {
		if (gridItemEl[i].classList.contains("new-notification")) {
			gridItemEl[i].classList.remove("new-notification");
		}

		removeCircle();
		newNotNum = 0;
		notificationNumDisplay();
	}
};

// EVENT LISTENERS
readBtn.addEventListener("click", markAllRead);
