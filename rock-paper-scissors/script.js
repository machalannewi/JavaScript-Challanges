const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const result = playRound(button.id, computerPlay());
		resultEl.textContent = result;
	});
});

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore++;
		playerScoreEl.textContent = playerScore;
		return "You win! " + playerSelection + " beats " + computerSelection;
	} else {
		computerScore++;
		computerScoreEl.textContent = computerScore;
		return "You lose! " + computerSelection + " beats " + playerSelection;
	}
}

// document.addEventListener("DOMContentLoaded", () => {
// 	const choices = ["rock", "paper", "scissors"];
// 	const resultDiv = document.getElementById("result");

// 	function getComputerChoice() {
// 		const randomIndex = Math.floor(Math.random() * choices.length);
// 		return choices[randomIndex];
// 	}

// 	function determineWinner(playerChoice, computerChoice) {
// 		if (playerChoice === computerChoice) {
// 			return "It's a tie!";
// 		}
// 		if (
// 			(playerChoice === "rock" && computerChoice === "scissors") ||
// 			(playerChoice === "scissors" && computerChoice === "paper") ||
// 			(playerChoice === "paper" && computerChoice === "rock")
// 		) {
// 			return "You win!";
// 		}
// 		return "Computer wins!";
// 	}

// 	function playGame(playerChoice) {
// 		const computerChoice = getComputerChoice();
// 		const result = determineWinner(playerChoice, computerChoice);
// 		resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
// 	}

// 	document
// 		.getElementById("rock")
// 		.addEventListener("click", () => playGame("rock"));
// 	document
// 		.getElementById("paper")
// 		.addEventListener("click", () => playGame("paper"));
// 	document
// 		.getElementById("scissors")
// 		.addEventListener("click", () => playGame("scissors"));
// });
