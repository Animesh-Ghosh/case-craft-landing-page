(async function() {
  console.log('CaseCraft ready!');
  const circle = await (async function() {
    return new Promise((resolve) => {
      window.onload = (event) => {
        resolve(
          document.getElementById('hamburger')
          .contentDocument.getElementById('circle')
        )
      }
    })
  })()
  const bgColor = 'rgba(246, 246, 249)'
  const fillColor = circle.style.fill
  circle.style.fill = bgColor
  circle.style.stroke = bgColor
  circle.addEventListener('mouseover', event => {
    circle.style.fill = fillColor
    circle.style.stroke = fillColor
  })
  circle.addEventListener('mouseout', event => {
    circle.style.fill = bgColor
    circle.style.stroke = bgColor
  })
})()
