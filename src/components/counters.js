import React, { Component } from 'react';
// import Counter from './counter';
import ControlledCounter from './controlledcounter';

class Counters extends Component {

    render() { 
        const {onReset, onIncrement, onDelete, counters} = this.props;

        return ( <div>
            <button className="btn btn-primary btn-sm" 
                        onClick={onReset}>Reset</button>   
            {/* {this.state.counters.map(counter => (
                <Counter key={counter.id}  // key attrbute is internally used by react
                        //  id={counter.id}
                         onDelete={this.handleDelete}
                        //  value={counter.value}
                         counter={counter}
                         >
                    <h4>Counter #{counter.id}</h4>
                </Counter>
            ))}
            <br/>
            <h4>Controlled Components</h4>  */}
            {counters.map(counter => (
                <ControlledCounter key={counter.id}  // key attrbute is internally used by react
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        counter={counter} >
                    <h4>Counter #{counter.id}</h4>
                </ControlledCounter>
            ))}
        </div> );
    }
}
 
export default Counters;