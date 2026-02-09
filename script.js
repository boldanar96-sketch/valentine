let index = 1;
const total = 17;

function show(id) {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function startShow() {
  show("texts");
  const music = document.getElementById("bgm");
  music.volume = 0.3;
  music.play();
}

function startGallery() {
  show("gallery");
}

document.getElementById("photo").onclick = () => {
  index++;
  if (index > total) {
    show("final");
    setTimeout(() => show("gifts"), 3000);
  } else {
    document.getElementById("photo").src = `images/${index}.jpg`;
  }
};

function selectGift(el) {
  document.querySelectorAll(".gift").forEach(g => g.classList.remove("selected"));
  el.classList.add("selected");
}

function finish() {
  show("surprise");
}