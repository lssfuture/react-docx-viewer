// Copyright (c) 2017 PlanGrid, Inc.

import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import FileViewer from './components/file-viewer';
import docx from '../example_files/SampleSpec.docx';
import doc from '../example_files/sample.doc';



ReactDOM.render(
  <FileViewer
    filePath={docx}
  />,
  window.document.getElementById('app')
);
