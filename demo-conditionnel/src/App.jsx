
import './App.css'
import VisitCard from "./components/VisitCard"

function App() {
 

  return (
    <>
      <VisitCard 
      firstname={"Della"}
      lastname={"Duck"}
      jobTitle={"Développeuse"}
      email={"della.duck@interface3.be"}
      />
        <VisitCard 
      firstname={"Zaza"}
      lastname={"VanderQuack"}
      jobTitle={"Développeuse"}
      jobExp={3}
      gender={"F"}
      email={"zaza.vanderquack@interface3.be"}
      />
      <VisitCard 
      firstname={"Balthazar"}
      lastname={"Picsou"}
      jobTitle={"CEO"}
      jobExp={20}
      gender={"H"}
      email={"zaza.vanderquack@interface3.be"}
      />
    </>
  )
}

export default App
