// Function to calculate remaining investment points
function calculateRemainingPoints() {
    // Get input values
    var lightWeapon = parseInt(document.getElementById("lightWeaponInput").value) || 0;
    var mediumWeapon = parseInt(document.getElementById("mediumWeaponInput").value) || 0;
    var heavyWeapon = parseInt(document.getElementById("heavyWeaponInput").value) || 0;
    var strength = parseInt(document.getElementById("strengthInput").value) || 0;
    var fortitude = parseInt(document.getElementById("fortitudeInput").value) || 0;
    var agility = parseInt(document.getElementById("agilityInput").value) || 0;
    var intelligence = parseInt(document.getElementById("intelligenceInput").value) || 0;
    var willpower = parseInt(document.getElementById("willpowerInput").value) || 0;
    var charisma = parseInt(document.getElementById("charismaInput").value) || 0;

    // Calculate total points used
    var totalPointsUsed = lightWeapon + mediumWeapon + heavyWeapon + strength + fortitude + agility + intelligence + willpower + charisma;

    // Calculate remaining points
    var remainingPoints = 327 - totalPointsUsed;

    // Update display
    document.getElementById("remainingPoints").textContent = remainingPoints + " Investment Points Remain";
}

// Attach event listeners to input elements
var inputElements = document.querySelectorAll("input[type='number']");
inputElements.forEach(function(inputElement) {
    inputElement.addEventListener("input", calculateRemainingPoints);
});

// Initial calculation
calculateRemainingPoints();
