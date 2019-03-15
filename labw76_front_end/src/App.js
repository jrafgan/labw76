import React, { Component } from 'react';
import './App.css';
//import Main from "./containers/main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <form>
                    <label htmlFor="message">Messsage:</label>
                    <input type="text" id="message" placeholder="Some message ..."/>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" placeholder="Student"/>

                    <button type="submit" id="btn-addMsg" onClick={this.sendMessage}>Send</button>
                </form>
                <ol id="chatBox"/>
            </div>
    );
    }
}

export default App;
