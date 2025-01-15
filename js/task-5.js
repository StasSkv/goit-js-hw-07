const body = document.querySelector("body");
const wrap = document.querySelector(".widget");
const text = document.querySelector(".widget>p");
const colorText = document.querySelector(".color");
const btn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});

// ==========style=========
wrap.style.display = "flex";
wrap.style.flexDirection = "column";
wrap.style.alignItems = "center";
wrap.style.justifyContent = "center";

text.style.fontWeight = "400";
text.style.fontSize = "16px";
text.style.lineHeight = "1.5";
text.style.letterSpacing = "0.04em";
text.style.color = "#2e2f42";

btn.style.fontWeight = "500";
btn.style.fontSize = "16px";
btn.style.lineHeight = "1.5";
btn.style.letterSpacing = "0.04em";
btn.style.color = "#fff";
btn.style.borderRadius = "8px";
btn.style.border = "none";
btn.style.padding = "8px 16px";
btn.style.backgroundColor = "#4e75ff";
btn.style.maxWidth = "148px";
btn.style.transition =
  "outline 0.3s ease, background-color 0.3s ease, color 0.3s ease";

btn.addEventListener("focus", () => {
  btn.style.outline = "2px solid black";
  btn.style.backgroundColor = "aqua";
  btn.style.color = "black";
});
btn.addEventListener("mouseover", () => {
  btn.style.outline = "2px solid black";
  btn.style.backgroundColor = "aqua";
  btn.style.color = "black";
});
btn.addEventListener("blur", () => {
  btn.style.outline = "none";
  btn.style.backgroundColor = "#4e75ff";
  btn.style.color = "#fff";
});
btn.addEventListener("mouseout", () => {
  btn.style.outline = "none";
  btn.style.backgroundColor = "#4e75ff";
  btn.style.color = "#fff";
});
