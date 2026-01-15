function leaveFeedback() {
  alert("Feedback form coming soon!");
}

function leaveFeedback() {
  alert("Feedback form coming soon!");
}

function goToScanner() {
  window.location.href = "Scanner.html";
}

function changeTour(button, url) {
  // Change iframe source
  document.getElementById("tourFrame").src = url;

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".tour-btn");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Set active button
  button.classList.add("active");
}

