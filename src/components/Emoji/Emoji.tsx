type EmojiProps = {
    emoji: string,
    text: string
}

const Emoji = ({emoji,text}: EmojiProps) => {
  return (
    <div>{emoji}</div>
  )
}

export default Emoji