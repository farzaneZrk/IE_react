import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  notify = () => toast.error("Wow so easy !");

  func = () => {
    this.notify()
  }

  render(){
    return (
      <div>
        <button onClick={this.func}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}

export default App;