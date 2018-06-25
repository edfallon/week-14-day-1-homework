import React, {Component} from 'react';

class Film extends Component{
  render(){
    return (
      <div className='film'>
        <h3 className='film-title'>{this.props.title}</h3>
        {this.props.children}

      </div>
    )
  }
}

export default Film;
