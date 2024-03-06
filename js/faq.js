const btns = document.querySelectorAll('.btn')

const answers = document.querySelectorAll('.answer')

const linksBtn = document.getElementById('hamburg-menu')

const links = document.querySelector('.links')

const stockPrice = document.querySelector('.output')

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
    // console.log(button.src)

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



const url = 'https://yahoo-finance127.p.rapidapi.com/price/eth-usd';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '396bcd6bf8msh21afe07df2440ffp1c890ejsn12fe4097bc7d',
		'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
	}
};

async function getPrice() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.exchange);
    } catch (error) {
        console.error(error);
    }
}

getPrice()