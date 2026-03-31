import styles from "./AnimatedBorder.module.css"

const AnimatedBorder = () => {
  return (
    <div className={styles.background}>
      <div className={styles.foreground}>Click Me!</div>
    </div>
  )
}

export default AnimatedBorder