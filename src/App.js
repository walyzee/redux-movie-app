import React from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";
import TitleSearch from './components/Search/TitleSearch';
import RatingSearch from './components/Search/RatingSearch';
import MovieList from './components/MovieList/MovieList';
import MoviePage from "./components/MoviePage/MoviePage";

class App extends React.Component {
	
	render() {
		return (
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
				<Route path="/movie/:id" component={MoviePage} />
			</Switch>
		)
	}
}

export default App;