import { useEffect, useState } from "react"

type SnowFlakeType = {
    symbol: string,
    xPos: number,
    yPos: number,
    speed: number,
    size: number
}

const SnowFall = () => {
    const snowflakeNumber = 30
    const [snowflakes, setSnowflakes] = useState<SnowFlakeType[]>([])

    useEffect(() => {
        for (let i = 0; i < snowflakeNumber; i++) {
            setSnowflakes(prev => [...prev, {
                symbol: "❄️",
                size: Math.floor(Math.random() * 2) + 1,
                speed: Math.floor(Math.random() * 5) + 5,
                xPos: Math.floor(Math.random() * window.innerWidth) + 1,
                yPos: Math.floor(Math.random() * window.innerHeight) + 1
            }])
        }

        window.addEventListener("resize", () => {
            console.log("Event listener added");

            setSnowflakes(prev => prev.map(snowflake => {
                return {
                    ...snowflake,
                    xPos: Math.floor(Math.random() * window.innerWidth) + 1,
                }
            }))
        })

        const intervalId = setInterval(() => {
            setSnowflakes(prev => prev.map(snowflake => {
                let newY = window.innerHeight < snowflake.yPos ?
                    0 :
                    snowflake.yPos + snowflake.speed;
                return {
                    ...snowflake,
                    yPos: newY,
                }
            }))
        }, 30)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            zIndex: -1
        }}>
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