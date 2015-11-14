import React, { Component, PropTypes } from 'react';
import SideBar from '../sideBar/SideBar.react';

export default class EditPage extends Component {

  static propTypes = {
    params: PropTypes.object
  }

  render() {
    let userId = this.props.params.id;
    console.log(userId);
    return (
      <div>
        <SideBar/>
      </div>
    );
  }

  componentWillUnmount = () => {
    console.log('EditPage unmount');
  }


}
