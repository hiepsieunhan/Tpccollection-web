import React, {PropTypes, Component} from 'react';
import SecondaryCard from '../SecondaryCardContainer.react';
import Award from './Award.react';
import HighSchoolCA from './HighSchoolCA.react';
import Degree from './Degree.react';
import Work from './Work.react';
import Utils from '../../utils/supportedFuncs';

const initListRef = data => {
  const length = data && data.length ? data.length : 0;
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(Utils.generateId());
  }
  return list;
}

export default class ItemList extends Component {

  static propTypes = {
    type: PropTypes.oneOf([
      'Award',
      'HighSchoolCA',
      'Degree',
      'Work'
    ]).isRequired,
    initData: PropTypes.array
  }

  state = {
    itemRefs: initListRef(this.props.initData),
    isFirstRender: true,
    initData: this.props.initData
  }

  render() {
    const titles = {
      'Award': 'Thành tích học tập và thi cử',
      'HighSchoolCA': 'Hoạt động ngoại khóa',
      'Work': 'Quá trình làm việc',
      'Degree': 'Quá trình học tập sau cấp 3'
    }

    const initData = this.state.initData;
    const shouldInit = (initData && this.state.isFirstRender);

    return (
      <SecondaryCard title={titles[this.props.type]} style={{padding: '5px'}} leftButton={{onClick: this.addItem, title: 'Add'}}>
        {this.state.itemRefs.map((ref, index) => {
          const curInitData = shouldInit ? initData[index] : null;
          switch (this.props.type) {
            case ('Award'): return <Award initData={curInitData} ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)} />;
            case ('HighSchoolCA'): return <HighSchoolCA initData={curInitData} ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
            case ('Work'): return <Work initData={curInitData} ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
            case ('Degree'): return <Degree initData={curInitData} ref={ref} key={ref} onDelete={this.deleteItem.bind(this, ref)}/>;
          }
        })}
      </SecondaryCard>
    );
  }

  componentDidMount = () => {
    this.setState({
      isFirstRender: false,
      initData: null
    });
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
