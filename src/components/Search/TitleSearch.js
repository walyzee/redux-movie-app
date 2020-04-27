import React from 'react';
import {connect} from 'react-redux';
import {searchTitle} from '../../Action/actions'

const TitleSearch = ({value = '', onChange = () => {}}) => (
    <div className="search-name">
        <input className="search-name-text" type="text"  value={value} placeholder='Type the movie title...' onChange={(e) => {onChange(e.target.value)}} />
    </div>
)

const mapStateToProps = (state) => ({
    value : state.titleSearch
}) 

const mapDispatchToProps = (dispatch) => ({
    onChange : (payload) => dispatch(searchTitle(payload))
})

export default connect(mapStateToProps,mapDispatchToProps) (TitleSearch);