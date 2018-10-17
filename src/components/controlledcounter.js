import React, { Component } from 'react';

class ControlledCounter extends Component {
    
    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-" ;
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    componentDidUpdate(previousProps, previousState) {
        console.log("ControlledCounter Did Update! \n", previousProps, "\n", previousState);
        if (previousProps.counter.value !== this.props.counter.value) {
            console.log("Do something...");
        }
    }

    componentWillUnmount() {
        console.log("ControlledCounter Will Unmount ", this.props.counter);
    }

    render() { 
        // console.log('props ', this.props);
        console.log("ControlledCounter Rendered!");
        const {onIncrement, onDelete, counter} = this.props;
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-sm btn-secondary m-2" 
                        onClick={() => onIncrement(counter)}>Inc++</button>
                <button className="btn btn-danger btn-sm" 
                        onClick={() => onDelete(counter.id)}>Delete</button>
            </div>
        )
    }
}
 
export default ControlledCounter;