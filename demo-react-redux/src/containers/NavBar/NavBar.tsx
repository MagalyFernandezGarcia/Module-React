import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/grocery">Course</Link>
					</li>
					<li>
						<Link to="/bowser">Perdu?</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
