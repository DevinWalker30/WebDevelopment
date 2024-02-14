const btns = document.querySelectorAll('.btn')

const answers = document.querySelectorAll('.answer')

const linksBtn = document.getElementById('hamburg-menu')

const links = document.querySelector('.links')

// btnOne.addEventListener('click', () => {
//     whichOne(btnOne, answerOne)
//     // btnOne.src = '/imgs/icon-minus.svg'
// })

// function whichOne(source, answer) {
//     if (source.src == '/imgs/icon-plus.svg') {
//         source.src = '/imgs/icon-minus.svg'
//         answer.style.display = 'block'
//     }
//     else if (source.src == '/imgs/icon-minus.svg') {
//         source.src = '/imgs/icon-plus.svg'
//         answer.style.display = 'none'
//     }
// }

btns.forEach(button => {
    console.log(button.src)

    button.addEventListener('click', () => {
        let index = parseInt(button.id)
        if (button.src == 'http://127.0.0.1:5500/imgs/icon-plus.svg') {
            button.src = 'http://127.0.0.1:5500/imgs/icon-minus.svg'
            answers[index].style.display = 'block'
        }
        else if (button.src == 'http://127.0.0.1:5500/imgs/icon-minus.svg') {
            button.src = 'http://127.0.0.1:5500/imgs/icon-plus.svg'
            answers[index].style.display = 'none'
        }
    })
})

linksBtn.addEventListener('click', () => {
    if (links.style.display == 'none') {
        links.style.display = 'flex'
    }
    else if (links.style.display = 'flex') {
        links.style.display = 'none'
    }
})