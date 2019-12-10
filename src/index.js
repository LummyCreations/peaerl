import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './comp/App';



class Peaerl extends App {
    render() {
      return (
        <App/>
      );
    }
  }

ReactDOM.render(
  <Peaerl/>,
  document.getElementById('root')
)

