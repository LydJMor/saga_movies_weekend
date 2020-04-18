
//import react and redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

//import movie item from Movie
import Movie from '../Movie/Movie';



class MovieList extends Component {

    componentDidMount() {
        this.getMovies();
      }

      getMovies = () => {
        this.props.dispatch({type: 'FETCH_MOVIES'})
      }

    render() {
        return (
            <div>
                {this.props.reduxStore.movies.map((movie, item) => 
                     <Movie key={item} movie={movie}/>)}
            </div>
    )
  }
}


//connecting reduxStore to Movies.js
const mapStatetoProps = (reduxStore) => ({
    reduxStore
})




export default connect(mapStatetoProps)(MovieList);