import './index.css'

const WinOrLoseCard = props => {
  const {wonOrLoseLists, playAgainButton} = props
  const {title, imageUrl, scoreTitle, score, altValue} = wonOrLoseLists[0]

  const onPlayAgain = () => {
    playAgainButton()
  }

  return (
    <>
      <nav className="navbar">
        <div className="emoji-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="nav-logo"
          />
          <p className="emoji-nav"> Emoji Game</p>
        </div>
      </nav>
      <div className="score-card">
        <div className="score-card1">
          <div className="details-container">
            <h1 className="won-head">{title}</h1>
            <p className="won-para">{scoreTitle}</p>
            <p className="won-score">{score}/12</p>
            <button type="button" className="play-button" onClick={onPlayAgain}>
              Play Again
            </button>
          </div>
          <img src={imageUrl} className="won-image" alt="win or lose" />
        </div>
      </div>
    </>
  )
}

export default WinOrLoseCard
