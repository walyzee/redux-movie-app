import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

class Addmovie extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                title:"",
                year:"",
                isOpen : false,
                rating: 1 , 
                link:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
                description: ""
            }   
        }
        handleChange=(e) =>{ this.setState({[e.target.name] : e.target.value}) }

        modalOpener = () =>{ this.setState({isOpen : true}) }

        modalCloser = () =>{ this.setState({isOpen : false}) }

        handleSubmit = (e) =>{
            e.preventDefault();
            if (this.state.title  && this.state.year)
            {
            this.props.newMovie({
                id : Date.now(),
                title : this.state.title,
                year : this.state.year,
                image :this.state.link ,
                rating:this.state.rating,
                description:this.state.description,
            })
        }
        else {
            alert('Please fill the movie title and the year')
            return  ((this.setState({isOpen : true})))  
        }
        
    this.setState({title:"",year:"",isOpen : false,rating: 1,link:""})
    }
    render(){
        return (
            <div>
                <div className="new-movie-card" onClick={this.modalOpener}>+</div>
                <Modal isOpen={this.state.isOpen} className="movie-add-modal">
                    <div className="movie-modal-content">
                        <h2 className="modal-title">New movie</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="title">Title:</label><br />
                                <input type="text" id="name" name="title" onChange={this.handleChange} />
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
                                <input type="url" id="link" name="link" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="link">Description:</label><br />
                                <textarea type="text" id="description" name="description" onChange={this.handleChange} />
                            </div>
                            <div  className="modal-control">
                                <button className='modal-close-btn' type='button' onClick={this.modalCloser}>Close</button>
                                <button className='modal-add-btn' type='submit'>Add</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Addmovie;