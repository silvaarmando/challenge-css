const html = document.querySelector('html')
const checkbox =document.querySelector('input[name=theme]')

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
  background: getStyle(html, "--background"),
  backgroundPanel: getStyle(html, "--bakcground-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
}

const darkMode = {
  background: "#333333",
  backgroundPanel: "#454545",
  colorHeadings: "#a23af8",
  colorText: "#b5b5b5"
}

const transformKey = key =>
  "--" + key
    .replace(/([A-Z])/, "-$1")
    .toLowerCase()

const changeColors = (colors) => {
  Object
    .keys(colors)
    .map(key =>
      html
        .style
        .setProperty(transformKey(key), colors[key])
  )
}

checkbox.addEventListener('change', ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})