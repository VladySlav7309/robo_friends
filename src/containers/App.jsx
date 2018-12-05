import React      from 'react';
import Scroll     from '../components/Scroll';
import CardList   from '../components/CardList';
import SearchBox  from '../components/SearchBox';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            robots      : [],
            searchField : ''        
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then( users => {
                this.setState({'robots' : users});
            });
    }
    onSearch = ( e ) => {
        this.setState({ 'searchField' : e.target.value });
    }
    render() {
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes( searchField.toLowerCase() );
        });

        if( ! robots.length ) {
            return <h1>Loading...</h1>
        }

        return (
            <div className="tc">
                <h1 className="robo-title">
                    RoboFriends
                </h1>
                <SearchBox onSearch = { this.onSearch } />
                <Scroll>
                    <CardList robots = { filteredRobots } />
                </Scroll>
            </div>
        )
    }
}

export default App;