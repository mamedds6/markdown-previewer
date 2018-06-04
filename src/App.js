import React from 'react';
import MarkdownInput from './MarkdownInput.js';
import HtmlOutput from './HtmlOutput.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      markdown: ''
    };
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <MarkdownInput 
          markdown={this.state.markdown}
          handleChange={this.handleChange}
        />
        <HtmlOutput
          markdown={this.state.markdown}
        />
      </div>
    );
  }
}

export default App;
