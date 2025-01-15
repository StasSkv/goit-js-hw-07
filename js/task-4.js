const loginForm = document.querySelector(".login-form");
const formLabel = document.querySelectorAll(".login-form label");
const formInput = document.querySelectorAll("input");
const formBtn = document.querySelector("button");

// =========task===========

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formInputEmail = form.elements.email.value.trim();
  const formInputPassword = form.elements.password.value.trim();
  const formOutputObj = { email: "", password: "" };

  if (formInputEmail === "" || formInputPassword === "") {
    return alert("All form fields must be filled in");
    // =========коли вивчим регулярні вирази, тоді зроблю нормальну перевірку пошти та пароля)))=====
  } else if (!formInputEmail.includes(".")) {
    return alert("Invalid email");
  } else {
    formOutputObj.email = formInputEmail;
    formOutputObj.password = formInputPassword;
    console.log("User:", formOutputObj);
    form.reset();
  }
});

// ==========style========
loginForm.style.display = "flex";
loginForm.style.flexDirection = "column";
loginForm.style.alignItems = "center";
loginForm.style.justifyContent = "center";
loginForm.style.gap = "8px";

formLabel.forEach((label) => {
  label.style.fontWeight = "400";
  label.style.fontSize = "16px";
  label.style.lineHeight = "1.5";
  label.style.letterSpacing = "0.04em";
  label.style.color = "#2e2f42";
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.gap = "8px";
});

formInput.forEach((input) => {
  input.style.fontWeight = "400";
  input.style.fontSize = "16px";
  input.style.lineHeight = "1.5";
  input.style.letterSpacing = "0.04em";
  input.style.border = "1px solid #808080";
  input.style.borderRadius = "4px";
  input.style.width = "360px";
  input.style.height = "40px";
  input.style.paddingLeft = "16px";
});

formBtn.style.fontWeight = "500";
formBtn.style.fontSize = "16px";
formBtn.style.lineHeight = "1.5";
formBtn.style.letterSpacing = "0.04em";
formBtn.style.color = "#fff";
formBtn.style.borderRadius = "8px";
formBtn.style.border = "none";
formBtn.style.padding = "8px 16px";
formBtn.style.backgroundColor = "#4e75ff";
formBtn.style.maxWidth = "86px";
formBtn.style.marginTop = "8px";
formBtn.textContent = "Log in";
formBtn.style.transition =
  "outline 0.3s ease, background-color 0.3s ease, color 0.3s ease";

formBtn.addEventListener("focus", () => {
  formBtn.style.outline = "2px solid black";
  formBtn.style.backgroundColor = "aqua";
  formBtn.style.color = "black";
});

formBtn.addEventListener("mouseover", () => {
  formBtn.style.outline = "2px solid black";
  formBtn.style.backgroundColor = "aqua";
  formBtn.style.color = "black";
});

formBtn.addEventListener("blur", () => {
  formBtn.style.outline = "none";
  formBtn.style.backgroundColor = "#4e75ff";
  formBtn.style.color = "#fff";
});

formBtn.addEventListener("mouseout", () => {
  formBtn.style.outline = "none";
  formBtn.style.backgroundColor = "#4e75ff";
  formBtn.style.color = "#fff";
});
