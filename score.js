const spNum = document.querySelector(".spnum");
const numPassed = document.querySelector(".num-passed");
const numFailed = document.querySelector(".num-failed");
const theComment = document.querySelector(".the-comment");

window.addEventListener("load", () => {
  spNum.textContent = (localStorage.NumPassed / 20) * 100;
  numPassed.textContent = localStorage.NumPassed;
  numFailed.textContent = 30 - localStorage.NumPassed;
  if (parseInt(numPassed.textContent) < 15) {
    theComment.textContent = `you be olodo, why you go score ${localStorage.NumPassed}`;
  } else {
    theComment.textContent = `you try sha, ${localStorage.NumPassed}`;
  }
});

if (numPassed < 15) {
  theComment.textContent = "You be Olodo";
}

if (numPassed > 15) {
  theComment.textContent = "You be scholar";
}
