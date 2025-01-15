const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryList = document.querySelector(".gallery");
const galleryItems = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" width = "360" height = "300" ></li>`
  )
  .join("");
galleryList.insertAdjacentHTML("afterbegin", galleryItems);

// ========style=======
galleryList.style.display = "flex";
galleryList.style.flexWrap = "wrap";
galleryList.style.alignItems = "center";
galleryList.style.minWidth = "1128px";
galleryList.style.justifyContent = "center";
galleryList.style.columnGap = "24px";
galleryList.style.rowGap = "48px";

const galleryListItems = document.querySelectorAll(".gallery li");
galleryListItems.forEach((item) => {
  item.style.maxWidth = "calc((100% - 48px) / 3)";
});

const img = document.querySelectorAll(".gallery li img");
img.forEach((item) => {
  item.style.display = "block";
  item.style.maxWidth = "100%";
});
