import React, { Component } from "react";
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    // onSearchChange(event) {
    //     const filteredRobots = this.state.robots.filter((robot) => {
    //         return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    //     });
    //     console.log(filteredRobots);
    // }
        /**Building a React App 3 (19:55 onwards)
         * 
         * the value of "this" is not referring to the "App", because the event happened in the "input", the value of "this" is input, and "input" doesn't have "state.robots". And this is a trick that you always forget, but just keep this in mind as a rule of thumb:
        With anything that comes from React, so constructor and render are pre-built in React, any time you make your own methods on a component, so arrow functions syntax, and this makes sure that the "this" value is according to where it was created, which is the "App" */  
        
        onSearchChange = (event) => {
            this.setState({searchField: event.target.value});

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
    render() {
            const {robots, searchField} = this.state;
            const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        
    return robots.length === 0 ? <h1>Loading</h1> : (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>     
            </div>
    )
     


    //     if(robots.length === 0){
    //         return <h1>Loading</h1>
    //     }
    //     else{        
    //     return (
    //         <div className="tc">
    //             <h1 className="f1">Robofriends</h1>
    //             <SearchBox searchChange={this.onSearchChange}/>
    //             <Scroll>
    //                 <CardList robots = {filteredRobots}/>
    //             </Scroll>
                
    //         </div>
    // )
    //     }    
    }
}

export default App;