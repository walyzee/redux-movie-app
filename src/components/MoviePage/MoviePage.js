import React from 'react';
import {connect} from "react-redux";
import './MoviePage.css';
import {Link} from 'react-router-dom';
import Rating from '../Search/Rating';

const MoviePage = (props) => {
  return (
    <div className="movie-container">
      {props.movies.map((movie) => movie.id === Number(props.match.params.id) && (
          <div key={movie.id} className='movie-wrapper'>
            <img src={movie.image} alt={movie.title} width='500'/>
            <div className='movie-content'>
              <h1 className='title'>{movie.title}</h1>
              <div className='rating'>Rating : <Rating count={movie.rating} /></div>
              {movie.description && <div className='description'>{movie.description}</div>}
              <Link type='button' className='home-btn' to='/'>Back to homepage</Link>
            </div>
          </div>
        ) 
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies : state.movies
})

export default connect(mapStateToProps)(MoviePage);