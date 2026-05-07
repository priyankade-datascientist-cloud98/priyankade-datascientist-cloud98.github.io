const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#4f46e5";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}
const roles = [
  "Full Stack Data Analyst",
  "ML Engineer",
  "Data Scientist",
  "Business Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typedText = document.getElementById("typed-role");

function typeEffect() {

  if (!typedText) return; // safety check

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typedText.textContent = currentRole.substring(0, charIndex++);
    
    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typedText.textContent = currentRole.substring(0, charIndex--);
    
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 40 : 80);
}

window.onload = typeEffect;



const toggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// details botton
function openModal(title, image, desc, techArray, github, presentation) {

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = image;
    document.getElementById("modal-desc").innerText = desc;

    let techContainer = document.getElementById("modal-tech");
    techContainer.innerHTML = "";

    techArray.forEach(t => {
        let span = document.createElement("span");
        span.innerText = t;
        techContainer.appendChild(span);
    });

    document.getElementById("modal-github").href = github;
    document.getElementById("modal-presentation").href = presentation;

    document.getElementById("projectModal").style.display = "flex";
}

/* CLOSE FUNCTION */
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

/* CLICK OUTSIDE TO CLOSE */
window.onclick = function(e) {
    let modal = document.getElementById("projectModal");
    if (e.target === modal) {
        closeModal();
    }
}

/* ESC KEY CLOSE */
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModal();
    }
});


// js for project selected button
// document.addEventListener("DOMContentLoaded", function () {

//   let selectedIndustries = [];

//   const buttons = document.querySelectorAll(".filter-btn");
//   const cards = document.querySelectorAll(".project-card");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {

//     const value = (button.dataset.filter || "").toLowerCase();

//     // 🎯 HANDLE "ALL" BUTTON
//     if (value === "all") {

//       selectedIndustries = [];

//       // remove active from all buttons
//       buttons.forEach(btn => btn.classList.remove("active"));

//       // activate only ALL
//       button.classList.add("active");

//       filterProjects();
//       return;
//     }

//     // 🎯 IF ANY OTHER BUTTON CLICKED → REMOVE "ALL"
//     const allBtn = document.querySelector('[data-filter="all"]');
//     if (allBtn) allBtn.classList.remove("active");

//     // toggle active class
//     button.classList.toggle("active");

//     // update selected array
//     if (selectedIndustries.includes(value)) {
//       selectedIndustries = selectedIndustries.filter(item => item !== value);
//     } else {
//       selectedIndustries.push(value);
//     }

//     filterProjects();
//   });
// });

//   function filterProjects() {

//     cards.forEach(card => {

//       // ✅ SAFE READ (prevents crash)
//       const data = card.dataset.industry;

//       // If no data-industry → show card (or change to "none" if needed)
//       if (!data) {
//         card.style.display = "block";
//         return;
//       }

//       const industries = data.toLowerCase().split(" ");

//       // If no filter selected → show all
//       if (selectedIndustries.length === 0) {
//         card.style.display = "block";
//         return;
//       }

//       // Match ANY selected industry
//       const match = selectedIndustries.some(ind =>
//         industries.includes(ind)
//       );

//       card.style.display = match ? "block" : "none";

//     });

//   }

// });
document.addEventListener("DOMContentLoaded", function () {

  let selectedIndustry = "all"; // default

  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

 buttons.forEach(button => {
  button.addEventListener("click", () => {

    const value = (button.dataset.filter || "").toLowerCase();

    // ❌ REMOVE active from ALL buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // ✅ ADD active ONLY to clicked button
    button.classList.add("active");

    // ✅ SET single selected value
    selectedIndustry = value;

    filterProjects();
  });
});

  function filterProjects() {

    cards.forEach(card => {

      const data = card.dataset.industry;

      // safety check
      if (!data) {
        card.style.display = "block";
        return;
      }

      const industries = data.toLowerCase().split(" ");

      // 🔥 ALL = show everything
      if (selectedIndustry === "all") {
        card.style.display = "block";
        return;
      }

      // 🔥 match single selected industry
      const match = industries.includes(selectedIndustry);

      card.style.display = match ? "block" : "none";

    });

  }

});
// autohighlight page index.html
document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

});
