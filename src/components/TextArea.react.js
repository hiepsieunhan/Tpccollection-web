import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class TextArea extends Component {

  static propTypes = {
    label: PropTypes.array,
    initData: PropTypes.string
  };

  render() {

    let label = this.props.label.map((text, index)=> {
      return (<span key={index}> {text} <br/> </span>);
    });

    const style = {
      fontSize: '18px',
      fontWeight: 400,
      color: '#424242',
      verticalAlign: 'middle'
    }

    return (
      <div style={{paddingRight: '10%'}}>
        <span style={style}> {label} </span>
        <textarea ref="TextArea" className="text-area">
        </textarea>
      </div>
    );
  }

  componentDidMount = () => {
    const initData = this.props.initData;
    if (initData) {
      ReactDOM.findDOMNode(this.refs.TextArea).value = initData;
    }
  }

  getValue = () => {
    return ReactDOM.findDOMNode(this.refs.TextArea).value;
  }
}
