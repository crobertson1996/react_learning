import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList'
import { robots } from '../Components/Robots'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import Clock from '../Components/Clock'
import ErrorBoundary from '../Components/ErrorBoundary'


function App() {
  const [searchField, setSearchField] = useState("")

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <Clock />
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}


export default App;



// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       robots: robots,
//       searchField: ''
//     }
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value })
//   }


//   render () {
//     const { robots, searchField } = this.state;
//     const filteredRobots = robots.filter(robots => {
//       return robots.name.toLowerCase().includes(searchField.toLowerCase());
//     })

//     return (
//       <div className='tc'>
//         <h1>RoboFriends</h1>
//         <Clock />
//         <SearchBox searchChange={this.onSearchChange}/>
//         <Scroll>
//           <ErrorBoundary>
//             <CardList robots={filteredRobots}/>
//           </ErrorBoundary>
//         </Scroll>
//       </div>
//     );
//   }
// }


// export default App;
