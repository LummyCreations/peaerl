import React from "react"
import Grid from './Grid'

class Body extends React.Component{
  render() {
    return (
      <div id="container">
        <body id="bodyContent">
          <img src="./banner.png" alt="peaerrl" />
          <form className="form-inline">
            <input className="form-control mr-sm-2" placeholder="Search the engine" aria-label="Search" />
            <button className="btn btn-sm btn-warning" type="search"><i class="fas fa-search" aria-hidden="true"></i></button>
          </form>
          <h6 id="searchText">popular e-commerce search engine</h6>
        </body>
        <Grid />
      </div>
    );
  }
}

export default Body
