import "./style.css"
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

import homeBg from "./images/home-bg-image.jpg"
import aboutBg from "./images/about-bg-image.png"

const contentDiv = document.querySelector("#content");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
body.style.backgroundImage = `url(${homeBg})`

nav.addEventListener("click", (e) => {
	if (e.target.id === "home") {
		body.style.backgroundImage = `url(${homeBg})`
		homePage(contentDiv);
	} else if (e.target.id === "menu") {
		body.style.backgroundImage = "none"
		menuPage(contentDiv);
	} else if (e.target.id === "about") {
		body.style.backgroundImage = `url(${aboutBg})`
		aboutPage(contentDiv);
	}
})

homePage(contentDiv);


