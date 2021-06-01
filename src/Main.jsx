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
    const global = JSON.parse(this.props.plugin.parameters.global.global) || {};
    const buttons = JSON.parse(this.props.plugin.parameters.instance.buttons) || [];

    const entity = {
      ...global,
      id: this.props.plugin.itemId,
    };

    Object.keys(this.props.plugin.fields)
        .forEach((key) => {
          const field = this.props.plugin.fields[key];
          if (field.relationships.item_type.data.id === this.props.plugin.itemType.id) {
            const fieldKey = field.attributes.api_key;
            const fieldValue = this.props.plugin.getFieldValue(field.attributes.api_key);
            entity[fieldKey] = fieldValue;
          }
        });

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
      <div>
        {renderedButtons}
      </div>
    );
  }
}
