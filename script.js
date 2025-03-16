const computerChoiceFinal = document.getElementById("computer-choice")
const userChoiceFinal = document.getElementById("your-choice")
const resultDisp = document.getElementById("result")
const computerImage = document.getElementById("computer-image")
const yourImage = document.getElementById("your-image")
const resetButton = document.getElementById("reset")

const possibleChoices = document.querySelectorAll(".choice-button")
const choices = ["rock", "paper", "scissors"]

// Image URLs - replace with actual image URLs if you have them
const imageUrls = {
  rock: "https://v0.dev/placeholder.svg?height=50&width=50",
  paper: "https://v0.dev/placeholder.svg?height=50&width=50",
  scissors: "https://v0.dev/placeholder.svg?height=50&width=50",
}

// Preload images
const images = {}
for (const choice of choices) {
  images[choice] = new Image()
  images[choice].src = imageUrls[choice]
  images[choice].alt = choice
  images[choice].className = "choice-image"
}

let userChoice
let computerChoice
let result

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.currentTarget.id
    userChoiceFinal.innerHTML = userChoice

    // Display user choice image
    yourImage.innerHTML = ""
    const img = images[userChoice].cloneNode(true)
    yourImage.appendChild(img)

    generateComputerChoice()
    getResult()
  })
})

resetButton.addEventListener("click", () => {
  resetGame()
})

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3)
  computerChoice = choices[randomNum]
  computerChoiceFinal.innerHTML = computerChoice

  // Display computer choice image
  computerImage.innerHTML = ""
  const img = images[computerChoice].cloneNode(true)
  computerImage.appendChild(img)
}

function getResult() {
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    result = "Computer wins!"
    resultDisp.className = "result lose"
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "rock" && computerChoice === "scissors")
  ) {
    result = "You win!"
    resultDisp.className = "result win"
  } else if (userChoice === computerChoice) {
    result = "It's a tie!"
    resultDisp.className = "result tie"
  }

  resultDisp.innerHTML = result

  // Add animation effect
  resultDisp.animate(
    [
      { opacity: 0, transform: "translateY(-10px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    {
      duration: 300,
      easing: "ease-out",
    },
  )
}

function resetGame() {
  userChoiceFinal.innerHTML = ""
  computerChoiceFinal.innerHTML = ""
  resultDisp.innerHTML = ""
  yourImage.innerHTML = ""
  computerImage.innerHTML = ""
  resultDisp.className = "result"
}

// Initialize button images
document.getElementById("rock-img").src = imageUrls.rock
document.getElementById("paper-img").src = imageUrls.paper
document.getElementById("scissors-img").src = imageUrls.scissors

