document.querySelector(".fa-bars").addEventListener("click", function () {
  document.querySelector(".nav-tags").style.display = "block";
  document.querySelector(".fa-x").style.display = "block";
});
document.querySelector(".fa-x").addEventListener("click", function () {
  document.querySelector(".nav-tags").style.display = "none";
  document.querySelector(".fa-x").style.display = "none";
});
