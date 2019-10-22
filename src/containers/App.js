import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
// import { robots } from './Robots.js';
import './App.css';      //state means describes the application ie robots and searchbox
    


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],  //it describes our app and it lives in the parent component
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json();
        })
        .then(users =>{
            this.setState({ robots: users});
        })
        
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value })       
    }       
    render(){
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1> 
                <SearchBox searchChange = {this.onSearchChange}/>       
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
    
}

export default App;