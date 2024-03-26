const btns = document.querySelectorAll('.btn')

const answers = document.querySelectorAll('.answer')

const linksBtn = document.getElementById('hamburg-menu')

const links = document.querySelector('.links')

const stockPrice = document.querySelector('.output')

const currentCity = document.getElementById('city')

const currentDate = document.getElementById('date')

const currentTime = document.getElementById('time')

const weathImg = document.getElementById('weath-img')

let currentTemp = document.getElementById('temp')

const desc = document.getElementById('desc')

const apiKey = '5c244f90ff05ec5b3599c24d38b1ead7'

const geoapifyKey = `88c9632fe6344b19ac505a1f6a4d8df4`

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



// const url = 'https://yahoo-finance127.p.rapidapi.com/price/eth-usd';
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

const dateObject = new Date()
const day = dateObject.getDate()
const month = dateObject.getMonth()+1
const year = dateObject.getFullYear()
let hour = dateObject.getHours()
let minute = dateObject.getMinutes()
let amPm = 'AM'
const clouds = ['few clouds', 'scattered clouds', 'broken clouds', 'overcast clouds']
const rain = ['shower rain', 'rain', 'mist', 'moderate rain']
let lat = 43.6591
let lon = -70.2568
let geoapifyUrl = `https://api.geoapify.com/v1/ipinfo?apiKey=${geoapifyKey}`
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`


if (minute < 10) {
    minute = '0' + minute.toString()
}

if (hour > 12) {
    hour = hour - 12
    amPm = 'PM'
}

if (hour == 12) {
    amPm = 'PM'
}

let time = `${hour}:${minute} ${amPm}`
let date = `${month}-${day}-${year}`

currentTime.innerText = time
currentDate.innerText = date

async function getWeather() {
    try {
        const given = await fetch(geoapifyUrl)
        const info = await given.json()
        lat = info.location.latitude
        lon = info.location.longitude
        let city = info.city.name
        let state = info.state.name
        currentCity.innerText = `${city}, ${state}`
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        const data = await response.json()
        currentTemp.textContent = `${Math.round(data.main.temp)}°F`
        let description = data.weather[0].main
        let condition = data.weather[0].description
        desc.textContent = description
        console.log(condition)

        if (clouds.includes(condition)) {
            img = 'partly-cloudy.png'
        }
        else if (rain.includes(condition)) {
            img = 'rain.png'
        }
        else if (condition == 'thunderstorm') {
            img = 'rain-storm.png'
        }
        else if (condition == 'snow') {
            img = 'snow.png'
        }
        else {
            img = 'sunny.png'
        }

        weathImg.src = `../imgs/${img}`

    } catch (error) {
        console.error(error)
    }
}

getWeather()