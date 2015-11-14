import React, { Component, PropTypes } from 'react';
import { IconButton } from 'material-ui';
import SideBarListYear from './SideBarListYear.react';
import { connect } from 'react-redux';
import { reload } from '../../actions/sideBar';


class SideBar extends Component {

  static propTypes = {
    sideBar: PropTypes.object,
    dispatch: PropTypes.func
  };

  render() {

    const { sideBar, dispatch } = this.props;

    console.log(sideBar.data);

    const list = sideBar.years.sort().map((year, index) => {
      return <SideBarListYear key={index} year={year} list={sideBar.data} dispatch={dispatch}/>
    });

    return (
      <div id="side-bar">
        <div id="side-bar-header">
          <p> NHỮNG NGƯỜI ĐÃ ĐĂNG KÝ</p>
          <ul id="side-bar-header-summary">
            <li style={{width: '20%', textAlign: 'right'}}> <i className="material-icons">people</i> </li>
            <li style={{width: '42%', textAlign: 'left'}}> { sideBar.count } </li>
            <li style={{width: '28%', textAlign: 'center'}}> <IconButton disabled={ sideBar.isLoading } iconClassName="material-icons" tooltip="Refresh"  tooltipPosition = "bottom-right" onClick={this.reloadData}>refresh</IconButton> </li>
          </ul>
        </div>
        <div id="side-bar-main-container">
          {list}
        </div>
      </div>
    );
  }

  componentWillMount = () => {
    this.reloadData();
  }

  reloadData = () => {
    const { dispatch } = this.props;
    dispatch(reload());
  }
}


var select = (state) => {
  return {
    sideBar: state.sideBar
  }
}


export default connect(select)(SideBar);
