const images = [
  {
    url: "https://i.kym-cdn.com/entries/icons/facebook/000/048/516/Screenshot_2024-02-20_at_10.43.43_AM.jpg",
  },

  {
    url: "https://i.redd.it/2mhrqnmb7s941.jpg",
  },

  {
    url: "https://media.thetab.com/blogs.dir/90/files/2021/06/screenshot-2021-06-10-at-110730-1024x537.png",
  },
];

let currentIndex = 0;
const galleryImage = document.querySelector("#gallery__img");
const prevButton = document.querySelector("#prev_btn");
const nextButton = document.querySelector("#next_btn");

function showImage(index) {
  galleryImage.src = images[index].url;
  currentIndex = index;
  checkButtons();
}

function checkButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  }
});

showImage(0);
