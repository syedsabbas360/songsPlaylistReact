import React, { Component } from 'react';



export default class PlayListItem extends Component {

  render() {
    return (
      <div className="PlayList">
        <form onSubmit={this.handleFormUpdate}>
          <button type='submit'>Add to the List</button>
        </form>
        <div>
          <PlayListItem songs={this.props.songs}/>

        </div>
      </div>

    );
  }
}
