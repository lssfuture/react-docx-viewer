// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';

import {
  DocxViewer,
} from './drivers';

class FileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const container = document.getElementById('pg-viewer');
    const height = container ? container.clientHeight : 0;
    const width = container ? container.clientWidth : 0;
    this.setState({ height, width });
  }


  render() {
    return (
      <div className="pg-viewer-wrapper">
        <div className="pg-viewer" id="pg-viewer">
          <DocxViewer {...this.props} width={this.state.width} height={this.state.height} />
        </div>
      </div>
    );
  }
}

FileViewer.propTypes = {
  filePath: PropTypes.string.isRequired,
  onError: PropTypes.func,
  errorComponent: PropTypes.element,
  unsupportedComponent: PropTypes.element,
};

FileViewer.defaultProps = {
  onError: () => null,
  errorComponent: null,
  unsupportedComponent: null,
};

export default FileViewer;
module.exports = FileViewer;
