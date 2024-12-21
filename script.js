document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsButton = document.getElementById("toggle-skills");
    var skillsList = document.getElementById("skills-list");
    toggleSkillsButton.addEventListener("click", function () {
        skillsList.style.display = skillsList.style.display === "block" ? "none" : "block";
    });
});
