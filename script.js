const btn = document.getElementById("DarkModeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Light Mode";   
    } else {
        btn.textContent = "Dark Mode";    
    }
});
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
