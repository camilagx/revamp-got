import React from 'react';
import './houses.scss';

export default class Houses extends React.Component {

  state = {
  }

  render (){
      const { id, name, allegiance, sigil, city, words } = this.props.house;
      const { removeHouse } = this.props;
  return (
    <article className="house">
      <div className="img-container">
          <img src={sigil} alt="sigil of house"/>
          <span className="close-btn" onClick={()=>removeHouse(id)}>
              x
          </span>
      </div>
      <div className="house-info">
          <h3>{name}</h3>
          <h4>City: {city}</h4>
          <h4>{words}</h4>
          <h5>allegiance: </h5>
          <p>{allegiance}</p>
      </div>
    </article>
  );
  }
}