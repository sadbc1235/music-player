const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
const names = [
  "Blizzards",
  "Calm",
  "Dusty_Road",
  "Escape",
  "Payday",
  "Retreat",
  "Seasonal",
  "Vespers",
];
const listLen = list.length;
const deg = 360 / listLen;
let num = 0;
let onNum = 0;

names.map((name, index) => {
  const pic = list[index].querySelector(".pic");
  const h2 = list[index].querySelector(".txt h2");
  list[index].style.transform = `rotate(${deg * index}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(./img/${name}.jpg)`;
  h2.innerText = name;

  const audio = document.createElement("audio");
  audio.setAttribute("src", `./music/${name}.mp3`);
  audio.setAttribute("loop", "loop");

  list[index].append(audio);
});

btnPrev.addEventListener("click", (e) => {
  frame.style.transform = `rotate(${deg * ++num}deg)`;
  onNum === 0 ? (onNum = listLen - 1) : onNum--;

  for (let el of list) {
    el.querySelector("audio").pause();
    el.querySelector(".pic").classList.remove("on");
    el.classList.remove("on");
  }

  list[onNum].classList.add("on");
});
btnNext.addEventListener("click", (e) => {
  frame.style.transform = `rotate(${deg * --num}deg)`;
  onNum === 7 ? (onNum = listLen - 8) : onNum++;

  for (let el of list) {
    el.querySelector("audio").pause();
    el.querySelector(".pic").classList.remove("on");
    el.classList.remove("on");
  }

  list[onNum].classList.add("on");
});

for (let el of list) {
  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const load = el.querySelector(".load");

  play.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");

    e.currentTarget.closest("article").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");

    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");

    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
}
