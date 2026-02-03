const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  updateButtonState();
});

function updateButtonState() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  toggleButton.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode");
  toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
}

// Initialize on load
updateButtonState();

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

sections.forEach(section => observer.observe(section));
