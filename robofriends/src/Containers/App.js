import React, { Component } from 'react';
import CardList from '../Components/CardList'
import { robots } from '../Components/Robots'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render () {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}


export default App;
