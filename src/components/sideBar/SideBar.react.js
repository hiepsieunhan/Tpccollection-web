import React, { Component, PropTypes } from 'react';
import { IconButton } from 'material-ui';

export default class TextArea extends Component {

  static propTypes = {
  };

  render() {

    const fakeData = {
      '2008-2009': {
        'Toan': [
          'Nguyen Thi Thu Thuy Huyen',
          'Nguyen Thi B'
        ],
        'Ly': [
          'Nguyen Van C',
          'Nguyen Thi D'
        ]
      },
      '2013-2015': {
        'Toan': [
          'Nguyen Van E',
          'Nguyen Thi F'
        ],
        'Ly': [
          'Nguyen Van G',
          'Nguyen Thi H'
        ]
      },
      '2011-2012': {
        'Toan': [
          'Nguyen Van I',
          'Nguyen Thi J'
        ],
        'Ly': [
          'Nguyen Van K',
          'Nguyen Thi L'
        ]
      },
      '2010-2011': {
        'Toan': [
          'Nguyen Van M',
          'Nguyen Thi N'
        ],
        'Ly': [
          'Nguyen Van O',
          'Nguyen Thi P'
        ]
      }
    }

    let list = this.getListYear(fakeData);

    return (
      <div id="side-bar">
        <div id="side-bar-header">
          <p> NHỮNG NGƯỜI ĐÃ ĐĂNG KÝ</p>
          <ul id="side-bar-header-summary">
            <li style={{width: '20%', textAlign: 'right'}}> <i className="material-icons">people</i> </li>
            <li style={{width: '42%', textAlign: 'left'}}> { 12412 } </li>
            <li style={{width: '28%', textAlign: 'center'}}> <IconButton iconClassName="material-icons" tooltip="Refresh"  tooltipPosition = "bottom-right" onClick={this.reloadData}>refresh</IconButton> </li>
          </ul>
        </div>
        <div id="side-bar-main-container">
          {list}
        </div>
      </div>
    );
  }

  getListYear = (listYear) => {
    return Object.keys(listYear).sort().map(year => {
      return (<ul>
                <li className="highlight year"> {year} </li>
                <li>
                  {
                    this.getListClass(listYear[year])
                  }
                </li>
              </ul>)
    })
  }

  getListClass = (listClass) => {
    return Object.keys(listClass).sort().map(_class => {
      return (<ul>
                <li className="highlight class"> {_class} </li>
                <li>
                  {
                    this.getListStudent(listClass[_class])
                  }
                </li>
              </ul>)
    })
  }

  getListStudent = (listStudent) => {
    return (
      <ul>
        {
          listStudent.map(name => {
            return (<li className="highlight student"> {name} </li>)
          })
        }
      </ul>
    );
  }




  reloadData = () => {
    console.log('reloadData');
  }

}
