function start(color) {
    document.getElementById('block').style.backgroundColor = `#${color}`
}

function init(e) {
    const color = ((Math.abs(e.clientX + 1) * Math.abs(e.clientY + 1)) % 16777215).toString(16)
    start(color)
}