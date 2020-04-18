import React, { Component } from 'react';

//Routing movie item
import {withRouter} from 'react-router-dom';

class Movie extends Component {

  render() {
    const movie = this.props.movie;
    return (
      <>
        <div>
            <h1>{movie.title}</h1>
             <div className='moviePoster'>
                <img src={movie.poster} alt={movie.description}/>
            </div>
            <div>
                <p>{movie.description}</p>
            </div>
        </div>
      </>
    );
  }
}

export default withRouter(Movie);