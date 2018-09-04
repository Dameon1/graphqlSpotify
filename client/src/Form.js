import React from 'react';

import './form.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'

const GET_SONG_URL = gql`
query song($name: String!) {
  song(name: $name){
    songUrl
  }
}
`;

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSearchTerm: ""
    }
  }

  handleFormSubmit(e){
    e.preventDefault();
    let input = this.input.value;
    console.log(input);
    console.log(this.props);
    this.props.onSubmit(input);
   
    this.input.value="";
  }

  render(){
    return (
      <div>
        <Query
        query={ GET_SONG_URL }
        variables={ { name: this.state.currentSearchTerm } }> 
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          //if (error) return <p>Error :(</p>;
            return (
              <div>
              <form onSubmit={ (e) => this.handleFormSubmit(e)} className="sampleForm">
                <label className="formElementSpacing"> Song Search </label><br/>
                <input type='text'  ref={ input => (this.input = input) } className='formElementSpacing'></input><br/>
                <button type='submit' className='formElementSpacing'>Click Me</button>
              </form>
             {/* <form onSubmit={ (e) => this.handleFormSubmit(e)} className="sampleForm">
                 <label className="formElementSpacing"> Album Search </label><br/>
                <input type='text'  ref={ input => (this.input = input) } className='formElementSpacing'></input><br/>
                <button type='submit' className='formElementSpacing'>Click Me</button>
              </form>
              <form onSubmit={ (e) => this.handleFormSubmit(e)} className="sampleForm">
                <label className="formElementSpacing"> Artist Search </label><br/>
                <input type='text'  ref={ input => (this.input = input) } className='formElementSpacing'></input><br/>
                <button type='submit' className='formElementSpacing'>Click Me</button>
              </form> */}
            </div>
            )
          }}
        </Query>
      </div>
    )
  }

} 
