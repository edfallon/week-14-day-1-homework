import React, {Component} from 'react';
import FilmList from '../components/filmList.js'

class FilmBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id:1, title: 'Sausage Party'},
        {id:2, title: 'Cafe Society'},
        {id:3, title: 'Morgan'},
        {id:4, title: 'The 9th Life of Louis Drax'},
        {id:5, title: 'Naam Hai Akira'},
        {id:6, title: 'Equity'},
        {id:7, title: 'Things to Come'}
      ]
    };
  }
  render(){
    return (
      <div className='film-box'>
        <h2>Uk Opening This Week</h2>
        <FilmList data={this.state.data}/>
      </div>
    )
  }
}

export default FilmBox;
