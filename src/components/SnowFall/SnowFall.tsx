import { useEffect, useState } from "react"

type SnowFlakeType = {
    symbol: string,
    xPos: number,
    yPos: number,
    speed: number,
    size: number
}

const SnowFall = () => {
  const snowflakeNumber = 50
  const [snowflakes, setSnowflakes] = useState<SnowFlakeType[]>([])
  
  useEffect(()=>{
    for(let i = 0; i < snowflakeNumber; i++){
        setSnowflakes(prev => [...prev, {
            symbol: "❄️",
            size: Math.floor(Math.random()*2) + 1,
            speed: Math.floor(Math.random()*5) + 1,
            xPos: Math.floor(Math.random()*window.innerWidth) + 1,
            yPos: 100
        }])
    }
  },[])

  return (
    <div>
        {snowflakes.map(snowflake => 
        <div style={{
            fontSize: `${snowflake.size}rem`,
            position: 'absolute',
            left: `${snowflake.xPos}px`,
            top: `${snowflake.yPos}px`,
        }}>
            {snowflake.symbol}
        </div>)}
    </div>
  )
}

export default SnowFall