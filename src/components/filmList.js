import React, {Component} from 'react';
import Film from './film.js';


class FilmList extends Component{
  render(){
    const filmNodes = this.props.data.map(film => {
      return <Film title={film.title} key={film.id}>
        <a href="https://www.imdb.com/showtimes/">Showtimes</a>
      </Film>
    })
    return (
      <div className='film-list'>{filmNodes}</div>
    )
  }
}

export default FilmList;
