const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.change-data-btn')
const submitChangesBtn = document.querySelector('.submit-stats')
const userInputs = document.querySelectorAll('.userInput')
const pointsValues = document.querySelectorAll('.points')
const scoreCircle = document.querySelector('.result-box__point-circle')
const mainScore = document.querySelector('.main-score')

const reactionInput = document.querySelector('#reaction')
const memoryInput = document.querySelector('#memory')
const verbalInput = document.querySelector('#verbal')
const visualInput = document.querySelector('#visual')

let reactionLvl = 80
let memoryLvl = 92
let verbalLvl = 61
let visualLvl = 72
let finalPoints = 76
let points = 0

const handleModal = () => {
	if (modal.classList.contains('show')) {
		modal.classList.remove('show')
	} else {
		modal.classList.add('show')
		reactionInput.value = ''
		memoryInput.value = ''
		verbalInput.value = ''
		visualInput.value = ''
		userInputs.length = ''
	}
}
const handleStats = () => {
	handleInputs()
	changeMainData()
	showNewStats()
	handleModal()
}

const handleInputs = () => {
	userInputs.forEach(input => {
		if (input.value <= 0) {
			input.value = 0
		} else if (input.value >= 100) {
			input.value = 100
		} else {
			{
			}
		}
	})
}

const changeMainData = () => {
	reactionLvl = parseInt(reactionInput.value)
	memoryLvl = parseInt(memoryInput.value)
	verbalLvl = parseInt(verbalInput.value)
	visualLvl = parseInt(visualInput.value)
	nOfParams = parseInt(userInputs.length)

	finalPoints = Math.round((reactionLvl + memoryLvl + verbalLvl + visualLvl) / nOfParams)

	return finalPoints
}

const showNewStats = () => {
	pointsValues.forEach(parameter => {
		parName = parameter.getAttribute('data-parameter')
		switch (parName) {
			case 'reaction':
				parameter.textContent = reactionLvl
				break
			case 'memory':
				parameter.textContent = memoryLvl
				break
			case 'verbal':
				parameter.textContent = verbalLvl
				break
			case 'visual':
				parameter.textContent = visualLvl
				break
		}
	})
	animateStats()
}
const changeFinalStat = () => {
	let angle
	if (points < finalPoints) {
		points++
	}
	mainScore.textContent = parseInt(points)
	angle = Math.round(3.6 * points)
	scoreCircle.style.backgroundImage = `conic-gradient(hsl(${points}, 100%, 37%) ${angle}deg, var(--Violet-blue) 0deg)`
}
const animateStats = () => {
	points = 0
	const time = 1500
	const aInterval = parseInt(time / finalPoints)
	const increasing = setInterval(changeFinalStat, aInterval)
	setTimeout(() => {
		clearInterval(increasing)
	}, time)
}

openModalBtn.addEventListener('click', handleModal)
submitChangesBtn.addEventListener('click', handleStats)
animateStats()

//Testing functionality

// const changeValue = e => {
// 	if (e.key === 'ArrowUp') {
// 		finalPoints++
// 	} else {
// 		finalPoints--
// 	}
// 	changeFinalStat()
// }

// window.addEventListener('keydown', e => {
// 	if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
// 		changeValue(e)
// 	}
// })
