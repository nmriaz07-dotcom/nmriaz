// script.js

// Show a styled welcome banner instead of alert
window.addEventListener("load", () => {
  const banner = document.createElement("div");
  banner.textContent = "Welcome to the portfolio of Nur Mohammad Riaz!";
  banner.className = "welcome-banner";
  document.body.prepend(banner);

  setTimeout(() => banner.remove(), 4000); // auto-hide after 4s
});

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight active section in nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌗 Toggle Theme";
  toggleBtn.className = "theme-toggle";
  document.body.prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Button text পরিবর্তন হবে
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});

toggleBtn.addEventListener("click", () => { document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// On load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}


// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑ Top";
scrollBtn.className = "scroll-top";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Typing effect for headline
const headline = document.querySelector("h1");
const text = headline.textContent;
headline.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    headline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Add a search filter for writings
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.createElement("input");
  searchBox.placeholder = "Search writings...";
  document.querySelector("h2:nth-of-type(4)").after(searchBox);

  searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    document.querySelectorAll("ol li").forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none";
    });
  });
});
const writingSection = document.getElementById("writing");
writingSection.prepend(searchBox);

document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});




