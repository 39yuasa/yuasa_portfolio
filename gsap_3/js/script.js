const tl = gsap.timeline();
// tl.from(".item_2", { xPercent: -150 });
tl.from(".item_2", { xPercent: -100 })
  .from(".item_3", { xPercent: -100 })
  .from(".item_4", { xPercent: -100 });
ScrollTrigger.create({
  animation: tl,
  trigger: "#wrapper",
  start: "top",
  scrub: 0, // 1秒遅れて追従させる
  pin: true, // 要素の固定表示
  anticipatePin: 1, // ピン留めをどのくらい早く行うかを制御
});

gsap.to(".fv_slide_left", 0.8, {
  width: 0,
  left: "150%",
  delay: 0.4,
  ease: Expo.ease,
});
gsap.to(".fv_slide_right", 0.8, {
  width: 0,
  left: "-235%",
  delay: 1.2,
  ease: Expo.ease,
});
gsap.to(".fv_slide_top", 0.8, {
  height: 0,
  top: "-180%",
  right: "-100%",
  delay: 2.0,
  ease: Expo.ease,
});
gsap.to(".fv_slide_bottom", 0.8, {
  height: 0,
  top: "-180%",
  right: "100%",
  delay: 2.8,
  ease: Expo.ease,
});
gsap.to(".fv_slide_fig", 0.6, {
  opacity: 1,
  delay: 0.5,
});
gsap.to(".fv_slide_item_wap", 0.6, {
  opacity: 1,
  delay: 3.4,
});
gsap.to(".fv_slide_item", 0.25, {
  opacity: 1,
  delay: 0.4,
  ease: Expo.ease,
});
gsap.to(".fv_slide_item img", 0.25, {
  filter: "grayscale(0%)",
  delay: 0.85,
  ease: Expo.ease,
});

gsap.fromTo(
  ".example_02",
  {
    // y: 40,
    // y: 20,
    x: 40,
  },
  {
    y: 0,
    x: 0,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1, //永遠の繰り返し
    yoyo: true,
  }
);
