import { useDispatch } from "react-redux";
import { countrySearch } from "../../store/countries/countries.action";
import SearchBarrCorr from "../../components/SearchBarCorr/SearchBarrCorr";



const CountryRequest = () => {
    const dispatch = useDispatch<any>()
    const handleSearch =(name :string){
        dispatch(countrySearch(name))
        
    }
	return (
		<>
			<SearchBarrCorr onSearchCorr={handleSearch}/>
		</>
	);
};

export default CountryRequest;
