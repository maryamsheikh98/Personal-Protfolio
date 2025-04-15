const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

function showMoreInfo() {
  const moreInfo = document.getElementById("additional-info");
  const learnMoreBtn = document.querySelector(".learn-more-btn");

  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    learnMoreBtn.textContent = "Show Less";
  } else {
    moreInfo.classList.add("hidden");
    learnMoreBtn.textContent = "Learn More";
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("!w-[95%]");
        if (entry.target.classList.contains("fill-css"))
          entry.target.classList.add("!w-[90%]");
        if (entry.target.classList.contains("fill-js"))
          entry.target.classList.add("!w-[85%]");
        if (entry.target.classList.contains("fill-react"))
          entry.target.classList.add("!w-[87%]");
        if (entry.target.classList.contains("fill-git"))
          entry.target.classList.add("!w-[70%]");
        if (entry.target.classList.contains("fill-figma"))
          entry.target.classList.add("!w-[80%]");
      }
    });
  },
  { threshold: 0.5 }
);

document
  .querySelectorAll(
    ".fill-html, .fill-css, .fill-js, .fill-react, .fill-git, .fill-figma"
  )
  .forEach((el) => observer.observe(el));
