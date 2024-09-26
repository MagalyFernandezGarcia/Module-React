const DateOfDay = () => {
	const today = new Date().toLocaleDateString("fr-BE", {
		day: "2-digit",
		weekday: "long",
		month: "long",
		year: "numeric",
	});
	return <p>{today}</p>;
};

export default DateOfDay;
