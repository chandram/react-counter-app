import React, { Component } from 'react';

class MarkdownEditor extends Component {
    state = { 
        value: 'Hello, **world**!'
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    getRawMarkup = () => {
        // const md = new Remarkable();
        // return { __html: md.render(this.state.value) };
      }

    render() { 
        return ( 
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">Enter some markdown content!</label>
                <textarea id="markdown-content" onChange={this.handleChange} defaultValue={this.state.value}>
                </textarea>
                <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()} />
            </div>
        );
    }
}
 
export default MarkdownEditor;