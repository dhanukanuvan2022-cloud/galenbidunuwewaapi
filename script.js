const menuButton = document.getElementById("menu");
const navLinks = document.getElementById("navlinks");
const languageButton = document.getElementById("lang");
let currentLanguage = "si";

menuButton.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-si][data-en]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  languageButton.textContent = language === "si" ? "EN" : "සිං";
  languageButton.setAttribute("aria-label", language === "si" ? "Switch to English" : "සිංහලට මාරු කරන්න");
}
languageButton.addEventListener("click", () => setLanguage(currentLanguage === "si" ? "en" : "si"));
document.getElementById("year").textContent = new Date().getFullYear();
setLanguage("si");
