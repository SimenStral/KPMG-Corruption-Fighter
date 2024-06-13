document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".edit-button button");

  // Function to toggle readonly attribute and pointer events for a specific box
  function toggleEditable(box) {
    const inputFields = box.querySelectorAll("input");
    inputFields.forEach(function (input) {
      input.readOnly = !box.classList.contains("editable"); // Toggle readonly state
      input.style.pointerEvents = box.classList.contains("editable")
        ? "auto"
        : "none"; // Toggle pointer events
    });
  }

  // Function to toggle button text between "Endre" and "Fulfør" for a specific box
  function toggleButtonText(button, box) {
    button.textContent = box.classList.contains("editable")
      ? "Fulfør"
      : "Endre"; // Toggle button text
  }

  // Event listener for edit button click for each box
  editButtons.forEach(function (button) {
    const box = button.closest(".input-box"); // Find the parent box
    button.addEventListener("click", function () {
      box.classList.toggle("editable"); // Toggle editable state for the box
      toggleEditable(box); // Apply updated readonly and pointer events for the box
      toggleButtonText(button, box); // Change button text after applying readonly state for the box
    });
  });

  // Initially apply readonly and pointer events for each box
  document.querySelectorAll(".input-box").forEach(function (box) {
    toggleEditable(box);
    const button = box.querySelector(".edit-button button");
    toggleButtonText(button, box);
  });
});

// Account menu dropdown
document.getElementById("account-icon").addEventListener("click", function () {
  var menu = document.getElementById("account-menu");
  menu.classList.toggle("show");
});
