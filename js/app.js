let reviews = [
  {
    id: 1,
    img: "pics/pic.jpg",
    username: "Jessica Henwick",
    tweet:
      "My name is Jessica Henwick and i am tweeting my review basing on the website ihave created and that it is the best platform to showcase your collectibles and that you will be suprised with how they charge little for their services",
  },
  {
    id: 2,
    img: "pics/pic1.jpg",
    username: "Mfedhela Dennis",
    tweet:
      "The platform reminds me of the golden days of the eighties where we  got to feel the real ppower of the engine and that power is being offered today here at the website where we got to experience the nostalgic experience",
  },
  {
    id: 3,
    img: "pics/pic2.jpg",
    username: "Mary Jane",
    tweet:
      "once upon a time there were cars everywhere and having a classic car was the best feeling of owmership and that having one proved to be beneficial",
  },
];

let profile = document.querySelector(".prof-pic");
let title = document.querySelector(".title");
let textTweet = document.querySelector(".review");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let counter = 0;

function dispUser() {
  profile.setAttribute("src", reviews[counter].img);
  title.textContent = reviews[counter].username;
  textTweet.textContent = reviews[counter].tweet;
}

window.addEventListener("DOMContentLoaded", function () {
  dispUser();
});

nextBtn.addEventListener("click", function () {
  counter++;
  if (counter > reviews.length - 1) {
    counter = 0;
  }
  dispUser();
});

prevBtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = reviews.length - 1;
  }
  dispUser();
});
