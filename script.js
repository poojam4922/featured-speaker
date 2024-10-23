console.log("connected...");
// for slider
const slider = document.querySelector(".speakers-slider");
const leftButton = document.querySelector("#left-arrow");
const rightButton = document.querySelector("#right-arrow");
console.log(leftButton, "leftButton");
console.log(rightButton, "rightButton");

// slider.addEventListener("scroll", function () {
//   console.log("scroll");
//   // Show the left arrow when not at the very beginning
//   if (slider.scrollLeft > 0) {
//     leftButton.classList.remove("hidden");
//   } else {
//     leftButton.classList.add("hidden");
//   }

//   // Optionally, hide the right arrow if you've scrolled to the end
//   if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
//     rightButton.classList.add("hidden");
//   } else {
//     rightButton.classList.remove("hidden");
//   }
// });

leftButton.addEventListener("click", function () {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

rightButton.addEventListener("click", function () {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

// show speaker detailes

const speakerCard = document.querySelectorAll(".speaker-card");
// console.log(speakerCard, "speaker card");

speakerCard.forEach((card) => {
  card.addEventListener("click", () => {
    const speakerName = card.getAttribute("data-name");
    const speakerRole = card.getAttribute("data-role");
    const speakerCompany = card.getAttribute("data-company");
    const speakerImage = card.getAttribute("data-image");
    console.log(
      speakerName,
      speakerRole,
      speakerCompany,
      speakerImage,
      "speakerDetails"
    );
    // update speaker details
    const detailSection = document.getElementById("speaker-detail");
    console.log(detailSection, "detailSection");
    detailSection.querySelector("img").src = speakerImage;
    detailSection.querySelector("h2").innerText = speakerName;
    detailSection.querySelector(".text-sm-700").innerText = speakerRole;
    detailSection.querySelector(".text-gray-500").innerText = speakerCompany;

    detailSection.classList.remove("hidden");
  });
});

function hideDetails() {
  const detailSection = document.getElementById("speaker-detail");
  detailSection.classList.add("hidden");
}
