import React from 'react';
import {connect} from 'react-redux';
import Rating from './Rating';
import {searchRating} from '../../Action/actions';


const RatingSearch = ({onChange = () => {}, count = 1}) => (
    <div className="search-rating">
        <span className="search-rating-text">Minimum rating</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} 
        />
    </div>
)

const mapStateToProps = (state) => ({
    count : state.ratingSearch
})

const mapsDispatchToProps = (dispatch) => ({
    onChange : (payload) => dispatch(searchRating(payload)),
})
    
export default connect(mapStateToProps,mapsDispatchToProps) (RatingSearch)