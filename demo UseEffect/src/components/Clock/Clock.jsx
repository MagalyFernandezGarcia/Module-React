import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
	const [hour, setHour] = useState(new Date());

	useEffect(() => {
		const timerId = setTimeout(() => setHour(new Date()), 1000);
		return () => {
			clearTimeout(timerId);
		};
	}, [hour]);

	return <p>{hour.toLocaleTimeString()}</p>;
};

export default Clock;
