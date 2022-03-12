const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className=" title title--main">The Dojo Blog</h1>
			<div className="list">
				<a className="text--links" href="/">Home</a>
				<a className="text--links" href="/create"> Create New Blog</a>
			</div>
		</nav>
	);
}

export default Navbar;