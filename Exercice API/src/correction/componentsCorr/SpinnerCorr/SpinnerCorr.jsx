import style from "./spinnerStyle.module.css";

const SpinnerCorr = () => {
	return (
		<div className={style["lds-ripple"]}>
			<div></div>
			<div></div>
		</div>
	);
};

export default SpinnerCorr;
