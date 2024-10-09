import { useSelector } from "react-redux";
import { StateStore } from "../../store/store";
import Loader from "../../components/Loader/Loader";

const CountryResult = () => {
	const { isLoading, data, error } = useSelector(
		(state: StateStore) => state.countries
	);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : data ? (
				<CountryResultData {...data} />
			) : (
				error && <p>{error}</p>
			)}
		</>
	);
};

type CountryResultDataProps = { name: string; flag: string; capital: string[] };
const CountryResultData = ({ name, flag, capital }: CountryResultDataProps) => {
	return (
		<>
			<p>
				{name} {flag}
			</p>
			<p>{capital.join(", ")}</p>
		</>
	);
};

export default CountryResult;
