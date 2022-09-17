/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    navState: false,
    filteredList: [],
    wonOrLoseList: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  changeEmoji = event => {
    const {emojisList} = this.props
    const {filteredList, score} = this.state
    this.setState(prevState => ({
      filteredList: [...prevState.filteredList, event.target.alt],
    }))

    if (filteredList.includes(event.target.alt)) {
      if (score === emojisList.length) {
        this.setState({
          navState: true,
          wonOrLoseList: [
            {
              title: 'You Won',
              imageUrl:
                'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
              scoreTitle: 'Best Score',
              altValue: 'win',
              score,
            },
          ],
        })
      } else {
        this.setState({
          navState: true,
          wonOrLoseList: [
            {
              title: 'You Lose',
              imageUrl:
                'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
              scoreTitle: 'Score',
              altValue: 'lose',
              score,
            },
          ],
        })
      }
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }
  }

  playAgainClick = () => {
    const {topScore, score} = this.state
    if (score > topScore) {
      this.setState(prevState => ({
        navState: false,
        score: 0,
        topScore: prevState.score,
        filteredList: [],
      }))
    } else {
      this.setState(prevState => ({
        navState: false,
        score: 0,
        topScore: prevState.topScore,
        filteredList: [],
      }))
    }
  }

  render() {
    const {score, topScore, wonOrLoseList, navState} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <>
        {navState ? (
          <WinOrLoseCard
            wonOrLoseLists={wonOrLoseList}
            playAgainButton={this.playAgainClick}
          />
        ) : (
          <div className="main-container">
            <NavBar score={score} topScore={topScore} />
            <ul className="emoji-container">
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  cardDetails={eachEmoji}
                  changeEmoji={this.changeEmoji}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default EmojiGame
