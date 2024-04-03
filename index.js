const instructCtn = document.querySelector(".instruction-ctn");
const instructBtn = document.querySelector(".instruct-btn");
const closeInstruct = document.querySelector(".close-instruct");

instructBtn.addEventListener("click", () => {
  instructCtn.style.transform = "translateY(0px)";
});

closeInstruct.addEventListener("click", () => {
  instructCtn.style.transform = "translateY(-1800px)";
});

// Test section
const label = document.querySelectorAll("label");

label.forEach((lbl) => {
  label.forEach((isLbl) => {
    isLbl.addEventListener("click", () => {
      lbl.style.borderColor = "rgb(84, 99, 120)";
      isLbl.style.borderColor = "red";
    });
  });
});
