// Hamburger Menu

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }

});

// Close Menu after Clicking a Navigation Link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        hamburger.textContent = "☰";

    });

});

// Team Filter

const teamFilter = document.getElementById("teamFilter");

const matchCards = document.querySelectorAll(".match-card");

const noMatches = document.getElementById("noMatches");

teamFilter.addEventListener("change", function () {

    const selectedTeam = teamFilter.value;

    let visibleCount = 0;

    matchCards.forEach(function (card) {

        const teams = card.dataset.team.split(" ");

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {

            card.style.display = "";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    if (visibleCount === 0) {

        noMatches.hidden = false;

    } else {

        noMatches.hidden = true;

    }

});

// Grid and List View Toggle

const viewToggle = document.getElementById("viewToggle");

const matchContainer = document.getElementById("matchContainer");

viewToggle.addEventListener("click", function () {

    if (matchContainer.classList.contains("grid-view")) {

        matchContainer.classList.remove("grid-view");
        matchContainer.classList.add("list-view");

        viewToggle.textContent = "Switch to Grid View";

    } else {

        matchContainer.classList.remove("list-view");
        matchContainer.classList.add("grid-view");

        viewToggle.textContent = "Switch to List View";

    }

});