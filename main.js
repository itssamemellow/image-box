let hero = document.querySelector("main section");
let photo = document.querySelector("main section img");

hero.addEventListener("click", function () {
  let random = Math.round(Math.random() * 1000);
  photo.classList.add("hide");
  let url = `https://picsum.photos/seed/${random}/1000/600`;
  console.log(random, url);

  photo.src = url;

  setTimeout(function () {
    photo.classList.remove("hide");
  }, 2000);
});
