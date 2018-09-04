import React from 'react';

import './form.css';

export default class AlbumForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSearchTerm: ""
    }
  }

  handleFormSubmit(e){
    e.preventDefault();
    let input = this.input.value;
    this.props.onSubmit(input);   
    this.input.value="";
  }

  render(){
    return (
      <div>
        <form onSubmit={ (e) => this.handleFormSubmit(e)} className="sampleForm">
          <label className="formElementSpacing"> Album Search </label><br/>
          <input type='text'  ref={ input => (this.input = input) } className='formElementSpacing'></input><br/>
          <button type='submit' className='formElementSpacing'>Click Me</button>
        </form>
      </div>
    )
  }

} 