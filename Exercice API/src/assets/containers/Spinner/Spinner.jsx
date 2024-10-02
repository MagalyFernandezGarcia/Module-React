import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
	return (
		<ClipLoader
			color="#ffffff"
			loading={loading}
			size={50}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
};

export default Spinner;
