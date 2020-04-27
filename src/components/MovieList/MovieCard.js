import React from 'react';
import {connect} from 'react-redux';
import Rating from '../Search/Rating';
import {deleteMovie, editMovie} from '../../Action/actions';
import EditModal from './EditModal';
import {Link} from 'react-router-dom'

const MovieCard = (props) => {
  const {
      movie = {},
      onDelete = () => {},
      onEdit = () => {}
    } = props
  const {
      id,
      title = '',
      year = '',
      image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
      rating = 1
  } = movie
  return (
    <div className="movie-card">
        <div className="movie-rating"><Rating count={rating} /></div>
        <div className ="movie-card-overlay">
            <div className='overlay-btn-wrapper'>
                <EditModal movie={movie} editedMovie={onEdit}/>
                <button className='delete-btn' onClick={() => onDelete(movie)}>Remove</button>
                <Link className='more-link' to={`/movie/${id}`}><button className='more-btn'>Show more</button></Link>
            </div>
        </div>
        <div
            className="movie-image"
            style={{
            backgroundImage:
                `url('${image}')`
            }}
        />
        <div className="movie-description">{title} - {year}</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    onDelete : (payload) => dispatch (deleteMovie(payload)),
    onEdit : (payload) => dispatch (editMovie(payload)),
})

export default connect(null,mapDispatchToProps)(MovieCard);