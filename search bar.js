document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.querySelector(".search-bar");
    const gameNameDivs = document.querySelectorAll(".game-name-div");

    searchBar.addEventListener("input", function(event) {
        const searchTerm = event.target.value.toLowerCase();

        gameNameDivs.forEach(function(gameNameDiv) {
            const gameName = gameNameDiv.textContent.toLowerCase();
            if (gameName.includes(searchTerm)) {
                gameNameDiv.parentNode.style.display = "block";
            } else {
                gameNameDiv.parentNode.style.display = "none";
            }
        });
    });
});
