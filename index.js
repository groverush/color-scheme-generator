const colorBtn = document.getElementById('color-button')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const color4 = document.getElementById('color4')
const color5 = document.getElementById('color5')

document.addEventListener('change', getSchemeColorPicker)
colorBtn.addEventListener('click', renderColors)

let colors = []
let color = 'F55A5A'
let scheme = 'monochrome'

function renderColors() {
  color1.style.backgroundColor = colors[0].hex.value
  color2.style.backgroundColor = colors[1].hex.value
  color3.style.backgroundColor = colors[2].hex.value
  color4.style.backgroundColor = colors[3].hex.value
  color5.style.backgroundColor = colors[4].hex.value
  const hexHtml = colors
    .map((color) => {
      return `
      <h3>${color.hex.value}</h3>
    `
    })
    .join('')
  document.getElementById('colors-hex').innerHTML = hexHtml
}

fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
  .then((res) => res.json())
  .then((data) => {
    colors = data.colors

    renderColors()
  })

function getSchemeColorPicker(e) {
  if (e.target.id === 'color-input') {
    color = e.target.value.slice(1)
  } else if (e.target.id === 'color-scheme') {
    scheme = e.target.value
  }
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
    .then((res) => res.json())
    .then((data) => {
      colors = data.colors
    })
}
