let anchors = document.getElementsByTagName(`a`)

for (let anchor of anchors) {
  anchor.setAttribute(`target`, `_blank`)
  anchor.classList.add(`action_link`)
}

let images = document.getElementsByTagName(`img`)
let icon_path = chrome.runtime.getURL(`icon.jpg`)

for (let img of images) {
  if (img.src.endsWith(`y18.svg`)) {
    img.src = icon_path
  }
}

let textareas = document.getElementsByTagName(`textarea`)

for (let area of textareas) {
  area.rows = 2
}