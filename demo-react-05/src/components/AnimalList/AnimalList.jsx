import style from "./animalList.module.scss";

const AnimalItem = ({ id, name, env, nbLeg, onDelete = (id) => {} }) => {
	return (
		<article className={style.animal}>
			<p>
				{name} ({env})
			</p>
			{nbLeg > 0 && <p>Nombre de pattes : {nbLeg}</p>}
			<button
				onClick={() => {
					onDelete(id);
				}}
			>
				❌
			</button>
		</article>
	);
};

const AnimalList = ({ animals, onAnimalDelete }) => {
	return (
		<section>
			{animals.map((animal) => (
				<AnimalItem {...animal} key={animal.id} onDelete={onAnimalDelete} />
			))}
		</section>
	);
};

export default AnimalList;
