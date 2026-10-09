const menuArr = [
    {
        imageURL: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        steakName: "Ribeye Steak",
        steakDescription: "A rich, juicy cut beautifully marbled for exceptional flavor. Grilled to perfection with a golden sear and served tender in every bite."
    },
    {
        imageURL: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
        steakName: "T-Bone Steak",
        steakDescription: "The best of both worlds, combining tender fillet and flavorful strip steak on the bone. Flame-grilled for a smoky finish and bold steakhouse flavor."
    },
    {
        imageURL: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
        steakName: "Filet Mignon",
        steakDescription: "An exceptionally tender, lean cut prized for its delicate texture and refined flavor. Expertly seared and served with a rich, savory finish."
    },
    {
        imageURL: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
        steakName: "New York Strip",
        steakDescription: "A steakhouse classic with a firm, satisfying bite and robust beef flavor. Char-grilled to lock in its juices and create a beautifully caramelized crust."
    },
    {
        imageURL: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80",
        steakName: "Tomahawk Steak",
        steakDescription: "An impressive, bone-in ribeye served with its signature long rib bone. Generously marbled, deeply flavorful, and perfect for a memorable steakhouse experience."
    },
    {
        imageURL: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
        steakName: "Sirloin Steak",
        steakDescription: "A hearty, flavorful cut offering the perfect balance of tenderness and texture. Grilled over high heat for a smoky char and classic beefy taste."
    }
];

export function menuPage(contentDiv) {
    contentDiv.textContent = "";

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    for (let i = 0; i < menuArr.length; i++) {
        
        const menuItem = document.createElement("div");
        menuItem.classList.add("grid-item");

        menuItem.innerHTML = `
        <img src="${menuArr[i].imageURL}">
        <h2>${menuArr[i].steakName}</h2>
        <p>${menuArr[i].steakDescription}</p>
        `
        menuGrid.appendChild(menuItem)
    }

    menuSection.appendChild(menuHeading);
    menuSection.appendChild(menuGrid);

    contentDiv.append(menuSection)
}