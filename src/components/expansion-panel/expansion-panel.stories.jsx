import React from 'react';

import readme from './readme.md';

export default {
  title: 'Expansion Panel',
  parameters: {
    notes: { markdown: readme },
  },
};

const space = {
  paddingTop: '8px',
};

export const defaulExpansionPanel = () => (
  <>
    <bds-expansion-panel>
      <bds-expansion-panel-header text="qualquer uma das condições abaixo">
        <bds-select>
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
      </bds-expansion-panel-header>
      <bds-expansion-panel-body text="OU">
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
      </bds-expansion-panel-body>
      <bds-expansion-panel-body text="OU">
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
      </bds-expansion-panel-body>
      <bds-expansion-panel-body>
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
        <bds-select style={space} label="teste">
          <bds-select-option value="1">OU</bds-select-option>
          <bds-select-option value="2">E</bds-select-option>
        </bds-select>
      </bds-expansion-panel-body>
    </bds-expansion-panel>
  </>
);
