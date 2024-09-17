
window.onload = setInterval(function time(){
    let t = new Date()
    hrs= t.getHours()
    min= t.getMinutes()
    sec= t.getSeconds()
    let h = document.getElementById("hour")
    h.textContent = hrs +"  " + ":"
    let m = document.getElementById("minute")
    m.textContent = min +"  " + ":"
    let s = document.getElementById("second")
    s.textContent = sec
},1000)

