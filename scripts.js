const decidedToCancel = window.confirm('begin the game?')
if (decidedToCancel) {
  let playerScore = 0
  let computerScore = 0
  for (let i = 0; i < 3; i++) {
    let userChoice = window.prompt('input rock, paper or scissors')
    userChoice = userChoice.trim().toLowerCase()
    let computerChoice = ''
    if (userChoice === 'rock' || 'paper' || 'scissors') {
      const randomChoice = Math.random()
      if (randomChoice < 0.34) {
        computerChoice = 'rock'
        window.alert('Computer is ' + computerChoice)
      } else if (randomChoice >= 0.34 && randomChoice < 0.67) {
        computerChoice = 'paper'
        window.alert('Computer is ' + computerChoice)
      } else if (randomChoice >= 0.67) {
        computerChoice = 'scissors'
        window.alert('Computer is ' + computerChoice)
      }
    }
    if (userChoice === 'rock' && computerChoice === 'rock') {
      playerScore += 1
      computerScore += 1
      window.alert('Tie.')
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      playerScore += 0
      computerScore += 1
      window.alert('Computer win the match.')
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      playerScore += 1
      computerScore += 0
      window.alert('Player win the match.')
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      playerScore += 1
      computerScore += 0
      window.alert('player win the match.')
    } else if (userChoice === 'paper' && computerChoice === 'paper') {
      playerScore += 1
      computerScore += 1
      window.alert('Tie')
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      playerScore += 0
      computerScore += 1
      window.alert('Computer win the match.')
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      playerScore += 0
      computerScore += 1
      window.alert('Computer win the match.')
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      playerScore += 1
      computerScore += 0
      window.alert('player win the match.')
    } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
      playerScore += 1
      computerScore += 1
      window.alert('Tie')
    } else {
      playerScore += 0
      computerScore += 1
      window.alert('Computer win the match because you wrong input.')
    }
  }

  if (playerScore === computerScore) {
    window.alert('Tie, Computer get ' + computerScore + ' and you get ' + playerScore)
  } else if (playerScore > computerScore) {
    window.alert('You win!, Computer get ' + computerScore + ' and you get ' + playerScore)
  } else {
    window.alert('You lose!, Computer get ' + computerScore + ' and you get ' + playerScore)
  }
} else {
  window.alert('You end the game.')
}
