import React, {Component} from 'react'
/*import { ReactComponent as SearchIcon} from "./search-icon.svg"*/
import "./styles.css"

export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="search-bar">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </form>         
        </div>
      );
    }
  }
