function start(flipper) {
    const ticker = document.getElementById('ticker')
    const block = document.getElementById('block')
    if (flipper) {
        block.style.backgroundColor = 'red'
    } else {
        block.style.backgroundColor = 'yellow'
    }
    console.log(ticker)
    setTimeout(start, ticker.nodeValue, !flipper)
}

function init() {
    start(true)
}