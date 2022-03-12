import './App.scss';
import Navbar from './Navbar';
import Home from './HomePage';

function App() {
	const title = "Welcome to Our New Project"
	const link = "https://www.facebook.com/"
	return (
		<div className="app">
			<Navbar />
			<div className="app__component">
				<Home />
			</div>
		</div>
	);
}

export default App;
