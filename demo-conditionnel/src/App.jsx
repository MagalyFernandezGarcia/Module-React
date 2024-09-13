import "./App.css";
import DisplayProducts from "./components/DIsplayProducts/DisplayProducts";

import PeopleTable from "./components/PeopleTable/PeopleTable";
import VisitCard from "./components/VisitCard/VisitCard";
import people from "./data/people.json";
import products from "./data/product.json";

function App() {
	return (
		<>
			{/* <VisitCard
				firstname={"Della"}
				lastname={"Duck"}
				jobTitle={"Développeuse"}
				email={"della.duck@interface3.be"}
			/> */}
			{/* <VisitCard 
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
      /> */}

			{/* <PeopleTable peopleArray={people} /> */}

			<DisplayProducts productsArray={products} />
		</>
	);
}

export default App;
