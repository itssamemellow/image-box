/* let hero = document.querySelector("main section");
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
});*/

const hero = document.querySelector("main section");
const foto = document.getElementById("foto");

let areWeLoadingAPhotograph = false;

hero.addEventListener("click", () => {
  if (areWeLoadingAPhotograph == false) {
    areWeLoadingAPhotograph = true;
    foto.classList.add("hide");

    const random = Math.round(Math.random() * 1000);

    console.log(random);

    const fotoURL = `https://picsum.photos/seed/${random}/1000/600`;

    foto.onload = () => {
      areWeLoadingAPhotograph = false;
      foto.classList.remove("hide");
    };

    foto.src = fotoURL;
  } else {
    alert("Photographed is being loaded, please wait.");
  }
});
