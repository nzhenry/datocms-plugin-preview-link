import React, { Component } from 'react';
import './style.sass';

function prepareURL(baseUrl, relativeUrl, entity) {
  let combinedUrl = baseUrl + relativeUrl;
  Object.keys(entity).forEach(key => {
    // console.log('combinedUrl', combinedUrl);
    combinedUrl = combinedUrl.replace('${' + key + '}', entity[key]);
  });
  return combinedUrl;
}

export default class Main extends Component {
  render() {
    // const { fieldValue } = this.props;
    // console.log('params', JSON.stringify(this.props.plugin._settings.parameters));
    // console.log('this.props');

    const global = this.props.plugin._settings.parameters.global;
    const instance = this.props.plugin._settings.parameters.instance;
    const entity = {
      id: this.props.plugin._settings.itemId,
      ...this.props.plugin._settings.itemValue,
    };

    // console.log('global', global);
    // console.log('instance', instance);
    // console.log('entity', entity);

    const draftURL = prepareURL(global.draftBaseUrl, instance.draftRelativeUrl, entity);
    const liveURL = prepareURL(global.liveBaseUrl, instance.liveRelativeUrl, entity);

    return (
      <div className="container">
        <a href={draftURL} className="btn">{global.draftText}</a>
        <a href={liveURL} className="btn">{global.liveText}</a>
      </div>
    );
  }
}
