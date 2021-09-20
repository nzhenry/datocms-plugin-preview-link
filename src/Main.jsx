import at from 'lodash.at';
import React, { Component } from 'react';
import './style.sass';

function sub(text, entity, locale) {
  let result = text;
  entity["locale"] = locale;
  Object.keys(entity)
    .forEach((key) => {
      if(typeof entity[key] === "object"){
        if(entity[key] && entity[key][locale]){
          result = result.replace('${' + key + '}', entity[key][locale]);
        }
      } else{
        result = result.replace('${' + key + '}', entity[key]);
      }
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
      this.props.plugin.site.attributes.locales.map((locale) => (
        <a
        key={locale + i.toString()}
        href={`${sub(btn.link, entity, locale)}`}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        >
        {`${locale}: ${sub(btn.text, entity, locale)}`}
      </a>
        ))
    ));

    return (
      <div>
        {renderedButtons}
      </div>
    );
  }
}
