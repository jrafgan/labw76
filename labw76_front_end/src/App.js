import React, { Component } from 'react';
import './App.css';
//import Main from "./containers/main";

class App extends Component {

    state = {
        dateTime: '',
    };

    componentDidMount() {
        //this.loadData();
    }



    render() {
        const date = new Date('2018-04-05T10:02:05.081Z');
        const date2 = date.getDate();
        console.log('this is date2', date2);
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

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeValue: (e) => dispatch(changeValue(e)),
        loadMessages: () => dispatch(getMessages())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
