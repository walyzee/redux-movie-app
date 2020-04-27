import { ADD_MOVIE,DELETE_MOVIE, EDIT_MOVIE,SEARCH_TITLE, SEARCH_RATING } from '../Action/actionTypes'

const initialState = {
  movies : [
    {
    id: 1,
    title: 'Armageddon',
    rating: 3,
    image: 'https://p8.storage.canalblog.com/80/71/1349409/120027564_o.jpg',
    year: 1998,
    description : 'After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet.'}, 
    {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    rating: 5,
    image : 'https://fr.web.img6.acsta.net/pictures/14/09/22/10/40/162066.jpg',
    description : 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'},
  ],
  titleSearch:'',
  ratingSearch: 1
}

const moviesReducer = (state=initialState,action)=>{
  switch (action.type){
    case ADD_MOVIE :
      return { ...state, movies: [...state.movies,action.payload] }
    case EDIT_MOVIE:
      return {...state, movies: state.movies.map((movie)=> movie.id === action.payload.id ? {...action.payload} : movie)}
    case DELETE_MOVIE : 
    return {...state, movies: state.movies.filter((movie)=>movie.id!==action.payload.id)} 
    case SEARCH_TITLE :
      return {...state,titleSearch : action.payload}
    case SEARCH_RATING :
      return {...state,ratingSearch : action.payload}
    default : 
      return state
  }
  
  }
  export default moviesReducer