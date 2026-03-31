import Emoji from "./Emoji"
import styles from "./EmojiWrapper.module.css"

const EmojiWrapper = () => {
  return (
    <div className={styles.emojiWrapper}>
        <Emoji emoji="😎" text="cool" />
        <Emoji emoji="🍌" text="banana!" />
        <Emoji emoji="☠️" text="RIP" />
        <Emoji emoji="👨‍🦽‍➡️" text="let's roll" />
        <Emoji emoji="🤚" text="hi" />
    </div>
  )
}

export default EmojiWrapper