import React, { Component } from 'react';
import CardList from './components/card-list/card-list-component';
import SearchField from './components/Search/serach-component';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      monsters:
        [
             
        ],
        searchField:''
      
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>(response.json()))
    .then((myusers)=>(this.setState({monsters:myusers})
    ))
  }

  handleChange=(e)=>{
    this.setState({searchField:e.target.value});
  }

  

   
  render() {

    // descturcting
    const {monsters,searchField}=this.state;

    const filteredMonsters=monsters.filter((monster)=>(
        monster.name.toLowerCase().includes(searchField)
      )
    )

    return (
      <div className='App'>
        <h1>Monster - By Praveen Chandran</h1>
        <SearchField placeholder='search monsters' 
        handleChange={this.handleChange}  
        ></SearchField>
         
        <CardList monsters={filteredMonsters} >
        
        </CardList>

        
      </div>
    );
  }
}

export default App;