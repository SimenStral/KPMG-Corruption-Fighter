document.addEventListener("DOMContentLoaded", function () {
  var users = JSON.parse(localStorage.getItem("users")) || [];

  function saveUsersToLocalStorage(usersArray) {
    localStorage.setItem("users", JSON.stringify(usersArray));
  }

  if (users.length === 0) {
    users.push(
      { username: "OlaNordmann", password: "1234" },
      { username: "ADMIN", password: "4321" }
    );
    saveUsersToLocalStorage(users);
  }

  function validateUser(username, password) {
    return users.some(
      (user) => user.username === username && user.password === password
    );
  }

  var registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var birthdate = document.getElementById("birthdate").value;
      var address = document.getElementById("address").value;
      var phone = document.getElementById("phone").value;
      var password = document.getElementById("password").value;

      if (
        [name, email, birthdate, address, phone, password].some(
          (field) => field.trim() === ""
        )
      ) {
        alert("Please fill out all fields.");
        return;
      }

      var newUser = { username: name, password: password };
      users.push(newUser);
      saveUsersToLocalStorage(users);

      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    });
  }

  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if (validateUser(username, password)) {
        window.location.href = "../pages/Oversikt.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  }

  var registerButton = document.getElementById("registerButton");
  if (registerButton) {
    registerButton.addEventListener("click", function () {
      window.location.href = "newUser.html";
    });
  }

  var loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  }

  document
    .getElementById("account-icon")
    .addEventListener("click", function () {
      var menu = document.getElementById("account-menu");
      menu.classList.toggle("show");
    });

  document.addEventListener("click", function (event) {
    var menu = document.getElementById("account-menu");
    var icon = document.getElementById("account-icon");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove("show");
    }
  });

  fetch("../data/countries.json")
    .then((response) => response.json())
    .then((data) => {
      const datalist = document.getElementById("countries");
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country;
        datalist.appendChild(option);
      });
    })
    .catch((error) => console.error("Error loading countries:", error));
});

document.querySelectorAll("body *").forEach(function (node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    node.childNodes.forEach(function (child) {
      if (child.nodeType === Node.TEXT_NODE && child.nodeValue.includes("*")) {
        const html = child.nodeValue.replace(
          /\*/g,
          '<span class="red">*</span>'
        );
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        while (tempDiv.firstChild) {
          node.insertBefore(tempDiv.firstChild, child);
        }
        node.removeChild(child);
      }
    });
  }
});
