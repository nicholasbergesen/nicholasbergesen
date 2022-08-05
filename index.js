function start(flipper) {
    const ticker = document.getElementById('ticker')
    const block = document.getElementById('block')
    if (flipper) {
        block.style.backgroundColor = 'red'
    } else {
        block.style.backgroundColor = 'yellow'
    }
    setTimeout(start, ticker.value, !flipper)
}

function init(e, v) {
    console.log(e)
    console.log(v)
    //start(true)
}