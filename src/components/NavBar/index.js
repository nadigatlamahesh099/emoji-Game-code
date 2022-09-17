import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navbar">
      <div className="emoji-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-logo"
        />
        <h1 className="emoji-nav"> Emoji Game</h1>
      </div>
      <div className="emoji-logo">
        <p className="para">Score: {score}</p>
        <p className="para">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
