function start(color) {
    document.getElementById('block').style.backgroundColor = `#${color}`
}

function init(e) {
    const color = ((Math.abs(e.screenX * 13) * Math.abs(e.screenY * 7)) % 16777215).toString(16)
    start(color)
}