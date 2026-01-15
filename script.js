function leaveFeedback() {
  alert("Feedback form coming soon!");
}

function leaveFeedback() {
  alert("Feedback form coming soon!");
}

function goToScanner() {
  window.location.href = "Scanner.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("tourFrame");
  const buttons = document.querySelectorAll(".tour-buttons .btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const newUrl = button.getAttribute("data-url");

      // Update iframe source
      iframe.setAttribute("src", newUrl);

      // Update active button styling
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

