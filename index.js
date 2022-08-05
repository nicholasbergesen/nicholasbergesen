function start(color) {
    document.getElementById('block').style.backgroundColor = `#${color}`
}

function init(e) {
    const color = Math.abs((e.screenX + 1) * (e.screenY + 1)).toString(16)
    start(color)
}