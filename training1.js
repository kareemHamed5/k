let color = document.querySelectorAll('.colors .color div')
let ull = document.getElementById('ul')
let lang = document.querySelectorAll(".about .right .lang .line span")
let exit = document.getElementById('arow')
let min_heder = document.getElementById('min_hedear')
let icons= document.getElementById('icons')
let set =document.getElementById('sit');
let su =document.getElementById('sun');
let hed =document.querySelector('.hedear')
let a = document.querySelectorAll(".header .nav ul li a")



set.onclick = function () {
    icons.classList.toggle('act-co')
}
color.forEach((ele) => { 
    ele.onclick = () => {
        let deta = ele.getAttribute("data-color")
        window.localStorage.setItem('data-color', deta)
        document.documentElement.style.setProperty('--color-or', deta)
    }
})










if (window.localStorage.getItem('data-color') ){
    document.documentElement.style.setProperty('--color-or', window.localStorage.getItem('data-color'))
}

su.onclick = function () {
    document.body.classList.toggle('dark')
}
let span_typing = document.querySelector('.container .left h2 span')

let typing =_=> {
setTimeout(() => {
    span_typing.innerHTML='Front End '
}, 0);
setTimeout(() => {
    span_typing.innerHTML='back end'
}, 4000);
setTimeout (() => {
    span_typing.innerHTML='full stak'
}, 8000);
setTimeout(() => {
    span_typing.innerHTML='ui/ux design'
}, 12000);
}

typing()
setInterval(typing,12000) 



document.querySelector(".wid .fa-arrow-right").addEventListener("click", (e) => {
    document.querySelector(".wid .fa-arrow-right").classList.toggle("i-act")
    document.querySelector(".header").classList.toggle("head-act")
})

let li =document.querySelectorAll(".header .nav ul li a")
let section =document.querySelectorAll(".section")
li.forEach((ele) => {
    ele.onclick = _ => {
        document.querySelector('.active').classList.remove('active')
        ele.classList.add('active')
        let data = ele.getAttribute("data-name")

        section.forEach((s) => {
            s.classList.add("hidden")
        })
        document.querySelector(`.${data}`).classList.remove("hidden")
    }
})













