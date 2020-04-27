import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

class editModal extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                id : this.props.movie.id,
                title:this.props.movie.title,
                year:this.props.movie.year,
                rating: this.props.movie.rating , 
                link: this.props.movie.image,
                description:this.props.movie.description,
                isOpen : false
            }   
        }
        handleChange=(e) =>{
            this.setState({[e.target.name] : e.target.value})
        }

        modalOpener = () =>{
            this.setState({isOpen : true})
        }

        modalCloser = () =>{
            this.setState ({
                id : this.props.movie.id,
                title:this.props.movie.title,
                year:this.props.movie.year,
                rating: this.props.movie.rating , 
                link: this.props.movie.image,
                description:this.props.movie.description,
                isOpen : false
            })
        }

        handleSubmit = (e) =>{
            e.preventDefault();
            if (this.state.title  && this.state.year)
            {
            this.props.editedMovie({
                id : this.state.id,
                title : this.state.title,
                year : this.state.year,
                image :this.state.link || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png' ,
                rating:this.state.rating,
                description:this.state.description,
            })
            this.setState({isOpen : false})
        }
        else {
            alert('Please fill the movie title and the year')
            return  ((this.setState({isOpen : true})))  
        }
}
    render(){
        return (
            <div>
                <button className="edit-btn" onClick={this.modalOpener}>Edit</button>
                <Modal isOpen={this.state.isOpen} className="movie-edit-modal">
                    <div className="movie-modal-content">
                        <h2 className="modal-title">Edit movie</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="title">Title:</label><br />
                                <input type="text" id="name" name="title" value={this.state.title} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="year">Year:</label><br />
                                <input type="number" id="year" name="year" min="1900" value={this.state.year} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="rating">Rating:</label><br />
                                <input type="number" id="rating" name="rating" min="1" max="5" value={this.state.rating} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="link">Image url:</label><br />
                                <input type="url" id="link" name="link" value={this.state.link} onChange={this.handleChange} />
                            </div>
                            <label htmlFor="description">Description:</label><br />
                            <textarea type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} />
                            <div  className="modal-control">
                                <button className='modal-close-btn' type='button' onClick={this.modalCloser}>Close</button>
                                <button className='modal-add-btn' type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default editModal;