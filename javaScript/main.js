const hamburger = document.querySelector("#hero .hamburger")
const header = document.querySelector("header")
const unOrderedList = document.querySelector("#hero .nav ul")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  if (hamburger.classList.contains("active")) {
    header.style.height = "100vh"
    unOrderedList.style.display = "block"
  } else {
    header.style.height = "35px"
    unOrderedList.style.display = "none"
  }
})
