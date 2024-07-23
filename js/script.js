document.addEventListener('DOMContentLoaded', (event) => {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    function setTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
        toggleBtn.textContent = theme === "dark-theme" ? "💡" : "🌙";
    }

    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDarkScheme.matches ? "dark-theme" : "light-theme");
    }

    // Toggle theme when button is clicked
    toggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.className;
        setTheme(currentTheme === "dark-theme" ? "light-theme" : "dark-theme");
    });
});
