function start(color) {
    document.getElementById('block').style.backgroundColor = `#${color}`
}

function init(e) {
    const color = (e.screenX * e.screenY, 16)
    start(color)
}