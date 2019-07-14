import React, { Component } from 'react';

class TreeConfig extends Component {
  constructor() {
    super()
    this.state = {
      levelCount: 0,
      childCount: 0
    }
    this.handleLevelIncrement = this.handleLevelIncrement.bind(this)

    this.handleLevelDecrement = this.handleLevelDecrement.bind(this)

    this.handleApplyButton = this.handleApplyButton.bind(this)
  }

  handleLevelIncrement() {
    this.setState({
      levelCount: this.state.levelCount + 1
    })
  }

  handleLevelDecrement() {
    if( this.state.levelCount )
      this.setState({
        levelCount: this.state.levelCount - 1
      })
  }

  handleApplyButton() {
    this.setState({
      redirect: true
    })
  }

  render() {
    return (
      <div className="tree-config-area">
        <div className="user-input">
            <button type="button"  className="level-count-decrement-button" onClick={this.handleLevelDecrement}>-</button>
            <input type="text" className="level-count-input" value={this.state.levelCount} />
            <button type="button" className="level-count-increment-button" onClick={this.handleLevelIncrement}>+</button>
        </div>
        <div className="user-input-apply">
          <button type="button" className="" onClick={this.handleApplyButton}>Apply</button>
        </div>
      </div>
    )
  }
}

export default TreeConfig;