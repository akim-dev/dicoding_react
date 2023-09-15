import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="counter">
        <p>{this.state.count}</p>
      </div>
    );
  }
}
