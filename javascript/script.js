let scrollUp = document.querySelector(".up");

window.onscroll = function () {
    console.log(this.scrollY);
  if (this.scrollY >= 700) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
};

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};