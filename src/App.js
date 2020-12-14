import React from 'react';
import DialogWindow from './DialogWindow';
import './App.css';

class App extends React.Component {
  state = {
    questionText: 'What r u want from me? Clear?',
    value: '',
    isOpen: false
  };
  handleClear = () => {
    this.setState({
      value: ''
    });
  };
  handleCancel = () => { 
    this.setState({
      isOpen: false
    });
  };
  handleOpenWindow = () => {
    this.setState({
      isOpen: true
    });
  };
  handleVal = (event) => this.setState({ value: event.target.value });
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleVal}/>
        <button onClick={() => this.handleOpenWindow()}>clear</button>
        <DialogWindow questionText={this.state.questionText} handleClear={this.handleClear} handleCancel={this.handleCancel} isOpen={this.state.isOpen}/>
      </div>
    );
  }
  
}

export default App;
