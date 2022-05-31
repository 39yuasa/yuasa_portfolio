//最終的な描画場所
const content = document.getElementById("content");
const mouthText = document.getElementById("mouth");

// 月と日程を比べる
const text_year = document.querySelector(".textBox_0");
const text_mouth = document.querySelector(".textBox_1");
const text_day = document.querySelector(".textBox_2");
const text_main = document.querySelector(".textBox_3");
const limit_text = document.getElementById("limiter");

// 年ごとに管理ができる配列の作成;

//月ごとに管理ができる配列の作成
const array = [[], [], [], [], [], [], [], [], [], [], [], []];

//taskをその月に合わせた配列に代入
const handleBtn = document.querySelector(".judge");
handleBtn.addEventListener("click", () => {
  const num = text_mouth.value;
  for (let i = 1; i < 13; i++) {
    num == i
      ? array[i - 1].push({ key: text_day.value, text: text_main.value })
      : null;
  }
  //inputタグの中を空にする
  text_mouth.value = "";
  text_day.value = "";
  text_main.value = "";

  // 関数の発火
  start(mouth);
});

//足し引きbtnの取得
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");

//現在の年,月の取得
const now = new Date();
let year = now.getFullYear();
let mouth = now.getMonth() + 1;
let today = now.getDate();
// mouthText.innerHTML = mouth;

//子要素を消す処理
const ahh = () => {
  [...weekCalendar.children].map((data) => {
    data.remove();
  });
  [...numCalendar.children].map((data) => {
    data.remove();
  });
};
//足し、引きの処理
plusBtn.addEventListener("click", () => {
  //   console.log(mouth);
  if (mouth == 12) {
    mouth = 0;
    year += 1;
  }
  mouth += 1;
  ahh();
  start(mouth);
});
minusBtn.addEventListener("click", () => {
  if (mouth == 1) {
    mouth = 13;
    year -= 1;
  }
  mouth -= 1;
  ahh();
  start(mouth);
});

const numCalendar = document.querySelector(".tr_2");
const weekCalendar = document.querySelector(".tr_1");
// 月が変わったときに描画する内容を変えるようにするための関数の発火装置;
const start = (mouth) => {
  // カレンダーの作成
  // その月の初めの日を取得
  ahh();
  const firstDate = new Date(year, mouth - 1);
  const firstDay = firstDate.getDay();
  //その月の最後の日の取得
  const lastDate = new Date(year, mouth, 0);
  const lastDay = lastDate.getDate();

  //   曜日の配列作成、および描画
  const week = ["日", "月", "火", "水", "木", "金", "土"];
  week.forEach((a) => {
    weekCalendar.innerHTML += `<li class= 'weeks'>${a}</li>`;
  });

  let dayCount = 1;

  // カレンダー生成
  for (let i = 0; i < 5; i++) {
    const ulTag = document.createElement("ul");
    ulTag.className = "calendar";
    numCalendar.appendChild(ulTag);
    for (let j = 0; j < 7; j++) {
      i == 0 && j < firstDay
        ? (ulTag.innerHTML += `<li class = 'null'></li>`)
        : dayCount > lastDay
        ? (ulTag.innerHTML += `<li class = 'null'></li>`)
        : ((ulTag.innerHTML += `<li class = 'number'><p>${dayCount}</p></li>`),
          dayCount++);
    }
  }
  document.getElementById("top").innerHTML = `${year}年${mouth}月`;
  //処理
  content.innerHTML = "";
  array.map((data, index) => {
    // console.log(data);
    index == mouth - 1 ? inner(data) : null;
  });
};

//実際にする描画の処理
// dataの中身はその月の情報が入っている
const inner = (data) => {
  // console.log(year);
  [...limit_text.children].map((data) => {
    data.remove();
  });
  data.map((data) => {
    const array_number = [...document.querySelectorAll(".number")];
    const { key, text } = data;
    array_number.map((a, index) => {
      index == key
        ? (array_number[
            index - 1
          ].innerHTML += `<span><p class = 'text'>${text}</p>`)
        : null;
    });
    const change = (text) => {
      limit_text.innerHTML += `<p>${text}</p>`;
    };
    today + 7 > key ? change(text) : console.log("ahh");
  });
  // console.log(data);
};

//日付が変わったら一週間以内のタスク内容の更新

// 最初の描画の処理
let judge = true;
judge ? (start(mouth), (judge = false)) : null;
