export function homePage(contentDiv) {
    contentDiv.textContent = "";

    const emptyDiv = document.createElement("div");
    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content")
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main")

    const heroHeading = document.createElement("h1");
    heroHeading.innerHTML = "Where Fire.</br>Meets Flavor.";

    const heroParagraph = document.createElement("p")
    heroParagraph.textContent = "A refined steakhouse in the heart of Olympus, where exceptional cuts, open fireand timeless hospitalitycome together."

    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("buttons");
    const aboutBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    aboutBtn.classList.add("aboutBtn")
    menuBtn.classList.add("menuBtn")
    aboutBtn.textContent = "Go to about"
    menuBtn.textContent = "Explore menu"
    buttonDiv.appendChild(aboutBtn)
    buttonDiv.appendChild(menuBtn)

    mainContentDiv.appendChild(heroHeading)
    mainContentDiv.appendChild(heroParagraph)
    mainContentDiv.appendChild(buttonDiv)

    mainDiv.appendChild(emptyDiv)
    mainDiv.appendChild(mainContentDiv)

    contentDiv.append(mainDiv)
}