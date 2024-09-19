import logo from "./images/logo.png";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="Logo du site" className="logo" />
			<p className="title">Demo des formulaires</p>
		</header>
	);
};

export default Header;
