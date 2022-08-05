function start(flipper) {
    const block = document.getElementById('block')
    if (flipper) {
        block.style.backgroundColor = 'red'
    } else {
        block.style.backgroundColor = 'yellow'
    }
    console.log("updated")
    setTimeout(start, 1000, !flipper)
}

function init() {
    start(true)
}