(async function() {
  console.log('CaseCraft ready!');
  // get elements
  const { hamburgerCircle, crossCircle } = await (async function() {
    return new Promise((resolve) => {
      window.onload = (event) => {
        resolve({
          hamburgerCircle: document.getElementById('hamburger')
          .contentDocument.getElementById('circle'),
          crossCircle: document.getElementById('cross')
          .contentDocument.getElementById('circle')
        })
      }
    })
  })()
  const hiddenMenu = document.getElementById('hidden')

  // get colours
  const bgColor = 'rgba(246, 246, 249)'
  const fillColor = hamburgerCircle.style.fill

  // set default colours
  hamburgerCircle.style.fill = bgColor
  hamburgerCircle.style.stroke = bgColor

  // event listeners
  // on hover hamburger
  hamburgerCircle.addEventListener('mouseover', event => {
    hamburgerCircle.style.fill = fillColor
    hamburgerCircle.style.stroke = fillColor
  })
  hamburgerCircle.addEventListener('mouseout', event => {
    hamburgerCircle.style.fill = bgColor
    hamburgerCircle.style.stroke = bgColor
  })
  // show hidden menu
  hamburgerCircle.addEventListener('click', event => {
    hiddenMenu.classList.add('show')
  })
  // hide hidden menu
  crossCircle.addEventListener('click', event => {
    hiddenMenu.classList.remove('show')
  })
})()
