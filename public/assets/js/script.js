// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  // Remove active class from nav links
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.remove("active");
  });

  // Show selected page
  document.getElementById(pageId).classList.add("active");

  // Highlight active nav link
  document.getElementById("nav-" + pageId).classList.add("active");
}

// Default page on load
showPage("home");