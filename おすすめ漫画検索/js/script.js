$(document).ready(function () {
  $("select").selectpicker();
});

fetch("../data/data.json")
  .then((Response) => Response.json())
  .then((data) => func1(data))
  .catch((err) => console.log(err));

const judge = (data) => {
  console.log(data);
  const text = document.getElementById("container");
  text.innerHTML += `<li class ='item'> 
  <h3>${data.name}</h3>
  <div class = 'swiper'>
  <div class = 'swiper-wrapper'>
  <img src = '${data.img_1}'  class ='swiper-slide'></img>
  <img src = '${data.img_2}'  class ='swiper-slide'></img>
  <img src = '${data.img_3}'  class ='swiper-slide'></img>
  </div>
  <div class = 'swiper-pagination'></div>
  <div class = 'swiper-button-prev'></div>
  <div class = 'swiper-button-next'></div>
  </div>
 
  <p>${data.p}があります</p></li>`;
  swiper();
};

const remove = () => {
  const li = [...document.querySelectorAll(".item")];
  li.map((data) => {
    data.remove();
  });
};

const func1 = (data) => {
  console.log(data);
  const search = document.getElementById("search_select_box");
  search.onchange = (e) => {
    remove();
    const target = e.target.value;
    data.data.map((data, index) => {
      data.genre == target ? judge(data) : null;
    });
  };
};

const swiper = () => {
  new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination",
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
