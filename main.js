let div = document.createElement('div')

let h = document.createElement('p')
let m = document.createElement('p')
let s = document.createElement('p')

setInterval(() => {
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (hours < 10) {
        h.innerHTML = '0' + hours + ':'
    }else{
        h.innerHTML = hours + ':'
    }

    if (minutes < 10) {
        m.innerHTML = '0' + minutes + ':'
    }else{
        m.innerHTML = minutes + ':'
    }

    if (seconds < 10) {
        s.innerHTML = '0' + seconds;
    }else{
        s.innerHTML = seconds;
    }

    div.append(h, m, s)

    document.body.style.cssText = 'background-color: black'
    div.style.cssText = 'display: flex; color: white; font-size: 100px; justify-content: center'

    document.body.append(div)
}, 1000)



