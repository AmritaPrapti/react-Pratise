import './App.scss';
import Navbar from './Navbar';
import Home from './HomePage';
import Create from './Create';
import BlogDetail from './BlogDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
	const title = "Welcome to Our New Project"
	const link = "https://www.facebook.com/"
	return (
		<Router>
			<div className="app">
				<Navbar />
				<div className="app__component">
					<Routes>
						<Route exact path="/" element={<Home />}></Route>	
						<Route exact path="/create" element={<Create />}></Route>		
            <Route exact path="/blogs/:id" element={<BlogDetail />}></Route>	
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
