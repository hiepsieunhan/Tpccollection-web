import React, {PropTypes, Component} from 'react';
import Award from './Award.react';
import HighSchoolCA from './HighSchoolCA.react';
import Work from './Work.react';
import Utils from '../../utils/supportedFuncs';

export default class ItemList extends Component {

  static propTypes = {
    type: PropTypes.oneOf([
      'Award',
      'HighSchoolCA',
      'Work'
    ]).isRequired
  }

  state = {
    itemRefs: []
  }

  render() {
    return (
      <div>
        <button onClick={this.addItem}> Add </button>
        {this.state.itemRefs.map(ref => {
          switch (this.props.type) {
            case ('Award'): return <Award ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
            case ('HighSchoolCA'): return <HighSchoolCA ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
            case ('Work'): return <Work ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
          }
        })}
      </div>
    );
  }

  componentWillMount = () => {
    this.addItem();
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
      let item = this.refs[ref].getData();
      if (!item.isValid) isValid = false;
      return item.data;
    });
    return {
      data: data,
      isValid: isValid
    }
  }

}
