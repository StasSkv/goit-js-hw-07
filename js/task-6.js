function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

btnCreate.addEventListener("click", () => {
  const inputValue = input.value;
  const colections = [];
  if (inputValue < 0 || inputValue > 100) {
    alert("enter a value between 1 and 100");
  } else {
    boxes.innerHTML = "";
    for (let i = 0; i < inputValue; i++) {
      const colectionItem = {
        width: (i + 1) * 10 + 20,
        height: (i + 1) * 10 + 20,
        color: createColor(),
      };
      colections.push(colectionItem);
    }
    const addColections = colections
      .map(
        (div) =>
          `<div class="new-cub" style="width: ${div.width}px; height: ${div.height}px; background-color: ${div.color};"></div>`
      )
      .join("");
    boxes.insertAdjacentHTML("afterbegin", addColections);
  }
  input.value = "";
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btnCreate.click();
  }
});

btnDestroy.addEventListener("click", (event) => {
  boxes.innerHTML = "";
});

// ==========style========
controls.style.fontWeight = "400";
controls.style.fontSize = "16px";
controls.style.lineHeight = "1.5";
controls.style.letterSpacing = "0.04em";
controls.style.color = "#2e2f42";
controls.style.display = "flex";
controls.style.alignItems = "center";
controls.style.justifyContent = "center";
controls.style.gap = "16px";
controls.style.borderRadius = "8px";
controls.style.padding = "32px";

input.style.border = "1px solid #808080";
input.style.borderRadius = "8px";
input.style.padding = "8px 50px";
input.style.width = "150px";
input.style.height = "40px";

btnCreate.style.fontWeight = "500";
btnCreate.style.color = "#fff";
btnCreate.style.border = "none";
btnCreate.style.borderRadius = "8px";
btnCreate.style.padding = "8px 16px";
btnCreate.style.minWidth = "120px";
btnCreate.style.minHeight = "40px";
btnCreate.style.backgroundColor = "#4e75ff";
btnCreate.style.transition = "transform 0.4s ease";

btnCreate.addEventListener("focus", () => {
  btnCreate.style.transform = "scale(1.1)";
});

btnCreate.addEventListener("mouseover", () => {
  btnCreate.style.transform = "scale(1.1)";
});

btnCreate.addEventListener("blur", () => {
  btnCreate.style.transform = "scale(1)";
});

btnCreate.addEventListener("mouseout", () => {
  btnCreate.style.transform = "scale(1)";
});

btnDestroy.style.fontWeight = "500";
btnDestroy.style.color = "#fff";
btnDestroy.style.border = "none";
btnDestroy.style.borderRadius = "8px";
btnDestroy.style.padding = "8px 16px";
btnDestroy.style.minWidth = "120px";
btnDestroy.style.minHeight = "40px";
btnDestroy.style.backgroundColor = " #ff4e4e";
btnDestroy.style.transition = "transform 0.4s ease";

btnDestroy.addEventListener("focus", () => {
  btnDestroy.style.transform = "scale(1.1)";
});

btnDestroy.addEventListener("mouseover", () => {
  btnDestroy.style.transform = "scale(1.1)";
});

btnDestroy.addEventListener("blur", () => {
  btnDestroy.style.transform = "scale(1)";
});

btnDestroy.addEventListener("mouseout", () => {
  btnDestroy.style.transform = "scale(1)";
});

boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.alignItems = "start";
boxes.style.justifyContent = "center";
boxes.style.rowGap = "5px";
boxes.style.columnGap = "44px";
