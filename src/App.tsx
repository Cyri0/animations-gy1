import AnimatedBorder from "./components/AnimatedBorder/AnimatedBorder"
import AnimatedTitle from "./components/AnimatedTitle/AnimatedTitle"
import EmojiWrapper from "./components/Emoji/EmojiWrapper"
import Hammer from "./components/Hammer/Hammer"
import NewtonsCradle from "./components/NewtonsCradle/NewtonsCradle"
import SnowFall from "./components/SnowFall/SnowFall"

const App = () => {
  return (
    <div>

      <Hammer/>
      {/* <EmojiWrapper/>
      <AnimatedBorder/>
      {/* <SnowFall/> */}
      {/* <AnimatedTitle titles={[
        {name:"Hello",bgColor:"orange"},
        {name:"Világ",bgColor:"green"},
        {name:"Hihihi",bgColor:"darkred"},
      ]} /> */}
      {/* <NewtonsCradle/> */}
    </div>
  )
}

export default App