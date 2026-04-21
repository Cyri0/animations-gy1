import styles from "./AnimatedTitle.module.css"

type AnimatedTitleProps = {
    titles: {
        name: string,
        bgColor: string
    }[]
}

const AnimatedTitle = ({titles}:AnimatedTitleProps) => {
  return (
    <div className={styles.animatedTitle}>
      <div>
        {titles.map(title => 
        <div style={{background: title.bgColor}}>
            {title.name}
        </div>)}
      </div>
    </div>
  )
}

export default AnimatedTitle