import style from "./DisplayProducts.module.css";

const ProductPresent = ({ name, description = null, price, promo = null }) => {
	const priceArrange = price.toLocaleString("fr-FR", {
		style: "currency",
		currency: "EUR",
	});
	return (
		<section className={style["card"]}>
			<p>{name}</p>
			<p>{description}</p>
			<p className={promo ? "isPromo" : null}>{priceArrange}</p>
			{promo ? <p className={style["promo"]}>promo</p> : null}
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
