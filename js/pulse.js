const LinksBtn = document.querySelector('links-btn')
const SignUpBtn = document.querySelector('sign-up')
const TryPremiumBtn = document.querySelector('try-premium')
const SignUpThirtyBtn = document.querySelector('sign-up-thirty')

let PlanMid = document.querySelector('plan-mid')

SignUpBtn.addEventListener('click', () => {
    PlanMid.innerText = prompt('Name:')
})