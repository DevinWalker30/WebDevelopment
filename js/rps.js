const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const resetBtn = document.getElementById('reset')

const result = document.querySelector('.result')
let userScoreTxt = document.querySelector('.user_score')
let compScoreTxt = document.querySelector('.comp_score')
let userScore = 0
let compScore = 0


const userImg = document.querySelector('.user-img')
const computerImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp

// function rockBtnClick() {
//     result.innerText = 'clicked rock'
// }

// function paperBtnClick() {
//     result.innerText = 'clicked paper'
// }

// function scissorsBtnClick() {
//     result.innerText = 'clicked scissors'
// }


rockBtn.addEventListener('click', () => {
    userImg.src = '../imgs/rps_imgs/' + rockBtn.id + '.png'
    // result.style.color = 'red'
    // If using a hyph. word then use caps background-color --> backgroundColor
    compChoice()
    winLose(rockBtn.id)
    bestOfFive()
})
paperBtn.addEventListener('click', () => {
    userImg.src = '../imgs/rps_imgs/' + paperBtn.id + '.png'
    compChoice()
    winLose(paperBtn.id)
    bestOfFive()
})
scissorsBtn.addEventListener('click', () => {
    userImg.src = '../imgs/rps_imgs/' + scissorsBtn.id + '.png'
    compChoice()
    winLose(scissorsBtn.id)
    bestOfFive()
})
resetBtn.addEventListener('click', () => {
    reset()
})



function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    computerImg.src = '../imgs/rps_imgs/' + comp + '.png'
}

function winLose(userChoice) {
    if ((userChoice == 'rock' && comp == 'paper') || (userChoice == 'scissors' && comp == 'rock') || (userChoice == 'paper' && comp == 'scissors')) {
        result.innerText = 'Loss'
        compScore += 1
        compScoreTxt.innerText = compScore
    } else if ((comp == 'rock' && userChoice == 'paper') || (comp == 'paper' && userChoice == 'scissors') || (comp == 'scissors' && userChoice == 'rock')) {
        result.innerText = 'Win'
        userScore += 1
        userScoreTxt.innerText = userScore
    } else if (userChoice == comp) {
        result.innerText = 'Tie'
    }
}

function reset() {
    userImg.src = '../imgs/rps_imgs/rps4.png'
    computerImg.src = '../imgs/rps_imgs/rps4.png'
    result.innerText = 'Start Game'
    userScoreTxt.innerText = '-'
    compScoreTxt.innerText = '-'
    userScore = 0
    compScore = 0
}

function bestOfFive() {
    if ((userScore == 5) || (compScore == 5)) {
        if (userScore == 5) {
            result.innerText = 'You Have Defeated the Computer 5 - ' + compScore
        } else if (compScore == 5) {
            result.innerText = 'Lost to the Computer 5 - ' + userScore
        }
        userScoreTxt.innerText = '-'
        compScoreTxt.innerText = '-'
        userScore = 0
        compScore = 0
    }
}