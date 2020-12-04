// Injects the SVG sprite into the page
;(() => {
  const ajax = new XMLHttpRequest()
  const spriteURL = process.NODE_EVC === 'production' ? './docs/icons.svg' : './icons.svg'
  ajax.open('GET', spriteURL, true)
  ajax.send()
  ajax.onload = () => {
    const div = document.createElement('div')
    div.setAttribute('hidden', true)
    div.innerHTML = ajax.responseText
    document.body.insertBefore(div, document.body.childNodes[0])
  }
})()
