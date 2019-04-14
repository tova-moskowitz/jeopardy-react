import React, { Component } from 'react';
import Category from './Category.js';
import Question from './Question.js';
import './jeopardy.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Category category="Category One"/>
        <Question value='$200' question="Question One"/>
        <Question value='$400' question="Question Two"/>
        <Question value='$600' question="Question Three"/>
        <Question value='$800' question="Question Four" />
        <Question value='$1000' question="Question Five"/>
      </div>

    );
  }
}

export default App;
