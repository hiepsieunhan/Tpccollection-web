import React, { Component, PropTypes } from 'react';

export default class EditPage extends Component {

  propTypes = {
    params: PropTypes.object
  }

  render() {
    let userId = this.props.params.id;
    return (
      <div>
        {userId}
      </div>
    );
  }

}
