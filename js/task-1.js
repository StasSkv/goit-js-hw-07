const categories = document.querySelectorAll("#categories .item");
console.log(`Number of category: ${categories.length}`);

categories.forEach((elem) => {
  const titleCategory = elem.querySelector("h2").textContent;
  const elemInCategory = elem.querySelectorAll(".item ul li").length;
  console.log(`Category: ${titleCategory}`);
  console.log(`Elements: ${elemInCategory}`);
});

// ===============styles==============
const categoriesList = document.querySelector("#categories");
categoriesList.style.display = "flex";
categoriesList.style.flexDirection = "column";
categoriesList.style.alignItems = "center";
categoriesList.style.justifyContent = "center";

const categoriesItems = document.querySelectorAll(".item");
categoriesItems.forEach((item) => {
  item.style.backgroundColor = "#f6f6fe";
  item.style.padding = "16px";
  item.style.borderRadius = "8px";
});

categoriesItems.forEach((item, index) => {
  if (index !== categoriesItems.length - 1) {
    item.style.marginBottom = "24px";
  }
});

const subtitle = document.querySelectorAll("h2");
subtitle.forEach((subtitle) => {
  subtitle.style.fontWeight = "600";
  subtitle.style.fontSize = "24px";
  subtitle.style.lineHeight = "1.33";
  subtitle.style.letterSpacing = "0.04em";
  subtitle.style.marginBottom = "16px";
  subtitle.style.marginTop = "0px";
  subtitle.style.color = "#2e2f42";
  subtitle.style.padding = "0";
});

const categoriesSubList = document.querySelectorAll(".item ul");
categoriesSubList.forEach((list) => {
  list.style.display = "flex";
  list.style.flexDirection = "column";
  list.style.gap = "8px";
});

const categoriesSubListItems = document.querySelectorAll(".item li");
categoriesSubListItems.forEach((item) => {
  item.style.fontWeight = "400";
  item.style.fontSize = "16px";
  item.style.lineHeight = "1.5";
  item.style.letterSpacing = "0.04em";
  item.style.color = "#2e2f42";
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.padding = "16px";
  item.style.border = "1px solid #808080";
  item.style.borderRadius = "4px";
  item.style.width = "360px";
  item.style.height = "40px";
});
