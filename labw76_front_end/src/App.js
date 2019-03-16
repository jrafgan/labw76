import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {changeValue, getMessages, sendToServer} from "./store/actions";
import moment from "moment";

//import Main from "./containers/main";

class App extends Component {

    componentDidMount() {
        this.props.getMessages();
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.props.send}>
                    <label htmlFor="message">Messsage:</label>
                    <input name="message" type="text" placeholder="Some message ..." onChange={this.props.changeValue}/>
                    <label htmlFor="author">Author:</label>
                    <input name="author" type="text" placeholder="Student" onChange={this.props.changeValue}/>
                    <button type="submit" id="btn-addMsg" onClick={this.props.send}>Send</button>
                </form>
                <ol id="chatBox">
                    {this.props.apiMessages.map((item, ndx)=>(
                        <li key={ndx} className='li'><p>{moment(item.dateTime).format('llll')}</p><p>{item.author}</p><p>{item.message}</p></li>
                    ))}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        author: state.author,
        message: state.message,
        apiMessages: state.apiMessages,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMessages:() => dispatch(getMessages()),
        changeValue: (e) => dispatch(changeValue(e)),
        send: (e) => dispatch(sendToServer(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
