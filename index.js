function start(flipper) {
    const block = document.getElementById('block')
    if (flipper) {
        block.style.backgroundColor = 'red'
    } else {
        block.style.backgroundColor = 'yellow'
    }
    console.log("updated")
    setTimeout(function() {
        start(!flipper);
    }, 200)
}

function init() {
    start(true)
}