import style from "./DisplayProducts.module.css";

const ProductPresent = ({ name, description, price, promotion }) => {
	const priceArrange = price.toLocaleString("fr-FR", {
		style: "currency",
		currency: "EUR",
	});

	const imgUrl = new URL(`./img/${name}.jpg`, import.meta.url);
	return (
		<section className={style["card"]}>
			<p>{name}</p>
			{/* <img src={"./img/" + name + ".jpg"} alt="" /> */}
			<img className={style["img"]} src={imgUrl.href} alt="" />

			<p>{description}</p>
			{promotion ? (
				<p className={style["isPromo"]}>{priceArrange}</p>
			) : (
				<p>{priceArrange}</p>
			)}

			{promotion ? <p className={style["promo"]}>promo</p> : null}
		</section>
	);
};

const DisplayProducts = ({ productsArray } = []) => {
	const createCard = productsArray.map((product) => (
		<ProductPresent {...product} key={product.id} />
	));

	return <div className={style["cardsContainer"]}>{createCard}</div>;
};

export default DisplayProducts;
