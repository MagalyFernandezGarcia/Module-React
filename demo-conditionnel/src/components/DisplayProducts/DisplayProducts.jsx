import style from "./DisplayProducts.module.css";

const ProductPresent = ({ name, description = null, price, promo = null }) => {
	return (
		<section>
			<p>{name}</p>
			<p>{description}</p>
		</section>
	);
};

const PriceDisplay = ({ price, promo }) => {
	const priceArrange = price.toLocaleString("fr-FR", {
		style: "currency",
		currency: "EUR",
	});
	return (
		<section className={style["price"]}>
			<p>{priceArrange}</p>
			{promo ?? <p className={style["promo"]}>promo</p>}
		</section>
	);
};

const DisplayProducts = ({ productsArray } = []) => {
	const createCard = productsArray.map((product) => (
		<ProductPresent {...product} key={product.id} />
	));

	const priceDisplay = productsArray.map((product) => (
		<PriceDisplay {...product} key={product.name} />
	));

	return (
		<div className={style["cardsContainer"]}>
			{createCard}
			{priceDisplay}
		</div>
	);
};

export default DisplayProducts;
