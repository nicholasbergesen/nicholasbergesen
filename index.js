function start(flipper) {
    const block = document.getElementById("block")
    if (flipper) {
        block.style.backgroundColor = 'red'
    } else {
        block.style.backgroundColor = 'green'
    }

    setTimeout(() => { start(!flipper) }, 100)
}

start(true)