const projectWrapper = document.querySelector("#works-wrapper");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");
const modalContent = document.querySelector("#modal-content");

closeModal.addEventListener("click", () => modal.classList.add("hidden"));

const projects = [
  {
    id: 1,
    name: "Tonic",
    company: "Canopy",
    position: "Back End Dev",
    year: "2015",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featuredImage: "./images/1st img.png",
    technologies: ["html", "css", "javaScript"],
    liveVersion: "https://fauziyahzeeyah.github.io/port-folio-mobile/",
    source: "https://github.com/fauziyahzeeyah/port-folio-mobile",
  },
  {
    id: 2,
    name: "Multi-Post Stories",
    company: "Canopy",
    position: "Back End Dev",
    year: "2015",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    Image: "./images/2nd img.png",
    technologies: ["html", "css", "javaScript"],
    liveVersion: "https://fauziyahzeeyah.github.io/port-folio-mobile/",
    source: "https://github.com/fauziyahzeeyah/port-folio-mobile",
  },
  {
    id: 3,
    name: "Tonic",
    company: "Canopy",
    position: "Back End Dev",
    year: "2015",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    Image: "./images/3rd img.png",
    technologies: ["html", "css", "javaScript"],
    liveVersion: "https://fauziyahzeeyah.github.io/port-folio-mobile/",
    source: "https://github.com/fauziyahzeeyah/port-folio-mobile",
  },
  {
    id: 4,
    name: "Multi-Post Stories",
    company: "Canopy",
    position: "Back End Dev",
    year: "2015",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    Image: "./images/4th img.png" ,
    technologies: ["html", "css", "javaScript"],
    liveVersion: "https://fauziyahzeeyah.github.io/port-folio-mobile/",
    source: "https://github.com/fauziyahzeeyah/port-folio-mobile",
  },
];

projects.forEach((project) => {
  const article = document.createElement("article");
  article.classList.add("work-card");

  function concatenateTechnologies(acc, cur) {
    acc += `<li class="tag">${cur}</li>`;
    return acc;
  }

  const technologies = project.technologies.reduce(concatenateTechnologies, "");
  const buttonId = `see-project-${project.id}`;

  article.innerHTML = `
  <div class="work-card_picture">
    <img src="./images/desktop 1.png${project.Image}" alt="Tonic" />
  </div>
  <div class="work-card_elements">
    <h3 class="work-card_title">${project.name}</h3>
    <div class="work-card_specs">
      <div class="specs_client">${project.company}</div>
      <div class="dot"></div>
      <div class="specs_role">${project.position}</div>
      <div class="dot"></div>
      <div class="specs_year">${project.year}</div>
    </div>
    <p class="work-card_description">${project.shortDescription}</p>
    <ul class="work-card_techs">
      ${technologies}
    </ul>
    <button class="work-card_button" id="${buttonId}">See Project</button>
  </div>
  `;

  projectWrapper.appendChild(article);

  const projectButton = document.querySelector(`#${buttonId}`);

  projectButton.addEventListener("click", () => {
    modalContent.innerHTML = `
      <h3 class="work-card_title">${project.name}</h3>

      <div class="work-card_specs">
        <div class="specs_client">${project.company}</div>
        <div class="dot"></div>
        <div class="specs_role">${project.position}</div>
        <div class="dot"></div>
        <div class="specs_year">${project.year}</div>
      </div>

      <div class="work-card_picture">
        <img src="./images/desktop 2.png${project.featuredImage}" alt="Multi-Post stories" />
      </div>

      <div class="modal_description">

        <p class="work-card_description">
          ${project.description}
        </p>

        <div class="modal__footer">

          <ul class="work-card_techs">
            ${technologies}
          </ul>

          <div class="work-card_bar"></div>
          <div class="modal__footer__buttons">
            <button class="work-card_button" onClick="location.href='${project.liveVersion}'">
              See live
              <i class="fa-regular fa-arrow-up-right-from-square" alt="live-version icon"></i>
            </button>
            <button class="work-card_button" onClick="location.href='${project.source}'">
              See Source
              <img src="./images/github.svg" alt=github-icon>
            </button>
          </div>

        </div>

      </div>
    `;
    modal.classList.remove("hidden");
  });
});
