import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

const containerStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const contentStyle = {
  margin: "0 8px",
}

const defaultButtonStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const spaceBetween = {
  padding: '8px'
}

export const defaultButton = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} variant='primary'>Button primary</bds-button>
    <bds-button style={spaceBetween} variant='secondary'>Text secondary</bds-button>
    <bds-button style={spaceBetween} variant='tertiary'>Text tertiary</bds-button>
    <bds-button style={spaceBetween} variant='ghost'>Text ghost</bds-button>
    <bds-button style={spaceBetween} variant='delete'>Text delete</bds-button>
  </div>
);

export const disabedButton = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} variant='primary' disabled>Button primary</bds-button>
    <bds-button style={spaceBetween} variant='secondary' disabled>Text secondary</bds-button>
    <bds-button style={spaceBetween} variant='tertiary' disabled>Text tertiary</bds-button>
    <bds-button style={spaceBetween} variant='ghost' disabled>Text ghost</bds-button>
    <bds-button style={spaceBetween} variant='delete' disabled>Text delete</bds-button>
  </div>
);

export const sizeButtons = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} size="standard">Text button</bds-button>
    <bds-button style={spaceBetween} size="short">Text button</bds-button>
  </div>
);

export const buttonWithIcon = () => (
  <div style={defaultButtonStyle}>
    <bds-button style={spaceBetween} icon="file-new" size="standard">Text button</bds-button>
    <bds-button style={spaceBetween} arrow size="standard">Text button</bds-button>
  </div>
);

export const buttonWithoutText = () => (
  <>
    <div style={defaultButtonStyle}>
      <bds-button-icon style={spaceBetween} variant="primary" icon="file-new" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="secondary" icon="notes" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="tertiary" icon="warning" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="ghost" icon="info" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} variant="delete" icon="attention" size="standard"></bds-button-icon>

    </div>
    <div style={defaultButtonStyle}>
      <bds-button-icon style={spaceBetween} disabled variant="primary" icon="file-new" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="secondary" icon="notes" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="tertiary" icon="warning" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="ghost" icon="info" size="standard"></bds-button-icon>
      <bds-button-icon style={spaceBetween} disabled variant="delete" icon="attention" size="standard"></bds-button-icon>
    </div>
  </>
);
