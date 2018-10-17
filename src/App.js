import React, { Component } from 'react';
// import { createStore  } from 'redux';

// import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import MarkdownEditor from './components/MarkdownEditor';

// Life Cycle Hooks
// Mount - Constructor, render, componentDidMount
// Update - render, componentDidUpdate
// UnMount - componentWillMount

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0}
    ]
  };
  // Step#1
  // const store = createStore(reducer, "LOGIN");
  // // Stpe 2
  // const reducer = (state, action) => {
  //   if (state.type === "LOGIN") {
  //     return action.payload
  //   }
  // }

  // //Step 3
  // store.subscribe(() => {
  // });

  // //Step 4 dispatch action
  // store.dispatch({type: });


  componentDidMount() {
    console.log("App Mounted!");
    //AJAX call and this.setState({movies})
  }

  componentDidUpdate() {
    console.log("App Did Update!");
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(v => v.id !== counterId);
      // console.log('Event Handler called--> ' , counterId, counters);
      this.setState({counters})
  }

  // handleReset will set the value to zero but since each <counter/> component
  // maintains its own local state as state = {value : this.props.counter.value}
  // resetting here does not update the view
  // To achieve that we make the counter compoent as controlled component
  // ie, controlled component will not have it own local state, ie controlled by parent
  handleReset = () => {
      const counters = this.state.counters.map(v => {
          // if(v.id === counterId)
          v.value = 0;
          return v;    
      });
      this.setState({counters})
  }

  handleIncrement = (counter) => {
      // array destructuring using spread operator
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      // object destructuring
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  };

  render() {
    console.log("App Rendered!");
    return (
      <React.Fragment>
        {/* <>Short form of react fragment */}
        <NavBar totalCounter={this.state.counters.reduce((a, c) => a + c.value, 0)}/>
        <main className="container">
          <Counters counters={this.state.counters}
                    onReset={this.handleReset} 
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}/>
          {/* <MarkdownEditor /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
