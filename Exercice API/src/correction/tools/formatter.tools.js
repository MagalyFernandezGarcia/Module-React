export function formatToCelsius(temperature) {
	return temperature.toLocaleString("fr-BE", {
		style: "unit",
		unit: "celsius",
		maximumFractionDigits: 1,
	});
}
