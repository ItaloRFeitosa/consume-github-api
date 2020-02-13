import React, {Component} from 'react';
import './styles.css'

import Card from '../Card'

export default class Repositories extends Component{
  	constructor(props){
   		super(props);
      this.state = {repositories : props.list};
      console.log(this.state.repositories[0]);
     }

    render(){
      return(
        <div className="list">
					{this.state.repositories.map(repository => <Card repository={repository}/>)}
        </div>
      );
     }
 }