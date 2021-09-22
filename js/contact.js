const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const newRegisterButton = document.getElementById("register1");
const newLoginButton = document.getElementById("login1");

newRegisterButton.onclick = function () {
  container.className = "active";
  document.querySelector(".new-row1").classList.add("d-none");
  document.querySelector(".new-row2").classList.remove("d-none");
};
registerButton.onclick = function () {
  container.className = "active";
  document.querySelector(".new-row1").classList.add("d-none");
  document.querySelector(".new-row2").classList.remove("d-none");
};
newLoginButton.onclick = function () {
  container.className = "close";
  document.querySelector(".new-row1").classList.remove("d-none");
  document.querySelector(".new-row2").classList.add("d-none");
};
loginButton.onclick = function () {
  container.className = "close";
  document.querySelector(".new-row1").classList.remove("d-none");
  document.querySelector(".new-row2").classList.add("d-none");
};
