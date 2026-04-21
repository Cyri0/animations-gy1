import styles from "./NewtonsCradle.module.css"

const NewtonsCradle = () => {
  return (
    <div className={styles.cradle}>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
    </div>
  )
}

export default NewtonsCradle