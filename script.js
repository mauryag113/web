const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelector("h1").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
      document.querySelector(".next-line").style.display = "block";
      document.querySelector(".next-line").style.animation = "show-next-line 1s forwards";
    }

    iteration += 1 / 3;
  }, 30);
}

function calculateAge() {
  const dayInput = document.getElementById("days").value;
  const monthInput = document.getElementById("months").value;
  const yearInput = document.getElementById("years").value;

  const dobInput = new Date(`${monthInput}/${dayInput}/${yearInput}`);
  const today = new Date();

  if (dobInput.toString() !== "Invalid Date") {
    const ageInMilliseconds = today - dobInput;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    document.getElementById("announce").innerHTML = `<span class="resultAnnounce" style="color: var(--text-color)">You Have Lived FOR!</span>`;
    document.getElementById("day").innerHTML = `<span class="result" style="color: var(--text-color)">${days} Days</span>`;
    document.getElementById("month").innerHTML = `<span class="result" style="color: var(--text-color)">${months} Months</span>`;
    document.getElementById("year").innerHTML = `<span class="result" style="color: var(--text-color)">${years} Years</span>`;

    const inputFields = document.querySelectorAll(".ageInput");
    inputFields.forEach(input => input.style.display = "none");

    document.querySelector("button").style.display = "none";
  } else if (yearInput > today.getFullYear()) {
    alert("Please enter a valid date of birth.");
  } else if (monthInput > 12) {
    alert("Please enter a valid date of birth.");
  } else if (dayInput > 31) {
    alert("Please enter a valid date of birth.");
  } else {
    alert("Please enter a valid date of birth.");
  }

  if (days == 0 & months == 0) {
    document.getElementById("announce").innerHTML = `<span class="resultAnnounce" style="color: var(--text-color)">HAPPY BIRTHDAY!</span>`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sun = document.getElementById("sun");
  sun.style.display = "none";
});

const themeToggle = document.getElementById("themeToggle");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

themeToggle.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    moon.style.display = "none";
    sun.style.display = "flex";
  } else {
    sun.style.display = "none";
    moon.style.display = "flex";
  }
};

document.addEventListener('DOMContentLoaded', function () {
  resultsList.addEventListener('click', function (e) {
    const readMoreBtn = e.target.closest('.read-more');
    if (readMoreBtn) {
      const recipeBox = readMoreBtn.closest('.recipe-box');
      recipeBox.classList.toggle('expanded');
    }
  });
});
