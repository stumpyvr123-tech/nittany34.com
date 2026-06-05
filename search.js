// 1. Your customized page database
const pages = [
    { title: "Home", url: "index.html" },
    { title: "About", url: "aboutme.html" },
    { title: "Memepage", url: "memepage.html" },
    { title: "Credits", url: "documentation/credits" } // update extension if needed (e.g. credits.html)
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsList = document.getElementById("searchResults");

// 2. Core function to perform the search
function runSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    // Clear old links from the screen
    resultsList.innerHTML = "";

    // Stop if the user clicks search with an empty box
    if (query === "") {
        resultsList.innerHTML = "<li>Please type something to search.</li>";
        return;
    }

    // 3. Filter pages that contain the searched letters
    const matches = pages.filter(page => 
        page.title.toLowerCase().includes(query)
    );

    // 4. Render results to the screen
    if (matches.length === 0) {
        resultsList.innerHTML = "<li>No pages found matching that keyword.</li>";
    } else {
        matches.forEach(page => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${page.url}">${page.title} Page &rarr;</a>`;
            resultsList.appendChild(li);
        });
    }
}

// ACTION 1: Run search when clicking the physical button
searchButton.addEventListener("click", runSearch);

// ACTION 2: Run search instantly while typing (keeps instant search active)
searchInput.addEventListener("input", runSearch);

// ACTION 3: Run search if the user hits the "Enter" key inside the input box
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        runSearch();
    }
});

