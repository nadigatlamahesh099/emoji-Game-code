import './index.css'

const EmojiCard = props => {
  const {cardDetails, changeEmoji} = props
  const {emojiUrl, emojiName} = cardDetails

  const onChangeEmoji = event => {
    changeEmoji(event)
  }

  return (
    <li className="each-list">
      <button type="button" className="emoji-button" onClick={onChangeEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
