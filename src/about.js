export function aboutPage(contentDiv) {
    contentDiv.textContent = "";

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");

    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About";

    const aboutParagraph = document.createElement("p")
    aboutHeading.classList.add("about-paragraph");
    aboutParagraph.textContent = "A tradition of fire, flavour and fine hospitality."
    
    const aboutSubtext = document.createElement("p")
    aboutSubtext.classList.add("about-subtext");
    aboutSubtext.textContent = "At ODIN Steakhouse, every detail is crafted  around exception ingredients, open-fire cooking an atmosphere made for unforgetable evenings."

    const reserveBtn = document.createElement("button")
    reserveBtn.classList.add("reserveBtn")
    reserveBtn.textContent = "Reserve a Table";

    aboutSection.appendChild(aboutHeading)
    aboutSection.appendChild(aboutParagraph)
    aboutSection.appendChild(aboutSubtext)
    aboutSection.appendChild(reserveBtn)

    contentDiv.append(aboutSection)
}