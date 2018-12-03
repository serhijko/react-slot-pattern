import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    return (
      <button onClick={this.toggleShow} type="button">
        Toggle Show
      </button>
    );
  }
}

export default Button;
