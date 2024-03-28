// variables

const searchBar = document.getElementById("searchBar")
const searchButton = document.getElementById("searchButton")


// Data structure to store pro players information
const proPlayers = [
    { name: "Prezay", title: "Prezay", htmlPage: "prezay.html" },
    { name: "Ottr", title: "Ottr", htmlPage: "ottr.html" },
    { name: "JatsFPS", title: "JatsFPS", htmlPage: "jats.html"},
    { name: "Shawk", title: "Shawk", htmlPage: "shawk.html"},
    { name: "Reave", title: "Reave", htmlPage: "reave.html"},
    { name: "Lyr1c", title: "Lyr1c", htmlPage: "lyric.html"},
    { name: "HUGOwolfy", title: "HUGOwolfy", htmlPage: "hugo.html"},
    { name: "NaturalPulse", title: "Natural Pulse", htmlPage: "naturalpulse.html"},
    { name: "Eidorian", title: "Eidorian", htmlPage: "eidorian.html"},
    


];

// Function to perform search
function searchPlayers(query) {
    query = query.toLowerCase();
    return proPlayers.filter(player => 
        player.name.toLowerCase().includes(query) || 
        player.title.toLowerCase().includes(query)
    );
}

// Function to display search results
function displayResults(results) {
    const resultContainer = document.getElementById("results");
    resultContainer.innerHTML = ""; // Clear previous results
    if (results.length === 0) {
        resultContainer.innerHTML = "No results found.";
    } else {
        results.forEach(player => {
            const playerElement = document.createElement("div");
            playerElement.innerHTML = `<h3><a href="${player.htmlPage}">${player.title}</a></h3>`;
            resultContainer.appendChild(playerElement);
        });
    }
}

// Event listener for search button
searchButton.addEventListener("click", () => {
    const query = searchBar.value;
    const results = searchPlayers(query);
    displayResults(results);
});

// Function to hide all elements except the search results
function hideOtherElements() {
    document.querySelectorAll('h1, h2, img, #searchBar, #searchButton').forEach(element => {
        element.style.display = 'none';
    });
}

// Event listener for search button
searchButton.addEventListener("click", () => {
    const query = searchBar.value;
    const results = searchPlayers(query);
    hideOtherElements(); // Hide other elements
    displayResults(results);
});
