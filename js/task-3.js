const fieldInput = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

fieldInput.addEventListener("input", (inputValue) => {
  const cleanInputValue = inputValue.currentTarget.value
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");
  if (cleanInputValue === "") {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = cleanInputValue;
  }
});

// =========style========
fieldInput.style.fontWeight = "400";
fieldInput.style.fontSize = "16px";
fieldInput.style.lineHeight = "1.5";
fieldInput.style.letterSpacing = "0.04em";
fieldInput.style.color = "#2e2f42";
fieldInput.style.minWidth = "360px";
fieldInput.style.minHeight = "40px";
fieldInput.style.border = "1px solid #808080";
fieldInput.style.borderRadius = "4px";
fieldInput.style.paddingLeft = "16px";
fieldInput.style.backgroundColor = "#fafafa";
fieldInput.style.marginBottom = "16px";

const title = document.querySelector("h1");
title.style.margin = "0";
title.style.padding = "0";
