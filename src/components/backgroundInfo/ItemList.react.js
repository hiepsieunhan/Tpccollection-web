import React, {PropTypes, Component} from 'react';
import SecondaryCard from '../SecondaryCardContainer.react';
import Award from './Award.react';
import HighSchoolCA from './HighSchoolCA.react';
import Degree from './Degree.react';
import Work from './Work.react';
import Utils from '../../utils/supportedFuncs';

export default class ItemList extends Component {

  static propTypes = {
    type: PropTypes.oneOf([
      'Award',
      'HighSchoolCA',
      'Degree',
      'Work'
    ]).isRequired
  }

  state = {
    itemRefs: []
  }

  render() {
    const titles = {
      'Award': 'Thành tích học tập và thi cử',
      'HighSchoolCA': 'Hoạt động ngoại khóa',
      'Work': 'Quá trình làm việc',
      'Degree': 'Quá trình học tập sau cấp 3'
    }
    return (
      <SecondaryCard title={titles[this.props.type]} style={{padding: '5px'}} leftButton={{onClick: this.addItem, title: 'Add'}}>
        {this.state.itemRefs.map(ref => {
          switch (this.props.type) {
            case ('Award'): return <Award ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
            case ('HighSchoolCA'): return <HighSchoolCA ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
            case ('Work'): return <Work ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
            case ('Degree'): return <Degree ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
          }
        })}
      </SecondaryCard>
    );
  }

  componentWillMount = () => {
    //this.addItem();
  }

  addItem = () => {
    this.setState({
      itemRefs: [...this.state.itemRefs, Utils.generateId()]
    });
  }

  deleteItem = (id) => {
    this.setState({
      itemRefs: this.state.itemRefs.filter(curId => {
        return (!(curId === id));
      })
    });
  }

  getData = () => {
    let isValid = true;
    let data = this.state.itemRefs.map(ref => {
      return this.refs[ref].getData();
    });
    data = data.filter(item => {
      return item.isValid;
    });
    data = data.map(item => item.data);
    return {
      data: data,
      isValid: isValid
    }
  }

}
