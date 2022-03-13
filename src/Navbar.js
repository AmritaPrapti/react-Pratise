import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className=" title title--main">The Dojo Blog</h1>
			<div className="list">
				<Link className="text--links" to="/">Home</Link>
				<Link className="text--links" to="/create"> Create New Blog</Link>
			</div>
		</nav>
	);
}

export default Navbar;