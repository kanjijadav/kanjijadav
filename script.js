const changeColorBtn = document.getElementById("change-color-btn");
changeColorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".back-to-top").style.display = "block";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }
};

document.querySelector(".back-to-top").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

