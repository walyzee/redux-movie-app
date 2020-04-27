import React from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import {addMovie} from '../../Action/actions';


const MovieList = ({movies = [], onAddMovie = () => {}}) => (
    <div className="movie-list">
        {
            movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
        <AddMovie newMovie={onAddMovie} />
    </div>
)

const mapStateToProps = (state) => ({
    movies : state.movies.filter(el => el.rating >= state.ratingSearch && el.title.toLowerCase().includes(state.titleSearch.toLowerCase().trim()))
})

const mapDispatchToProps = (dispatch) => ({
    onAddMovie : (newMovie) => dispatch(addMovie(newMovie))
})

export default connect (mapStateToProps,mapDispatchToProps) (MovieList);