let sideBar = document.getElementById('side-bar')

function OpenClose() {
    sideBar.classList.toggle('close')
}


window.addEventListener("resize", () => {
    if (window.innerWidth < 945) {
        sideBar.classList.add('close')
    } else {
        sideBar.classList.remove('close')
    }
});


let slideList = document.querySelectorAll('.side-bar .side-menu li a:not(.logout)')
slideList.forEach(item => {
    const li = item.parentElement
    item.addEventListener('click', () => {
        slideList.forEach(i => {
            i.parentElement.classList.remove('active')
        })
        li.classList.add('active')

    })

})


let togger = document.getElementById('theme-toogle')
let nav = document.querySelector('.content nav')
let contenr = document.querySelector('body')


function DarkMod() {
    sideBar.classList.toggle('dark')
    nav.classList.toggle('dark')
    contenr.classList.toggle('dark')
}