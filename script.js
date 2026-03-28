// script.js

// Auto-scroll image gallery
const scrollContainer = document.querySelector(".image");

if (scrollContainer) {
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 2; // speed of scroll
    if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
      scrollAmount = 0; // reset to start
    }
    scrollContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }, 50); // interval speed
}

// Dynamically update footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Highlight active navigation link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Dark mode toggle
const toggleButton = document.createElement("button");
toggleButton.textContent = "🌙 Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.top = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
toggleButton.style.background = "#4a90e2";
toggleButton.style.color = "#fff";
toggleButton.style.cursor = "pointer";
toggleButton.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark mode styles
const darkModeStyle = document.createElement("style");
darkModeStyle.textContent = `
  body.dark-mode {
    background: #1e1e2f;
    color: #e0e0e0;
  }
  body.dark-mode h1, 
  body.dark-mode h2, 
  body.dark-mode h3 {
    color: #9dc1ff;
  }
  body.dark-mode nav a {
    color: #ddd;
  }
  body.dark-mode nav a.active,
  body.dark-mode nav a:hover {
    background: #7b4397;
    color: #fff;
  }
  body.dark-mode footer {
    background: #2a2a3d;
    color: #aaa;
  }
`;
document.head.appendChild(darkModeStyle);

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when scrolled down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Smooth scroll to top when clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
