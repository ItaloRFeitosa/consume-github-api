import React, {Component} from 'react';
/*import { ReactComponent as SearchIcon} from "./search-icon.svg"*/
import "./styles.css";
import api from "../../services/api";

import Repositories from '../Repositories';

export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    result: [],
                    loading: false
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    search = async val => {
      this.setState({loading: true});
      const res = await api.get(`/search/repositories?q=${val}`);
      const result = res.data.items.slice(0,10);
      this.setState({result, loading:false});
      //console.log(this.state);
    }
    


    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.search(this.state.value);
      //alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
    
    get renderList(){
      if(this.state.loading){
        return (<p>Carregando...</p>);
      } else {
        if(this.state.result){
          return (<Repositories list={this.state.result}/>);
        }
        return (<></>);
      }
      
    }


    render() {
      return (
        <>
        <div className="search-bar">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </form>
            
        </div>
        {this.renderList}     
        </>
        
      );
    }
  }
