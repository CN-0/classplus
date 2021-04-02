let nav = document.querySelector(".nav");
let flicker = document.querySelector(".flicker");
let stats = document.querySelectorAll(".stat");

function flickerText() {
  let words = ["Grow", "Create", "Manage"];
  let word = "";
  let i = 0;
  let j = 0;
  setInterval(function () {
    if (words.includes(word) || word === "") {
      word = "";
      if (i === 2) {
        i = 0;
      } else {
        i = i + 1;
      }
      j = 0;
    } else {
      j = j + 1;
    }
    word = word + words[i][j];
    flicker.innerHTML = word;
  }, 500);
}

flickerText();

document.addEventListener("scroll", () => {
  let height = pageYOffset;
  if (height > 110) {
    nav.classList.add("nav-onscroll");
  } else {
    nav.classList.remove("nav-onscroll");
  }
});

const appearOptions = {
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

stats.forEach((col) => {
  appearOnScroll.observe(col);
});
