type AnimatedTitleProps = {
    titles: {
        name: string,
        bgColor: string
    }[]
}

const AnimatedTitle = ({titles}:AnimatedTitleProps) => {
  return (
    <div>
        {titles.map(title => 
        <div style={{background: title.bgColor}}>
            {title.name}
        </div>)}
    </div>
  )
}

export default AnimatedTitle