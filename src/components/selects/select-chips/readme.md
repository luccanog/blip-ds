# bds-select-chips



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                   | Type       | Default     |
| -------------- | --------------- | ------------------------------------------------------------- | ---------- | ----------- |
| `chips`        | --              |                                                               | `string[]` | `[]`        |
| `danger`       | `danger`        | Add state danger on input, use for use feedback.              | `boolean`  | `false`     |
| `disabled`     | `disabled`      | Disabled input.                                               | `boolean`  | `false`     |
| `duplicated`   | `duplicated`    | Do not accept duplicate chip elements.                        | `boolean`  | `false`     |
| `errorMessage` | `error-message` | Indicated to pass an feedback to user.                        | `string`   | `''`        |
| `icon`         | `icon`          | used for add icon in input left. Uses the bds-icon component. | `string`   | `''`        |
| `label`        | `label`         | label in input, with he the input size increases.             | `string`   | `''`        |
| `maxlength`    | `maxlength`     | Set maximum length value for the chip content                 | `number`   | `undefined` |
| `newPrefix`    | `new-prefix`    | Used for add prefix on new option select.                     | `string`   | `''`        |
| `options`      | --              |                                                               | `Option[]` | `[]`        |
| `value`        | `value`         | the value of the select.                                      | `string`   | `''`        |


## Events

| Event       | Description                              | Type                                   |
| ----------- | ---------------------------------------- | -------------------------------------- |
| `bdsBlur`   | Emitted when the select loses focus.     | `CustomEvent<void>`                    |
| `bdsCancel` | Emitted when the selection is cancelled. | `CustomEvent<void>`                    |
| `bdsChange` | Emitted when the value has changed.      | `CustomEvent<SelectChangeEventDetail>` |
| `bdsFocus`  | Emitted when the select loses focus.     | `CustomEvent<void>`                    |


## Methods

### `getChips() => Promise<string[]>`

Return the internal chips.

#### Returns

Type: `Promise<string[]>`



### `isValid() => Promise<boolean>`

Return the validity of the input chips.

#### Returns

Type: `Promise<boolean>`




## Dependencies

### Depends on

- [bds-input-chips](../../input-chips)
- [bds-icon](../../icon)
- [bds-select-option](../../select-option)

### Graph
```mermaid
graph TD;
  bds-select-chips --> bds-input-chips
  bds-select-chips --> bds-icon
  bds-select-chips --> bds-select-option
  bds-input-chips --> bds-chip
  bds-input-chips --> bds-input
  bds-chip --> bds-icon
  bds-input --> bds-icon
  bds-input --> bds-typo
  bds-input --> bds-counter-text
  bds-counter-text --> bds-typo
  bds-select-option --> bds-typo
  style bds-select-chips fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
