// Test section
const label = document.querySelectorAll("label");
const question = document.querySelector(".question");
const optionI = document.querySelectorAll(".optioni");
const nextBtn = document.querySelector(".next-btn");
const endBtn = document.querySelector(".end-btn");
const hoverCover = document.querySelector(".hoverCover");
const spinner = document.querySelector(".spinner");
const current = document.querySelector(".current");
const totalque = document.querySelector(".totalque");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

window.addEventListener("load", () => {
  setTimeout(() => {
    hoverCover.style.display = "none";
    spinner.style.display = "none";
  }, 2000);
});

let time = new Date();
// console.log(time.getMinutes());

label.forEach((lbl) => {
  label.forEach((isLbl) => {
    isLbl.addEventListener("click", () => {
      lbl.style.borderColor = "rgb(84, 99, 120)";
      lbl.classList.remove("selected");
      isLbl.style.borderColor = "white";
      isLbl.classList.add("selected");
      lbl.style.display = "none";
      isLbl.style.display = "flex";
    });
  });
});

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Work with the JSON data here
    let total = data.length;
    totalque.textContent = 30;
    let correctAns = 0;
    let numQuestionsAns = 0;

    // console.log(data.length);

    // alert score
    // setTimeout(() => {
    //   alert(`Time don finish boss, you score ${correctAns}`);
    // }, 10000);

    let randomIndex;
    let displayQuestion;

    function getQuestion() {
      randomIndex = Math.floor(Math.random() * data.length);
      displayQuestion = data[randomIndex];
      question.textContent = displayQuestion.question;
      optionI[0].textContent = displayQuestion.a;
      optionI[1].textContent = displayQuestion.b;
      optionI[2].textContent = displayQuestion.c;
      optionI[3].textContent = displayQuestion.d;
    }

    function resetOptionStyle() {
      label.forEach((lbl) => {
        lbl.style.display = "flex";
        lbl.style.borderColor = "rgb(84, 99, 120)";
        lbl.classList.remove("selected");
        lbl.children[1].checked = false;
      });
    }

    // show initial question
    getQuestion();

    // bring next question
    nextBtn.addEventListener("click", () => {
      localStorage.clear();
      label.forEach((labl) => {
        let labelRadio = labl.children[1];
        if (labelRadio.checked === false) {
          // do nothing
        } else {
          getQuestion();
          resetOptionStyle();
          numQuestionsAns += 1;
          current.textContent = numQuestionsAns;
          progress.style.width = `${(numQuestionsAns / 20) * 100}%`;
        }
      });

      // whenyou reach the design number
      if (current.textContent === "30") {
        nextBtn.style.transform = "translateX(1000px)";
        localStorage.setItem("NumPassed", `${correctAns}`);
        window.location.href = "./score.html";
      }
    });

    // check if answer is correct
    label.forEach((labl) => {
      labl.addEventListener("click", (event) => {
        let labelRadio = labl.children[1];
        if (labelRadio.value === displayQuestion.answer) {
          correctAns = correctAns + 0.5;
          alert(`correct`);
        } else {
          total = total - 0.5;
          let cA = displayQuestion.answer;
          alert(
            `Wrong, correct answer is option "${displayQuestion.answer}", ${
              displayQuestion[`${cA}`]
            }`
          );
        }
        console.log(correctAns);
        console.log(total);
      });
    });

    endBtn.addEventListener("click", () => {
      localStorage.clear();
      localStorage.setItem("NumPassed", `${correctAns}`);
      window.location.href = "./score.html";
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
