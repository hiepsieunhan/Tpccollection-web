import React, {Component} from 'react';
import Award from './award/Award.react';
import Utils from '../utils/supportedFuncs';

console.log(Utils);

export default class AwardList extends Component {

  state = {
    awardRefs: []
  }

  render() {
    return (
      <div>
        <button onClick={this.addAward}> Add </button>
        {this.state.awardRefs.map(ref => {
          return <Award ref={ref} key={ref} onDelete={this.deleteAward.bind(this, ref)}/>
        })}
      </div>
    );
  }

  addAward = () => {
    this.setState({
      awardRefs: [...this.state.awardRefs, Utils.generateId()]
    });
  }

  deleteAward = (id) => {
    this.setState({
      awardRefs: this.state.awardRefs.filter(curId => {
        return (!(curId === id));
      })
    });
  }

  getData = () => {
    let isValid = true;
    let data = this.state.awardRefs.map(ref => {
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
