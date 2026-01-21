window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.style.background = window.scrollY > 50 ? "#062f4f" : "#0b3c5d";
});
