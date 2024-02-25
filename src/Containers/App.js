import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist.js';
import SearchBox from '../Components/SearchBox.js' ;
import './App.css' ;



class  App extends Component {
    constructor() {
        super()
        this.state = {
        robots : [],
        searchfield: ''
         
        }
    }
 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
  
    }

    render() {

        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
       })
       
        return (
            <div className='tc'>
                <h1 classNAme='f5'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}  />  
            <Cardlist robots= {filteredRobots} />          
        </div>
        );
    }
}

export default App;
