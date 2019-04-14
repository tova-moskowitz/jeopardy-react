import React, { Component } from 'react';

class Question extends Component {

static defaultProps = {
  category: "Categoryyyyy",
  value: '$100'
}

  render() {
    return (
      <div className="questionColumn">
        <p className="value">{this.props.value}</p><br/>
        <p className="question">{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
