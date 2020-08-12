(async function() {
  console.log('CaseCraft ready!');
  // get elements
  const { hamburgerCircle, crossCircle, arrows } = await (async function() {
    return new Promise((resolve) => {
      window.onload = (event) => {
        let arrows = Array.from(document.getElementsByClassName('arrow'))
        arrows = arrows.map(arrow => arrow.contentDocument.getElementById('arrow'))
        resolve({
          hamburgerCircle: document.getElementById('hamburger')
            .contentDocument.getElementById('circle'),
          crossCircle: document.getElementById('cross')
            .contentDocument.getElementById('circle'),
          arrows
        })
      }
    })
  })()
  const hiddenMenu = document.getElementById('hidden')
  const hiddenNavLinks = document.querySelectorAll('#hidden-nav > nav > ul > li > a')

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
    hiddenMenu.classList.remove('hidden')
    hiddenMenu.classList.add('show')
  })
  // hide hidden menu
  crossCircle.addEventListener('click', event => {
    hiddenMenu.classList.remove('show')
    hiddenMenu.classList.add('hidden')
  })

  const arrowStrokeColor = 'rgb(201, 199, 210)'
  const primaryColor = 'rgb(150, 114, 251)'
  hiddenNavLinks.forEach((hiddenNavLink, idx) => {
    hiddenNavLink.addEventListener('mouseover', event => {
      arrows[idx].style.stroke = primaryColor
    })
    hiddenNavLink.addEventListener('mouseout', event => {
      arrows[idx].style.stroke = arrowStrokeColor
    })
  })
})()
