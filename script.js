// Mobile menu overlay
const mobileNav = document.querySelector("#mobile-menu-navigation");
const mobileNavMenu = document.querySelector(".overlay-content");
const closeBtn = document.querySelector(".close-btn");
const hamburger = document.querySelector(".menu-icon");
const linkIds = Array.from(document.querySelectorAll(".page-link"));

hamburger.addEventListener("click", () => {
  mobileNavMenu.style.display = "block";
  mobileNav.style.width = "100%";
});

closeBtn.addEventListener("click", () => {
  mobileNavMenu.style.display = "none";
  mobileNav.style.width = "0%";
});

linkIds.forEach((linkId) =>
  linkId.addEventListener("click", () => {
    mobileNavMenu.style.display = "none";
    mobileNav.style.width = "0%";
  })
);

// End of mobile menu overlay

// Project popup window
const docBody = document.querySelector(".project-popup-window");
// const projectButtons = Array.from(document.querySelectorAll(".works"));
const wrapper = document.getElementById("wrapper");
const body = document.getElementById("page-body");
const projects = [
  {
    name: "g7hjk",
    image: "pics/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://michaelmunavu83.github.io/portfolio-template/",
    source: "https://github.com/MICHAELMUNAVU83",
  },
  {
    name: "Keeping tr",
    image: "pics/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://michaelmunavu83.github.io/portfolio-template/",
    source: "https://github.com/MICHAELMUNAVU83",
  },
  {
    name: "Keeping track of hundreds of co",
    image: "pics/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://michaelmunavu83.github.io/portfolio-template/",
    source: "https://github.com/MICHAELMUNAVU83",
  },
  {
    name: "Keeping track of hundreds of cos",
    image: "pics/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://michaelmunavu83.github.io/portfolio-template/",
    source: "https://github.com/MICHAELMUNAVU83",
  },
  {
    name: "Keeping track of hundreds of compone",
    image: "pics/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum i simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://michaelmunavu83.github.io/portfolio-template/",
    source: "https://github.com/MICHAELMUNAVU83",
  },
  {
    name: "Keeping track of hundreds of com",
    image: "pics/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://michaelmunavu83.github.io/portfolio-template/",
    source: "https://github.com/MICHAELMUNAVU83",
  },
];
const projectCon = [];

const createProject = (projectArray) => {
  for (let project = 0; project < projectArray.length; project += 1) {
    projectCon.push(
      `<div class="pop-up-overlay">
         <span class="close" onclick="closeNav()"><img src="pics/Disabled.svg" alt=""></span>
         <div class="pop-up-overlay-image">
           <img class="pop-up-overlay-image" src="${
             projectArray[project].image
           }" alt="">
         </div>
         <div class="pop-up-overlay-content">
           <div class="buttons-container">
             <ul class="button-items">
               <li><a href="${
                 projectArray[project].live
               }">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></i></a></li>
               <li><a href="${
                 projectArray[project].source
               }">See Source <i class="fa-brands fa-github"></i></a></li>
             </ul>
           </div>
           <h2>${projectArray[project].name}</h2>
           <ul class="lang-tags">
             ${projectArray[project].technologies
               .map((tech) => `<li class="tag">${tech}</li>`)
               .join("")}
           </ul>
           <p>${projectArray[project].description}</p>
         </div>
    </div>
      `
    );
  }
};
createProject(projects);
for (let button = 0; button < projectButtons.length; button += 1) {
  for (let content = 0; content < projectCon.length; content += 1) {
    projectButtons[button].addEventListener("click", () => {
      docBody.innerHTML = projectCon[content];
      wrapper.classList.add("blur");
      body.classList.add("color");
    });
  }
}

function closeNav() {
  docBody.innerHTML = "";
  wrapper.classList.remove("blur");
  body.classList.remove("color");
}
closeNav();
const email = document.getElementById("email");
const form = document.getElementById("contact-form");
const errorMsg = document.getElementById("form-error");

form.addEventListener("submit", (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.style.visibility = "visible";
    setTimeout(() => {
      errorMsg.style.visibility = "hidden";
    }, 5000);
    email.value = email.value.toLowerCase();
  } else {
    errorMsg.style.visibility = "hidden";
  }
});
const contactForm = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const emailAddress = document.querySelector("#email");
const message = document.querySelector("#message");

// Add to local storage function
function dataStorage() {
  const user = {
    userFullName: fullName.value,
    userEmail: emailAddress.value,
    userMessage: message.value,
  };

  localStorage.setItem("userData", JSON.stringify(user));
}

contactForm.addEventListener("focusout", dataStorage);

const userDataObject = JSON.parse(localStorage.getItem("userData"));

fullName.value = userDataObject.userFullName;
emailAddress.value = userDataObject.userEmail;
message.value = userDataObject.userMessage;
