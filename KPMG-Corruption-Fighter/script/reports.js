// Handle the toggling of form data categories
function toggleContent(id) {
  const sections = document.querySelectorAll(".toggle-content");
  sections.forEach((section) => {
    section.style.display = "none";
    section.innerHTML = "";
  });

  const content = document.getElementById(`${id}-content`);
  const contentHtml = getContentHtml(id);

  content.style.display = "block";
  content.innerHTML = contentHtml;
}

// Show form data
function getContentHtml(id) {
  const currentPage = window.location.pathname;
  const pages = {
    "/pages/eierinteresser.html": {
      Nåværende: `<div class="oversikt-item">
              <p>Equinor ASA</p>
              <p>Styrets leder</p>
              <p>Sist oppdatert: 2024-05-30</p>
              <div class="status">Under behandling</div>
              <a href="#" class="link">Gå til sak</a>
              <a href="#" class="link">Endre</a>
              <i class="fas fa-check-circle yellow-check"></i>
            </div>
            <div class="oversikt-item">
              <p>Equinor ASA</p>
              <p>Styrets leder</p>
              <p>Sist oppdatert: 2024-05-30</p>
              <div class="status">Under behandling</div>
              <a href="#" class="link">Gå til sak</a>
              <a href="#" class="link">Endre</a>
              <i class="fas fa-check-circle yellow-check"></i>
            </div>`,
      Tidligere: `<div class="oversikt-item"><p>Du har ingen tidligere eierinteresser.</p></div>`,
      Søknader: `<div class="oversikt-item"><p>Du har ingen søknader.</p></div>`,
    },
    "/pages/roles.html": {
      Nåværende: `<div class="oversikt-item">
              <p>Equinor ASA</p>
              <p>Styrets leder</p>
              <p>Sist oppdatert: 2024-05-30</p>
              <div class="status">Under behandling</div>
              <a href="#" class="link">Gå til sak</a>
              <a href="#" class="link">Endre</a>
              <i class="fas fa-check-circle green-check"></i>
            </div>`,
      Tidligere: `<div class="oversikt-item">
              <p>Norwegian Airlines</p>
              <p>Administrerende direktør</p>
              <p>Sist oppdatert: 2024-06-05</p>
              <div class="status">Ferdigbehandlet</div>
              <a href="#" class="link">Gå til sak</a>
              <a href="#" class="link">Endre</a>
              <i class="fas fa-check-circle green-check"></i>
            </div>
            <div class="oversikt-item">
              <p>Norsk Hydro</p>
              <p>Styremedlem</p>
              <p>Sist oppdatert: 2024-06-02</p>
              <div class="status">Til vurdering</div>
              <a href="#" class="link">Gå til sak</a>
              <a href="#" class="link">Endre</a>
              <i class="fas fa-check-circle green-check"></i>
            </div>`,
      Søknader: `<div class="oversikt-item"><p>Ingen tidligere interesser.</p></div>`,
    },
    "/pages/Relasjoner.html": {
      Nåværende: `<div class="oversikt-item">
                <p>Jens Nordmann</p>
                <p>1980-05-30</p>
                <p>Forelder</p>
                <a href="#" class="link">Gå til sak</a>
                <a href="#" class="link">Endre</a>
                <i class="fas fa-check-circle green-check"></i>
              </div>`,
      Tidligere: `<div class="oversikt-item"><p>Ingen tidligere interesser.</p></div>`,
      Søknader: `<div class="oversikt-item"><p>Ingen søknader.</p></div>`,
    },
    "/pages/Annet.html": {
      Nåværende: `<div class="oversikt-item"><p>Ingen  interesser.</p></div>`,
      Tidligere: `<div class="oversikt-item"><p>Ingen tidligere interesser.</p></div>`,
      Søknader: `<div class="oversikt-item"><p>Ingen tidligere interesser.</p></div>`,
    },
  };

  return (pages[currentPage] && pages[currentPage][id]) || "";
}

// Add event listeners for the reports
document.querySelectorAll(".reports h2").forEach((heading) => {
  heading.addEventListener("click", function () {
    const id = this.parentNode.getAttribute("data-id");
    toggleContent(id);
    toggleActiveClass(this);
  });
});

// Function to toggle active button
function toggleActiveClass(clickedElement) {
  const buttons = document.querySelectorAll(".reports h2");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  clickedElement.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const initialBoxId = "Nåværende";
  toggleContent(initialBoxId);
  const initialHeading = document.querySelector(
    `.reports h2[data-id='${initialBoxId}']`
  );
  if (initialHeading) {
    toggleActiveClass(initialHeading);
  }
});
