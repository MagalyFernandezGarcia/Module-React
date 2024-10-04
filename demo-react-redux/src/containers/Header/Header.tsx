type HeaderProps = {
	fact?: string;
};

const Header = ({ fact }: HeaderProps) => {
	return (
		<header>
			{" "}
			<span>React 💖 Redux</span>
			{fact && <span> info : {fact}</span>}
		</header>
	);
};

export default Header;
