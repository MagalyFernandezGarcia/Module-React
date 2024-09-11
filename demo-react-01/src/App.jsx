import MultiTwo from "./components/multiDeux/multiTwo.jsx"
import Welcome from "./components/welcome/welcome"
import WelcomeAge from "./components/welcomeAge/WelcomeAge.jsx"


function App() {
  

  return (
    <>
    <h1>Demo 01</h1>
    {/* <Welcome firstname="John" lastname="Doe"/>
    <MultiTwo number={42}/> */}
    <WelcomeAge name={"Bobby"} age={18}/>
    </>
  )
}

export default App
