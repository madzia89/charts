import React, {Component} from 'react';
import './App.css';


class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        fetch("https://randomuser.me/api?results=5")
            .then(response => response.json())
            .then(data => this.setState({data}));
    }

    render() {
        return <div>
            {this.state.data &&
            (this.state.data).results
                .map(random => makeUserDiv(random))}
        </div>;
    }
}

const makeUserDiv = (random) => <h1>{random.name.first}</h1>

export default App;
