import React, { Component, PropTypes } from 'react';

export default class TextArea extends Component {

  static propTypes = {
    label: PropTypes.string
  };

  render() {

    let label = this.props.label.map(text => {
      return (<span> {text} <br/> </span>);
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
        <textarea row="100" ref="TextArea" className="text-area">
        </textarea>
      </div>
    );
  }

  getValue = () => {
    return this.refs.TextArea.value;
  }
}
