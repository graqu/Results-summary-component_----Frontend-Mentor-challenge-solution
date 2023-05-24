const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.change-data-btn')
const submitChangesBtn = document.querySelector('.submit-stats')
const userInputs = document.querySelectorAll('.userInput')
const pointsValues = document.querySelectorAll('.points')

const reactionInput = document.querySelector('#reaction')
const memoryInput = document.querySelector('#memory')
const verbalInput = document.querySelector('#verbal')
const visualInput = document.querySelector('#visual')

let reactionLvl = 80
let memoryLvl = 92
let verbalLvl = 61
let visualLvl = 72
let finalPoints = 76

const handleModal = () => {
	modal.classList.toggle('show')
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
}

openModalBtn.addEventListener('click', handleModal)
submitChangesBtn.addEventListener('click', handleStats)
