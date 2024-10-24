console.log("connected...");
// for slider
const slider = document.querySelector(".speakers-slider");
const slider_wrapper = document.querySelector(".slider_wrapper");
const leftButton = document.querySelector("#left-arrow");
const rightButton = document.querySelector("#right-arrow");
leftButton.addEventListener("click", function () {
  console.log("leftButton clicked");
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

rightButton.addEventListener("click", function () {
  console.log("rightButton clicked");
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

// show speaker detailes

const speakerCard = document.querySelectorAll(".speaker-card");

speakerCard.forEach((card) => {
  card.addEventListener("click", () => {
    if (slider_wrapper) {
      slider_wrapper.style.marginTop = "2rem";
    }
    console.log("card clicked");
    const speakerName = card.getAttribute("data-name");
    const speakerRole = card.getAttribute("data-role");
    const speakerCompany = card.getAttribute("data-company");
    const speakerImage = card.getAttribute("data-image");
    // update speaker details
    const detailSection = document.querySelector(".speaker-detail");
    console.log(detailSection, "detailSection");
    document.getElementById("speaker-img").src = speakerImage;
    document.getElementById("speaker-name").innerText = speakerName;
    document.getElementById("speaker-role").innerText = speakerRole;
    document.getElementById("speaker-company").innerText = speakerCompany;

    detailSection.classList.remove("toggle");
  });
});

function hideDetails() {
  console.log("hideDetails");
  const detailSection = document.querySelector(".speaker-detail");
  console.log(detailSection, "detailSection");
  detailSection.classList.add("toggle");
  if (slider_wrapper) {
    slider_wrapper.style.marginTop = "6rem";
  }
}
