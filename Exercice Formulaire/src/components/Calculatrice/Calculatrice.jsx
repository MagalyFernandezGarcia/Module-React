import { useState } from "react";
import "./calculatrice.css";

const Calculatrice = () => {
	const [numberOne, setNumberOne] = useState("");
	const [numberTwo, setNumberTwo] = useState("");
	const [operator, SetOperator] = useState("+");
	const [result, SetResult] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		//attention eval => grosse faille de sécurité, à éviter absolument, dans ce cas-ci, préférer le switch
		// SetResult(eval(`${numberOne} ${operator} ${numberTwo}`));

		const val1 = parseFloat(numberOne);
		const val2 = parseFloat(numberTwo);

		switch (operator) {
			case "+":
				SetResult(val1 + val2);
				break;
			case "-":
				SetResult(val1 - val2);
				break;
			case "*":
				SetResult(val1 * val2);
				break;
			case "/":
				if (numberTwo === 0 || numberOne === 0) {
					SetResult("L'opération est imposible");
				} else {
					SetResult(val1 / val2);
				}
				break;
			default:
				SetResult("L'opération n'est pas supportée");
				break;
		}
	};

	const handleNumberInputChange = (event, setNumber) => {
		const numberRegex = /^[0-9]*([0-9]\.[0-9]*)?$/;
		const nb = event.taget.value;

		if (numberRegex(nb)) {
			setNumber(nb);
		}
	};

	return (
		<>
			<h1>La Calculatrice</h1>
			<form onSubmit={handleSubmit} className="calcForm">
				<div>
					<label htmlFor="numberOne">Premier nombre</label>
					<input
						type="text"
						name="numberOne"
						value={numberOne}
						onChange={(event) => setNumberOne(event.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="">Opérateur</label>
					<select
						name="operator"
						id="operator"
						onChange={(event) => SetOperator(event.target.value)}
					>
						<option value="+" name="operator">
							+
						</option>
						<option value="-" name="operator">
							-
						</option>
						<option value="*" name="operator">
							*
						</option>
						<option value="/" name="operator">
							/
						</option>
					</select>
				</div>
				<div>
					<label htmlFor="numberTwo">deuxième nombre</label>
					<input
						type="text"
						name="numberTwo"
						value={numberTwo}
						onChange={(event) => setNumberTwo(event.target.value)}
					/>
				</div>
				<div>
					<button type="submit">Calculer</button>
				</div>
				<div>
					<input type="text" value={result} readOnly />
				</div>
			</form>
		</>
	);
};

export default Calculatrice;
