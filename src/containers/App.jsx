import React      from 'react';
import Scroll     from '../components/Scroll';
import CardList   from '../components/CardList';
import SearchBox  from '../components/SearchBox';
import { connect } from 'react-redux';

// redux actions
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField : state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange : event => dispatch( setSearchField( event.target.value ) )
    }
}

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            robots : []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then( users => {
                this.setState({'robots' : users});
            });
    }
    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;

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
                <SearchBox onSearchChange = { onSearchChange } />
                <Scroll>
                    <CardList robots = { filteredRobots } />
                </Scroll>
            </div>
        )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);