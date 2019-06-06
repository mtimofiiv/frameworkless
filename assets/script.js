const responsivise = selector => {
  const elements = document.querySelectorAll(selector)

  for (const el of elements) {
    const parentWidth = Number(el.parentElement.offsetWidth)
    const multiplier = (Number(el.dataset.widthPercent) || 100)

    const oldWidth = Number(el.offsetWidth)
    const oldHeight = Number(el.offsetHeight)
    const ratio = (parentWidth * (multiplier / 100)) / oldWidth

    // Resize it
    el.width = parentWidth * (multiplier / 100)
    el.height = ratio * oldHeight

    // Center it
    const margin = (100 - multiplier) / 2
    el.style.marginLeft = margin + '%'
    el.style.marginRight = margin + '%'
  }
}

const init = () => {
  window.addEventListener('resize', () => responsivise('.responsive'))
  responsivise('.responsive')
}

init()
