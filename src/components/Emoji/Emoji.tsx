import styles from "./Emoji.module.css"

type EmojiProps = {
    emoji: string,
    text: string
}

const Emoji = ({emoji,text}: EmojiProps) => {
  return (
    <div className={styles.emoji} data-before={text}>{emoji}</div>
  )
}

export default Emoji