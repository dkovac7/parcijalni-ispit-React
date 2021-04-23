import React from 'react';
import './App.css';
import {RepositoryList, UserDetail} from './components';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName:"",
      user:null,
      repositories:[],
    };
  }

  resetState = () => {
    this.setState({
      userName:"",
      user:null,
      repositories:[],
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
        .then(res => res.json())
        .then((user) => {
          this.setState({ user: user })
          fetch(`https://api.github.com/users/${this.state.userName}/repos`)
            .then(res => res.json())
            .then((repos) => {
            this.setState({ repositories: repos })
            console.log(this.state.user)
            console.log(this.state.repositories)
            })
            .catch(console.log);
        })
        .catch(console.log);
  }

  handleOnChange = (event) => {
    this.setState({userName:event.currentTarget.value});
  }

  render(){
    return (
      <>
        <form onSubmit={this.onFormSubmit} >
          <input onChange={this.handleOnChange} type="text" value={this.state.userName}/>
          <button type="submit" disabled={this.state.userName === ""}>Go!</button>
        </form>
        {this.state.user != null && <UserDetail user={this.state.user} />}
        {this.state.repositories.length > 0 && <RepositoryList repositories={this.state.repositories} resetForm={this.resetState}/>}
      </>
    );
  };
}

export default App;
