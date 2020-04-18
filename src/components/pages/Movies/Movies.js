import React, { Component } from 'react';
import MovieList from '../../MovieList/MovieList'

//class component for Movies main page
class Movies extends Component {

    state = {
        title: '',
        poster: '',
        description: ''
    }

   

    render(){
        return (
            <>
                <MovieList/>
            </>
    );
  }
}




export default Movies;