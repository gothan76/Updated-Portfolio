var body = document.getElementById("body");
var day = document.getElementById("day");
var night = document.getElementById("night");
body.style.overflowX = "hidden";
body.style.background = "linear-gradient(white,rgb(215, 142, 215),gray)";

day.addEventListener("click", () => {
  body.style.background = "linear-gradient(skyblue,white,skyblue)";
  night.style.display = "block";
  day.style.display = "none";
});
night.addEventListener("click", () => {
  body.style.background = "linear-gradient(white,rgb(215, 142, 215),gray)";
  night.style.display = "none";
  day.style.display = "block";
});

// contact page
function mail() {
  location.href = "mailto:gothandaraman314@gmail.com";
}
function link() {
  location.href = "https://www.linkedin.com/in/gothanda-raman-261513274";
}
