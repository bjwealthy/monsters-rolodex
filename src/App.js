import React, {Component} from 'react';
import { CardList  } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'

//Dynamic content: Monsters Rolodex
class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: '',
    };
    /*
    //exclusive binding required if the handleChange() is an ES 5 fxn
    this.handleChange = this.handleChange.bind(this);
    */
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      //.then(response => console.log(response))
      .then(response => response.json())
      //.then(users => console.log(users))
      .then(users => this.setState({monsters: users}));
  }
  //define handleChange() as an arrow fxn:
  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }

  render(){
    /*
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */
    const { monsters, searchField} = this.state;  //destructure objects from this.state into 2 different objects
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); //returns a boolean 
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          //handleChange = { e => this.setState({searchField: e.target.value}) } 
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />  
      </div>
    );
  }  
}
export default App;
















// function based component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. My name is Bolaji
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
/*
//class based component
class App extends Component{
  constructor(){
    super();
    this.state = {
      string: 'Hello Bolaji'
    }
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        { this.state.string }
        </p>
        <button onClick = { () =>  this.setState({ string: 'Hello Ayodeji' }) }>Change Text</button>
      </header>
    </div>
    )
  }
}
export default App;
*/