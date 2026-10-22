const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("active", item === button));
    const selected = button.dataset.filter;
    projects.forEach(card => {
      const categories = (card.dataset.category || "").split(" ");
      card.hidden = selected !== "all" && !categories.includes(selected);
    });
  });
});

// Project cards open a two-option access dialog: repository or usage/demo path.
const projectModal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#project-modal-title");
const modalDescription = document.querySelector("#project-modal-description");
const repoLink = document.querySelector("#project-repo-link");
const useLink = document.querySelector("#project-use-link");
const modalNote = document.querySelector("#project-modal-note");
let lastProjectTrigger = null;

function openProjectOptions(card) {
  if (!projectModal) return;
  lastProjectTrigger = card;
  modalTitle.textContent = card.dataset.projectTitle || card.querySelector("h3")?.textContent || "Project";
  modalDescription.textContent = card.dataset.useDescription || "Choose how you want to explore this project.";
  const repo = card.dataset.repo || "";
  if (repo) {
    repoLink.href = repo;
    repoLink.hidden = false;
    repoLink.setAttribute("aria-label", `Visit ${modalTitle.textContent} repository`);
  } else {
    repoLink.href = "#";
    repoLink.hidden = true;
  }
  const useUrl = card.dataset.useUrl || repo + "#readme";
  useLink.href = useUrl;
  useLink.target = useUrl.startsWith("mailto:") ? "_self" : "_blank";
  useLink.rel = useUrl.startsWith("mailto:") ? "" : "noopener noreferrer";
  useLink.textContent = "Use / open project";
  const arrow = document.createElement("span");
  arrow.textContent = " ↗";
  useLink.appendChild(arrow);
  modalNote.textContent = repo
    ? "No live demo URL is configured here yet, so Use Project opens the repository's usage guide. If you share a deployed demo URL, this button can launch the live app directly."
    : "No public repository is linked for this academic project. Use this option to request a demo directly.";
  projectModal.hidden = false;
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  projectModal.querySelector(".project-modal-close")?.focus();
}

function closeProjectOptions() {
  if (!projectModal) return;
  projectModal.hidden = true;
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastProjectTrigger?.focus();
}

projects.forEach(card => {
  card.addEventListener("click", event => {
    if (event.target.closest("a, button")) return;
    openProjectOptions(card);
  });
  card.addEventListener("keydown", event => {
    if (event.target !== card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectOptions(card);
    }
  });
});
projectModal?.querySelectorAll("[data-modal-close]").forEach(element => element.addEventListener("click", closeProjectOptions));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && projectModal && !projectModal.hidden) closeProjectOptions();
});


// Contact form: prepare an email without collecting or storing visitor data.
const contactForm = document.querySelector("#contact-form");
const contactService = document.querySelector("#contact-service");
const formStatus = document.querySelector("#form-status");
const contactEmail = "sssharankrishna@gmail.com";

document.querySelectorAll("[data-service-select], [data-service-cta]").forEach(control => {
  control.addEventListener("click", () => {
    const chosen = control.dataset.serviceSelect || control.dataset.serviceCta || "";
    if (contactService) {
      const option = [...contactService.options].find(item => item.value === chosen || item.textContent === chosen);
      if (option) contactService.value = option.value;
    }
  });
});

contactForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const service = String(data.get("service") || "").trim();
  const message = String(data.get("message") || "").trim();
  const subject = `[Portfolio enquiry] ${service}`;
  const body = `Hi Sharan,

My name is ${name}.
My email: ${email}
Enquiry: ${service}

Project details:
${message}

Sent from your portfolio contact form.`;
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (formStatus) formStatus.textContent = "Opening your email app with your message prepared…";
  window.location.href = mailto;
});
