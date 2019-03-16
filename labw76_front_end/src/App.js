import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {changeValue, sendToServer} from "./store/actions";

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
        return (
            <div className="App">
                <form onSubmit={this.props.send}>
                    <label htmlFor="message">Messsage:</label>
                    <input name="message" type="text" placeholder="Some message ..." onChange={this.props.changeValue}/>
                    <label htmlFor="author">Author:</label>
                    <input name="author" type="text" placeholder="Student" onChange={this.props.changeValue}/>
                    <button type="submit" id="btn-addMsg" onClick={this.props.send}>Send</button>
                </form>
                <ol id="chatBox"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        author: state.author,
        message: state.message,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeValue: (e) => dispatch(changeValue(e)),
        send: (e) => dispatch(sendToServer(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
