import React, { Component } from 'react';

class Counter extends Component {

    // controlled component will not have it own local state
    state = { 
        value : this.props.counter.value,
        tags: ['tag1', 'tag2']
    };

    /*constructor() {
        super();
        // this.handleIncrement = this.handleIncrement.bind(this);
    } */
    
    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-" ;
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    renderTags() {
        if (this.state.tags.length === 0) return "";
        return <ul> { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
    }

    handleIncrement = () => {
        // console.log(this);
        this.setState({value: this.state.value + 1});
    }

    render() { 
        console.log('props ', this.props);
        return (
            <div>
                {/* {this.props.children} */}
                
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-sm btn-secondary m-2" onClick={this.handleIncrement}>Inc++</button>
                {/* {this.renderTags()} */}
                <button className="btn btn-danger btn-sm" 
                        onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        )
    }
}
 
export default Counter;

// diff between

// props - include data that we give to Component (READONLY) cannot change
// state - inlcudes data props thats is private (loca) to the Component

// components that owns the peice of state is the one that modifes
