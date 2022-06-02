const box = document.querySelector(".root");
const textBox = document.querySelector(".text");

const array_random_place = [
  { place: "top" },
  { place: "right" },
  { place: "left" },
  { place: "bottom" },
];
let count = 0;
const array_random_size = [{ size: "30%" }, { size: "70%" }, { size: "100%" }];
const handleBtn = document.getElementById("start");
handleBtn.addEventListener("click", () => {
  const start = () => {
    count++;
    const random_place = Math.floor(Math.random() * 4);
    const value = array_random_place[random_place].place;
    box.className = `root_${value}`;
    if (count > 10) {
      clearInterval(intervalId_1);
      clearInterval(intervalId_2);
      clearInterval(intervalId_3);
      b = false;
      textBox.innerHTML = `あなたのスコアは${score}点です`;
    } else {
      const random_num = Math.floor(Math.random() * 4);
      random_num == 0
        ? intervalId_1
        : random_num == 1
        ? intervalId_2
        : intervalId_3;
    }
  };

  let num = 0;
  const intervalId_1 = setInterval(() => {
    start(0);
    num++;
  }, 5000);
  const intervalId_2 = setInterval(() => {
    num == 0 ? null : start(1);
  }, 1000);
  const intervalId_3 = setInterval(() => {
    num == 0 ? null : start(2);
  }, 10000);
});

let score = 0;
const judge = (value) => {
  console.log(value);
  if (value) {
    score += 1;
    textBox.innerHTML = `あなたのスコアは${score}点です`;
  } else {
    null;
  }
};
let b = true;
document.onclick = (e) => {
  if (
    e.target.closest(".root_top") ||
    e.target.closest(".root_right") ||
    e.target.closest(".root_bottom") ||
    e.target.closest(".root_left") ||
    // e.target.closest("#start")
    e.target.closest("#start")
  ) {
    if (e.target.closest("#start")) {
      b == true ? judge(false) : console.log("終わり");
    } else {
      b == true ? judge(true) : console.log("終わり");
    }
  } else {
    score = score - 3;
    textBox.innerHTML = `あなたのスコアは${score}点です`;
  }
};
