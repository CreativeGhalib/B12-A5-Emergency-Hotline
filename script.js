// Heart Counter
const updateHeartCounter = () => {
  const heartNav = document.getElementById("heart-nav");
  if (heartNav) {
    const currentHeartValue = parseInt(heartNav.innerText);
    heartNav.innerText = currentHeartValue + 1;
  }
};
// Attach Event Listeners to Heart Buttons
const heartButtonIds = [
  "heart-one",
  "heart-two",
  "heart-three",
  "heart-four",
  "heart-five",
  "heart-six",
  "heart-seven",
  "heart-eight",
  "heart-nine",
];
