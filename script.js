function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/AVATAR2.png")
  }
  const alt = document.querySelector("#profile alt")
  if (html.classList.contains("light")) {
    alt.setAttribute("alt")
  } else {
    alt.setAttribute("alt")
  }
}

/*
  if (html.classList.contains("light")) {
    html.classList.romove("light")
  } else {
    html.classList.add("light")
  }
 */
