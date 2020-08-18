import React, { Component } from 'react';
import './style.sass';

function sub(text, entity) {
  let result = text;
  Object.keys(entity)
    .forEach((key) => {
      result = result.replace('${' + key + '}', entity[key]);
    });
  return result;
}

export default class Main extends Component {
  render() {
    const global = JSON.parse(this.props.plugin._settings.parameters.global.global) || {};
    const buttons = JSON.parse(this.props.plugin._settings.parameters.instance.buttons) || [];

    const entity = {
      ...global,
      id: this.props.plugin._settings.itemId,
      ...this.props.plugin._settings.itemValue,
    };

    const renderedButtons = buttons.map((btn, i) => (
      <a
        key={i.toString()}
        href={sub(btn.link, entity)}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {sub(btn.text, entity)}
      </a>
    ));

    return (
      <div className="container">
        {renderedButtons}
      </div>
    );
  }
}
