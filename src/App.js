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
            this.state.data.results
                .map(random => makeUserDiv(random))
            }
        </div>;
    }
}

const makeUserDiv = (random) =>
    <div>
        <div>
            <img src = {random.picture.thumbnail} alt={"user"}/>
            <h3>{random.name.first} {random.name.last}</h3>
            <p><a href="mailto:{random.email}">{random.email}</a></p>
            <hr/>
        </div>
    </div>

export default App;
