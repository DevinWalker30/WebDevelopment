const btns = document.querySelectorAll('.img')

const colArrows = document.querySelectorAll('.arrow')

const menus = document.querySelectorAll('.menu')

const menu = document.getElementById('hamburg')

const colMenus = document.querySelectorAll('.col-menu')

const colMenu = document.querySelector('.collapse-menu')

const x = document.getElementById('x')

const linkLog = document.getElementById('link-log')

btns.forEach(button => {

    button.addEventListener('click', () => {
        let index = parseInt(button.id)
        if (button.src == 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-up.svg') {
            button.src = 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-down.svg'
            console.log(menus)
            menus[index].style.display = 'flex'
        }
        else if (button.src == 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-down.svg') {
            button.src = 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-up.svg'
            menus[index].style.display = 'none'
        }
    })
})

colArrows.forEach(button => {

    button.addEventListener('click', () => {
        let index = parseInt(button.id)
        if (button.src == 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-up.svg') {
            button.src = 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-down.svg'
            console.log(colMenus)
            colMenus[index].style.display = 'flex'
            colMenu.style.display = 'flex'
            linkLog.style.display = 'flex'
        }
        else if (button.src == 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-down.svg') {
            button.src = 'http://127.0.0.1:5500/imgs/intro-sec-imgs/icon-arrow-up.svg'
            colMenus[index].style.display = 'none'
            colMenu.style.display = 'flex'
            linkLog.style.display = 'flex'
        }
    })
})

menu.addEventListener('click', () => {
    colMenu.style.display = 'flex'
    linkLog.style.display = 'flex'
})

x.addEventListener('click', () => {
    colMenu.style.display = 'none'
    linkLog.style.display = 'none'
})