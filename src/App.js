import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import TitleSearch from './components/Search/TitleSearch';
import RatingSearch from './components/Search/RatingSearch';
import MovieList from './components/MovieList/MovieList';
import MoviePage from "./components/MoviePage/MoviePage";

class App extends React.Component {
	
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/'>
						<div className="App">
							<header className="header-container">
							<TitleSearch/>
							<RatingSearch />
							</header>
							<main className="main-container">
								<MovieList />
							</main>
						</div>
					</Route>
					<Route exact path="/movie/:id" component={MoviePage} />
				</Switch>
			</Router>
		)
	}
}

export default App;