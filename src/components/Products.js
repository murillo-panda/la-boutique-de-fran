import React, { Component } from 'react';

export default class Products extends Component {
  render() {
    return (
      <div className="row content-center">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="..." alt="Card"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

