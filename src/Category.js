import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div className="category">
        {this.props.category}
      </div>
    );
  }
}

export default Category;
