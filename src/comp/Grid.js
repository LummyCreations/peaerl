import React from 'react'
import {BrowserRouter as Route} from "react-router-dom"

class Grid extends React.Component{
  render() {
    return (
      <div className="card-columns">
        <div className="card bg-info">
          <div className="card-body text-center">
            <p className="card-text">Jumia</p>
          </div>
          </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Ebay</p>
          </div>
        </div>
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Konga</p>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Amazon</p>
          </div>
        </div>
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">PayPorte</p>
          </div>
        </div>
        <div className="card bg-info">
          <div className="card-body text-center">
            <p className="card-text">Olx</p>
          </div>
        </div>
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Jiji</p>
          </div>
        </div>
        <div className="card bg-info">
          <div className="card-body text-center">
            <p className="card-text">VConnect</p>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Alibaba</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Grid
