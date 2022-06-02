const draw_0 = (data) => {
  const textArea = document.querySelector(".text_1");
  textArea.innerText = `${data}`;
};
const draw_1 = (data) => {
  // console.log(data);
  const textArea = document.querySelector(".text_2");
  textArea.innerText = `${data}`;
};
const draw_2 = (data) => {
  // console.log(data);
  const textArea = document.querySelector(".text_3");
  textArea.innerText = `${data}`;
};

const countUp_0 = (count) => {
  // console.log("a");
  array.map((data, index) => {
    index === count ? draw_0(data) : null;
    // console.log(count);
  });
};
const countUp_1 = (count) => {
  array.map((data, index) => {
    index === count ? draw_1(data) : null;
    // console.log(count);
  });
};
const countUp_2 = (count) => {
  array.map((data, index) => {
    index === count ? draw_2(data) : null;
    // console.log(count);
  });
};

const judge_0 = (count) => {
  //   console.log(count);
  count == 0
    ? countUp_0(0)
    : count == 1
    ? countUp_0(1)
    : count == 2
    ? countUp_0(2)
    : countUp_0(3);
};

const judge_1 = (count) => {
  //   console.log(count);
  count == 0
    ? countUp_1(0)
    : count == 1
    ? countUp_1(1)
    : count == 2
    ? countUp_1(2)
    : countUp_1(3);
};

const judge_2 = (count) => {
  //   console.log(count);
  count == 0
    ? countUp_2(0)
    : count == 1
    ? countUp_2(1)
    : count == 2
    ? countUp_2(2)
    : countUp_2(3);
};

const stop_0 = (num) => {
  const stopBtn = document.querySelector(".stopBtn_1");
  stopBtn.addEventListener("click", () => {
    count[num] = 100;
  });
};
const stop_1 = () => {
  const stopBtn = document.querySelector(".stopBtn_2");
  stopBtn.addEventListener("click", () => {
    count[1] = 100;
  });
};
const stop_2 = () => {
  const stopBtn = document.querySelector(".stopBtn_3");
  stopBtn.addEventListener("click", () => {
    count[2] = 100;
  });
};

const array = ["a", "b", "c", "d"];
let count = [0, 0, 0];
let counter = [0, 0, 0];

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
  count = [0, 0, 0];
  counter = [0, 0, 0];
  const intervalId_1 = setInterval(() => {
    counter[0] >= 3 ? (counter = 0) : null;
    judge_0(counter[0]);
    stop_0(0);
    counter[0]++;
    count[0]++;
    console.log(count[0]);
    if (count[0] > array.length * 5) {
      clearInterval(intervalId_1); //intervalIdをclearIntervalで指定している
    }
  }, 1000);
  const intervalId_2 = setInterval(() => {
    counter[1] >= 3 ? (counter[1] = 0) : null;
    judge_1(counter[1]);
    stop_1();
    counter[1]++;
    count[1]++;
    if (count[1] > 50) {
      clearInterval(intervalId_2); //intervalIdをclearIntervalで指定している
    }
  }, 500);
  const intervalId_3 = setInterval(() => {
    counter[2] >= 3 ? (counter[2] = 0) : null;
    judge_2(counter[2]);
    stop_2();
    counter[2]++;
    count[2]++;
    if (count[2] > 100) {
      clearInterval(intervalId_3); //intervalIdをclearIntervalで指定している
    }
  }, 200);
});
